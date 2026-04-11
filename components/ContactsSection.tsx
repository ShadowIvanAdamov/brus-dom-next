"use client";

import { Reveal } from "@/hooks/useScrollReveal";
import { Phone, Mail, MessageCircle, Send } from "lucide-react";

const PHONE = "89642810173";

export default function ContactsSection() {
  return (
    <section id="contacts" className="py-20 md:py-28 bg-secondary">
      <div className="container">
        <Reveal>
          <h2 className="font-display font-extrabold text-2xl md:text-4xl text-secondary-foreground text-center mb-10">Свяжитесь с нами</h2>
        </Reveal>

        <Reveal>
          <div className="max-w-xl mx-auto space-y-6">
            <a href={`tel:+7${PHONE.slice(1)}`} className="flex items-center gap-4 bg-secondary-foreground/5 rounded-lg p-5 hover:bg-secondary-foreground/10 transition-colors group">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-accent" />
              </div>
              <div>
                <div className="text-secondary-foreground/60 text-xs font-medium mb-1">Телефон</div>
                <div className="text-secondary-foreground font-display font-bold text-lg">8 964 281-01-73</div>
              </div>
            </a>

            <div className="grid grid-cols-2 gap-4">
              <a href="https://wa.me/79642810173?text=Здравствуйте,%20интересует%20строительство%20дома%20или%20бани.%20Хотел%20бы%20узнать%20стоимость" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-secondary-foreground/5 rounded-lg p-5 hover:bg-secondary-foreground/10 transition-colors">
                <MessageCircle className="w-6 h-6 text-accent" />
                <div>
                  <div className="text-secondary-foreground/60 text-xs mb-0.5">WhatsApp</div>
                  <div className="text-secondary-foreground font-semibold text-sm">Написать</div>
                </div>
              </a>
              <a href="https://t.me/AntonVladimirovich77" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-secondary-foreground/5 rounded-lg p-5 hover:bg-secondary-foreground/10 transition-colors">
                <Send className="w-6 h-6 text-accent" />
                <div>
                  <div className="text-secondary-foreground/60 text-xs mb-0.5">Telegram</div>
                  <div className="text-secondary-foreground font-semibold text-sm">Написать</div>
                </div>
              </a>
            </div>

            <a href="mailto:antonvladimirovich50@gmail.com" className="flex items-center gap-4 bg-secondary-foreground/5 rounded-lg p-5 hover:bg-secondary-foreground/10 transition-colors">
              <Mail className="w-5 h-5 text-accent" />
              <div>
                <div className="text-secondary-foreground/60 text-xs mb-0.5">Email</div>
                <div className="text-secondary-foreground font-medium text-sm">antonvladimirovich50@gmail.com</div>
              </div>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
