"use client";

import { Reveal } from "@/hooks/useScrollReveal";
import { Shield, Clock, Camera, Star, Users, Hammer } from "lucide-react";

const reviewImages = [
  { src: "/images/review-1.jpg", alt: "Отзыв Сергея — сруб дома 6×6 из бруса" },
  { src: "/images/review-2.jpg", alt: "Отзыв Алексея — строительство дома и бани из бруса" },
  { src: "/images/review-3.jpg", alt: "Отзыв Натальи — дома и бани из бруса" },
  { src: "/images/review-4.jpg", alt: "Отзыв Антонины Ивановны — дома и бани из бруса" },
];

const guarantees = [
  { icon: Shield, text: "Поэтапная оплата" },
  { icon: Clock, text: "Опыт строительства более 15 лет" },
  { icon: Camera, text: "Фото и видео отчёты с объектов" },
  { icon: Star, text: "Полная комплектация и техническое описание" },
  { icon: Users, text: "Без посредников — работаем напрямую" },
  { icon: Hammer, text: "Можем строить из вашего материала" },
];

export default function TrustSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <Reveal>
          <h2 className="font-display font-extrabold text-2xl md:text-4xl text-foreground text-center mb-4">Нам доверяют</h2>
          <p className="text-muted-foreground text-center mb-14 max-w-xl mx-auto">Реальные отзывы наших клиентов на Авито</p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {reviewImages.map((r) => (
            <Reveal key={r.alt}>
              <div className="bg-card rounded-lg shadow-card overflow-hidden">
                <img src={r.src} alt={r.alt} className="w-full h-auto object-contain" loading="lazy" />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="bg-card rounded-lg p-8 md:p-10 shadow-card max-w-3xl mx-auto">
            <h3 className="font-display font-bold text-xl text-foreground text-center mb-8">Наши гарантии</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {guarantees.map((g) => (
                <div key={g.text} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <g.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm text-foreground font-medium">{g.text}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
