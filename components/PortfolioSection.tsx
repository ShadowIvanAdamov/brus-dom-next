"use client";

import { Reveal } from "@/hooks/useScrollReveal";

const projects = [
  { image: "/images/real-1.jpg", type: "Баня из бруса 6×4 с террасой 2×6", size: "6×4 м", time: "14 дней", config: "Под ключ с террасой", location: "Иркутский район" },
  { image: "/images/real-2.jpg", type: "Баня из бруса", size: "5×4 м", time: "14 дней", config: "Сруб + кровля", location: "Ангарск" },
  { image: "/images/real-3.jpg", type: "Дом из бруса 6×6", size: "6×6 м", time: "20 дней", config: "Домокомплект", location: "Шелехов" },
  { image: "/images/real-7.jpg", type: "Дом из бруса", size: "6×5 м", time: "20 дней", config: "Сруб + кровля", location: "Усолье-Сибирское" },
  { image: "/images/real-5.jpg", type: "Баня из бруса 4×6", size: "4×6 м", time: "10 дней", config: "Сруб + кровля", location: "Иркутск" },
  { image: "/images/real-4.jpg", type: "Дом из бруса — интерьер", size: "6×8 м", time: "1 месяц", config: "Домокомплект", location: "Слюдянка" },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 md:py-28 bg-background">
      <div className="container">
        <Reveal>
          <h2 className="font-display font-extrabold text-2xl md:text-4xl text-foreground text-center mb-4">Наши объекты</h2>
          <p className="text-muted-foreground text-center mb-14 max-w-xl mx-auto">Реальные проекты, построенные нашей командой в Иркутской области</p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <Reveal key={i}>
              <div className="bg-card rounded-lg overflow-hidden shadow-card hover:shadow-elevated transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.image} alt={`${p.type} ${p.location}`} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-5 md:p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-display font-bold text-foreground text-sm">{p.type}</span>
                    <span className="text-xs bg-accent/15 text-accent font-semibold px-3 py-1 rounded-full">{p.location}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-sm">
                    <div><span className="text-muted-foreground block text-xs">Размер</span><span className="font-semibold text-foreground">{p.size}</span></div>
                    <div><span className="text-muted-foreground block text-xs">Сроки</span><span className="font-semibold text-foreground">{p.time}</span></div>
                    <div><span className="text-muted-foreground block text-xs">Формат</span><span className="font-semibold text-foreground text-xs">{p.config}</span></div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
