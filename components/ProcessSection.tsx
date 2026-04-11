"use client";

import { Reveal } from "@/hooks/useScrollReveal";

const steps = [
  { num: "01", title: "Заявка", desc: "Оставьте заявку на сайте или свяжитесь с нами любым удобным способом" },
  { num: "02", title: "Консультация", desc: "Обсудим ваши пожелания, бюджет и выберем оптимальный проект" },
  { num: "03", title: "Расчёт", desc: "Бесплатно сделаем расчёт с фиксированной стоимостью в договоре" },
  { num: "04", title: "Договор", desc: "Заключаем договор с прозрачными условиями и графиком работ" },
  { num: "05", title: "Строительство", desc: "Производство бруса и строительство с еженедельными отчётами" },
  { num: "06", title: "Сдача объекта", desc: "Приёмка готового объекта" },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-20 md:py-28 bg-muted">
      <div className="container">
        <Reveal>
          <h2 className="font-display font-extrabold text-2xl md:text-4xl text-foreground text-center mb-14">Как мы работаем</h2>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-10 max-w-6xl mx-auto items-start">
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-5">
            {steps.map((s) => (
              <Reveal key={s.num}>
                <div className="relative bg-card rounded-lg p-6 shadow-card h-full">
                  <span className="font-display font-extrabold text-4xl text-primary/15 absolute top-4 right-5">{s.num}</span>
                  <h3 className="font-display font-bold text-foreground mb-2 mt-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="lg:col-span-2">
            <Reveal>
              <div className="rounded-xl overflow-hidden shadow-elevated bg-card">
                <video src="/images/process-video.mp4" controls preload="metadata" playsInline className="w-full aspect-[9/16] max-h-[520px] object-cover bg-foreground/5" />
                <div className="px-5 py-4">
                  <p className="font-display font-semibold text-foreground text-sm md:text-base">🎬 Реальные кадры с наших объектов</p>
                  <p className="text-muted-foreground text-xs mt-1">Убедитесь сами — мы строим, а не просто обещаем</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
