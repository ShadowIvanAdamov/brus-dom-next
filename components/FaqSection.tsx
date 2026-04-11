"use client";

import { Reveal } from "@/hooks/useScrollReveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Сколько стоит дом из бруса?", a: "Стоимость зависит от площади, планировки, межкомнатных перегородок, кровельного комплекта и сечения бруса. Оставьте заявку — подготовим точный расчёт под ваш проект." },
  { q: "Сколько стоит баня из бруса?", a: "Баня из бруса в формате чернового сруба — от 350 000 ₽. Цена зависит от размера, планировки и уровня отделки. Рассчитаем стоимость бесплатно." },
  { q: "Какие сроки строительства?", a: "Примерные сроки: баня — 1 неделя, дом — 1 месяц. Сроки варьируются от площади и сложности проекта." },
  { q: "Работаете ли по Иркутской области?", a: "Да! Строим по всей Иркутской области: Иркутск, Шелехов, Ангарск, Слюдянка, Усолье-Сибирское и другие города и посёлки." },
  { q: "Можно ли заказать индивидуальный проект?", a: "Конечно. Разработаем проект с нуля по вашим пожеланиям. Также можем адаптировать любой из наших типовых проектов." },
  { q: "Что входит в строительство под ключ?", a: "Фундамент, стены из бруса, кровля, окна, двери, утепление, черновая и чистовая отделка, инженерные коммуникации. Полная готовность к проживанию." },
];

export default function FaqSection() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-background">
      <div className="container max-w-2xl">
        <Reveal>
          <h2 className="font-display font-extrabold text-2xl md:text-4xl text-foreground text-center mb-10">Частые вопросы</h2>
        </Reveal>

        <Reveal>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-lg shadow-card border-0 px-6">
                <AccordionTrigger className="font-display font-semibold text-foreground text-left text-sm md:text-base py-5 hover:no-underline hover:text-primary">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
