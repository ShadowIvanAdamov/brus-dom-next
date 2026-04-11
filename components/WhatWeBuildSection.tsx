"use client";

import { Reveal } from "@/hooks/useScrollReveal";
import { Hammer, HardHat } from "lucide-react";
import Link from "next/link";

const services = [
  { image: "/images/dom-brus.jpg", title: "Дома из бруса", desc: "Для постоянного проживания и сезонного отдыха", href: "/doma-iz-brusa" },
  { image: "/images/banya.jpg", title: "Бани из бруса", desc: "Классические и современные проекты бань", href: "/bani-iz-brusa" },
  { image: "/images/domokompl.jpg", title: "Домокомплекты", desc: "Готовые комплекты бруса для самостоятельной сборки", href: "/stoimost" },
  { image: "/images/individual.jpg", title: "Индивидуальные проекты", desc: "Разработка проекта под ваши требования", href: "/stoimost" },
];

const extraServices = [
  { icon: Hammer, title: "Фундаменты", desc: "Ленточные, свайные и плитные фундаменты под дома из бруса" },
  { icon: HardHat, title: "Кровельные работы", desc: "Монтаж кровли любой сложности с гарантией" },
];

export default function WhatWeBuildSection() {
  return (
    <section id="services" className="py-20 md:py-28 bg-muted">
      <div className="container">
        <Reveal>
          <h2 className="font-display font-extrabold text-2xl md:text-4xl text-foreground text-center mb-14">
            Что мы строим
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((s) => (
            <Reveal key={s.title}>
              <Link href={s.href} className="group block rounded-lg overflow-hidden shadow-card hover:shadow-elevated transition-shadow bg-card">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5 md:p-6">
                  <h3 className="font-display font-bold text-lg text-foreground mb-1">{s.title}</h3>
                  <p className="text-muted-foreground text-sm">{s.desc}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 gap-5 mt-6">
          {extraServices.map((s) => (
            <Reveal key={s.title}>
              <div className="bg-card rounded-lg p-6 shadow-card flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground mb-1">{s.title}</h3>
                  <p className="text-muted-foreground text-sm">{s.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
