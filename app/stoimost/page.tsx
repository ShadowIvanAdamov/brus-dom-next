import type { Metadata } from "next";
import CostCalculator from "@/components/CostCalculator";
import FaqSection from "@/components/FaqSection";

export const metadata: Metadata = {
  title: "Стоимость строительства дома и бани из бруса в Иркутске",
  description: "Рассчитайте стоимость строительства дома или бани из бруса в Иркутске. Бесплатный расчёт за 24 часа. Фиксированные цены в договоре.",
  alternates: { canonical: "/stoimost" },
};

export default function StoimostPage() {
  return (
    <main>
      <section className="pt-28 pb-12 md:pt-36 md:pb-16 bg-secondary">
        <div className="container">
          <h1 className="font-display font-extrabold text-3xl md:text-5xl text-primary-foreground mb-4">
            Стоимость строительства
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl">
            Оставьте заявку — подготовим бесплатный расчёт с фиксированной ценой в течение 24 часов.
          </p>
        </div>
      </section>

      <CostCalculator />

      <section className="py-20 md:py-28 bg-background">
        <div className="container max-w-3xl">
          <h2 className="font-display font-extrabold text-2xl md:text-3xl text-foreground mb-8">От чего зависит цена</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>Стоимость строительства дома или бани из бруса зависит от нескольких факторов: площадь и этажность, сечение бруса (100×150, 150×150, 150×200, 200×200 мм), тип фундамента, кровельный материал и уровень отделки.</p>
            <p>Сруб бани размером 4×5 м из бруса 100×150 мм — от 350 000 ₽. Дом из бруса 6×6 м в базовой комплектации — от 850 000 ₽. Строительство под ключ с отделкой — индивидуальный расчёт.</p>
            <p>Мы работаем с поэтапной оплатой и фиксируем стоимость в договоре. Никаких скрытых доплат.</p>
          </div>
        </div>
      </section>

      <FaqSection />
    </main>
  );
}
