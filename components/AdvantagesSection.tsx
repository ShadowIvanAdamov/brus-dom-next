"use client";

import { Reveal } from "@/hooks/useScrollReveal";
import { Factory, FileText, Home, FileCheck, Camera, Compass, ClipboardList, Hammer } from "lucide-react";

const advantages = [
  { icon: Factory, title: "Собственное производство", desc: "Контролируем качество бруса на каждом этапе — от заготовки до готового домокомплекта" },
  { icon: Home, title: "Строительство под ключ", desc: "От фундамента до чистовой отделки. Заезжайте и живите" },
  { icon: ClipboardList, title: "Полная комплектация и техническое описание", desc: "Подробная спецификация материалов и комплектующих в каждом проекте" },
  { icon: Camera, title: "Фото и видео с объектов", desc: "Еженедельные фотоотчёты о ходе строительства вашего дома" },
  { icon: Hammer, title: "Строим из вашего материала", desc: "Можем работать с материалами заказчика — вы закупаете, мы строим" },
  { icon: Compass, title: "Помощь с проектом", desc: "Поможем выбрать готовый проект или разработаем индивидуальный" },
];

export default function AdvantagesSection() {
  return (
    <section id="advantages" className="py-20 md:py-28 bg-background">
      <div className="container">
        <Reveal>
          <h2 className="font-display font-extrabold text-2xl md:text-4xl text-foreground text-center mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-muted-foreground text-center mb-14 max-w-xl mx-auto">
            Более 15 лет строим дома и бани из бруса в Иркутске и Иркутской области
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((a) => (
            <Reveal key={a.title}>
              <div className="bg-card rounded-lg p-6 md:p-8 shadow-card hover:shadow-elevated transition-shadow group">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <a.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">{a.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{a.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
