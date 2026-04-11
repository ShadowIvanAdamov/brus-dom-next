"use client";

import { Reveal } from "@/hooks/useScrollReveal";
import { MapPin } from "lucide-react";

export default function SeoTextSection() {
  return (
    <section className="py-16 md:py-20 bg-muted">
      <div className="container max-w-3xl">
        <Reveal>
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-accent shrink-0" />
            <h2 className="font-display font-bold text-xl md:text-2xl text-foreground">География работ</h2>
          </div>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4">
            Строим дома и бани из бруса в Иркутске, Шелехове, Ангарске, Усолье-Сибирском, Слюдянке и по Иркутской области. Выезд бригады по области. Работаем под ключ: от фундамента до кровли и отделки.
          </p>
          <p className="text-muted-foreground/70 text-xs md:text-sm">
            Свяжитесь с нами, чтобы рассчитать стоимость строительства и уточнить возможность выезда в ваш район.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
