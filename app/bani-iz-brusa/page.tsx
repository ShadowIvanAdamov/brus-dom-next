import type { Metadata } from "next";
import PortfolioSection from "@/components/PortfolioSection";
import CostCalculator from "@/components/CostCalculator";
import FaqSection from "@/components/FaqSection";

export const metadata: Metadata = {
  title: "Бани из бруса под ключ в Иркутске — цены от 350 000 ₽",
  description: "Строительство бань из профилированного бруса в Иркутске. Срубы, бани под ключ, с террасой. Сроки от 1 недели. Собственное производство.",
  alternates: { canonical: "/bani-iz-brusa" },
};

export default function BaniIzBrusaPage() {
  return (
    <main>
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-secondary">
        <div className="absolute inset-0">
          <img src="/images/banya.jpg" alt="Баня из бруса под ключ Иркутск" className="w-full h-full object-cover opacity-30" />
        </div>
        <div className="container relative z-10">
          <h1 className="font-display font-extrabold text-3xl md:text-5xl text-primary-foreground mb-6 text-balance">
            Бани из бруса под&nbsp;ключ в&nbsp;Иркутске
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mb-8">
            Строим бани из профилированного бруса — от компактных 3×4 до просторных с террасой и мансардой. Сруб бани собираем за 7–14 дней.
          </p>
          <a href="/stoimost" className="inline-flex px-8 py-4 bg-primary text-primary-foreground font-display font-bold rounded-lg hover:bg-accent transition-colors shadow-elevated">
            Рассчитать стоимость
          </a>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background">
        <div className="container max-w-3xl">
          <h2 className="font-display font-extrabold text-2xl md:text-3xl text-foreground mb-8">Строительство бань из бруса в Иркутске</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>Предлагаем строительство бань из профилированного бруса различных размеров: 3×4, 4×5, 4×6, 5×5, 6×4 с террасой и другие планировки. Используем брус сечением от 100×150 мм.</p>
            <p>Черновой сруб бани — от 350 000 ₽. В комплектацию входят: стеновой комплект, лаги пола, стропильная система, обрешётка. Дополнительно выполняем кровлю, утепление, отделку парной и моечной.</p>
            <p>Сроки сборки сруба — от 7 дней. Строительство бани под ключ — от 2 недель. Работаем в Иркутске и по всей Иркутской области с выездом бригады на участок.</p>
          </div>
        </div>
      </section>

      <PortfolioSection />
      <CostCalculator />
      <FaqSection />
    </main>
  );
}
