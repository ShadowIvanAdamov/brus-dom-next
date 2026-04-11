"use client";

import { Reveal } from "@/hooks/useScrollReveal";
import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";
import { Phone, MessageCircle, Send } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/79642810173?text=Здравствуйте,%20интересует%20строительство%20дома%20или%20бани.%20Хотел%20бы%20узнать%20стоимость";
const TELEGRAM_URL = "https://t.me/AntonVladimirovich77";
const PHONE = "89642810173";

export default function CostCalculator() {
  const [buildType, setBuildType] = useState("");
  const [size, setSize] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!buildType) { toast.error("Выберите, что хотите построить"); return; }
    if (!name.trim()) { toast.error("Укажите ваше имя"); return; }
    if (!phone.trim()) { toast.error("Укажите телефон для связи"); return; }

    setSubmitting(true);
    const message = [buildType, size ? `Размер: ${size}` : ""].filter(Boolean).join(". ");

    try {
      const { error } = await supabase.functions.invoke("send-lead-email", {
        body: { name: name.trim(), phone: phone.trim(), message },
      });
      if (error) throw error;

      toast.success("Спасибо! Мы получили вашу заявку и скоро свяжемся с вами.");
      setBuildType(""); setSize(""); setName(""); setPhone("");
    } catch (err) {
      console.error("Lead submit error:", err);
      toast.error("Не удалось отправить заявку. Попробуйте ещё раз или свяжитесь с нами по телефону.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="calculator" className="py-20 md:py-28 bg-secondary">
      <div className="container">
        <div className="max-w-xl mx-auto">
          <Reveal>
            <h2 className="font-display font-extrabold text-2xl md:text-4xl text-secondary-foreground text-center mb-4">
              Рассчитайте стоимость
            </h2>
            <p className="text-secondary-foreground/70 text-center mb-10">
              Ответьте на 3 вопроса и получите предварительный расчёт
            </p>
          </Reveal>

          <Reveal>
            <form onSubmit={handleSubmit} className="bg-card rounded-lg p-6 md:p-10 shadow-elevated space-y-6">
              <div>
                <label className="block font-display font-semibold text-foreground mb-3 text-sm">Что хотите построить? *</label>
                <div className="grid grid-cols-2 gap-3">
                  {["Дом", "Баня", "Домокомплект", "Другое"].map((opt) => (
                    <button key={opt} type="button" onClick={() => setBuildType(opt)}
                      className={`px-4 py-3 rounded-lg border text-sm font-medium transition-colors ${buildType === opt ? "bg-primary text-primary-foreground border-primary" : "bg-background text-foreground border-border hover:border-primary/50"}`}>
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="size" className="block font-display font-semibold text-foreground mb-3 text-sm">Примерный размер</label>
                <input id="size" type="text" placeholder="Например: 6×8, 100 м²" value={size} onChange={(e) => setSize(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors text-sm" />
              </div>

              <div>
                <label htmlFor="name" className="block font-display font-semibold text-foreground mb-3 text-sm">Ваше имя *</label>
                <input id="name" type="text" placeholder="Иван" value={name} onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors text-sm" />
              </div>

              <div>
                <label htmlFor="phone" className="block font-display font-semibold text-foreground mb-3 text-sm">Телефон *</label>
                <input id="phone" type="tel" placeholder="+7 999 123-45-67" value={phone} onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors text-sm" />
              </div>

              <button type="submit" disabled={submitting}
                className="w-full py-4 bg-primary text-primary-foreground font-display font-bold text-base rounded-lg hover:bg-accent transition-colors shadow-card disabled:opacity-60 disabled:cursor-not-allowed">
                {submitting ? "Отправляем…" : "Получить расчёт"}
              </button>

              <p className="text-center text-muted-foreground text-xs">
                Свяжемся с вами и подготовим предварительный расчёт в&nbsp;течение&nbsp;24&nbsp;часов
              </p>
            </form>
          </Reveal>

          <Reveal>
            <div className="mt-8 text-center">
              <p className="text-secondary-foreground/60 text-sm mb-4">Или свяжитесь с нами напрямую</p>
              <div className="flex flex-wrap justify-center gap-3">
                <a href={`tel:+7${PHONE.slice(1)}`} className="inline-flex items-center gap-2 px-5 py-3 bg-secondary-foreground/5 text-secondary-foreground rounded-lg hover:bg-secondary-foreground/10 transition-colors font-medium text-sm border border-secondary-foreground/10">
                  <Phone className="w-4 h-4 text-accent" /> Позвонить
                </a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 bg-secondary-foreground/5 text-secondary-foreground rounded-lg hover:bg-secondary-foreground/10 transition-colors font-medium text-sm border border-secondary-foreground/10">
                  <MessageCircle className="w-4 h-4 text-accent" /> WhatsApp
                </a>
                <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 bg-secondary-foreground/5 text-secondary-foreground rounded-lg hover:bg-secondary-foreground/10 transition-colors font-medium text-sm border border-secondary-foreground/10">
                  <Send className="w-4 h-4 text-accent" /> Telegram
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
