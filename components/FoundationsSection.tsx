"use client";

import { Reveal } from "@/hooks/useScrollReveal";

const photos = [
  { src: "/images/foundation-1.jpg", alt: "Забивка свай под дом из бруса" },
  { src: "/images/foundation-2.jpg", alt: "Свайный фундамент — монтаж на участке" },
  { src: "/images/foundation-3.jpg", alt: "Свайный фундамент на сложном рельефе" },
];

export default function FoundationsSection() {
  return (
    <section id="foundations" className="py-20 md:py-28 bg-muted">
      <div className="container">
        <Reveal>
          <h2 className="font-display font-extrabold text-2xl md:text-4xl text-foreground text-center mb-4">
            Фундаменты под дома и бани из бруса
          </h2>
          <p className="text-muted-foreground text-center mb-14 max-w-2xl mx-auto leading-relaxed">
            Выполняем свайные, ленточные и плитные фундаменты. Подбираем решение под проект, тип грунта и бюджет. Работаем в том числе на сложном рельефе.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((p) => (
            <Reveal key={p.alt}>
              <div className="bg-card rounded-lg shadow-card overflow-hidden hover:shadow-elevated transition-shadow group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.src} alt={p.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-4 md:p-5">
                  <p className="text-sm font-medium text-foreground">{p.alt}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
