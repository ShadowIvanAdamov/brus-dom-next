import type { Metadata } from "next";
import PortfolioSection from "@/components/PortfolioSection";
import CostCalculator from "@/components/CostCalculator";
import FaqSection from "@/components/FaqSection";

export const metadata: Metadata = {
  title: "Дома из бруса под ключ в Иркутске — цены, проекты",
  description: "Строительство домов из профилированного бруса в Иркутске и Иркутской области. Собственное производство, сроки от 1 месяца, гарантия качества.",
  alternates: { canonical: "/doma-iz-brusa" },
};

export default function DomaIzBrusaPage() {
  return (
    <main>
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-secondary">
        <div className="absolute inset-0">
          <img src="/images/dom-brus.jpg" alt="Дом из бруса под ключ Иркутск" className="w-full h-full object-cover opacity-30" />
        </div>
        <div className="container relative z-10">
          <h1 className="font-display font-extrabold text-3xl md:text-5xl text-primary-foreground mb-6 text-balance">
            Дома из бруса под&nbsp;ключ в&nbsp;Иркутске
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mb-8">
            Строим дома из профилированного бруса для постоянного проживания и сезонного отдыха. Собственное производство бруса, прозрачные сметы и фиксированные цены в договоре.
          </p>
          <a href="/stoimost" className="inline-flex px-8 py-4 bg-primary text-primary-foreground font-display font-bold rounded-lg hover:bg-accent transition-colors shadow-elevated">
            Рассчитать стоимость
          </a>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background">
        <div className="container max-w-3xl">
          <h2 className="font-display font-extrabold text-2xl md:text-3xl text-foreground mb-8">Что входит в строительство дома из бруса</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>Мы строим дома из профилированного бруса сечением от 100×150 мм до 200×200 мм. Используем древесину хвойных пород — сосну и лиственницу, заготовленную в Иркутской области.</p>
            <p>В стоимость строительства под ключ входит: фундамент (свайный, ленточный или плитный), стеновой комплект из бруса, межэтажные перекрытия, стропильная система, кровля, окна, двери, утепление и черновая отделка.</p>
            <p>Сроки строительства — от 3 недель для дома площадью до 60 м². Работаем по договору с поэтапной оплатой. Предоставляем еженедельные фото- и видеоотчёты с объекта.</p>
            <p>Выполняем строительство в Иркутске, Шелехове, Ангарске, Слюдянке, Усолье-Сибирском и по всей Иркутской области.</p>
          </div>
        </div>
      </section>

      <PortfolioSection />
      <CostCalculator />
      <FaqSection />
    </main>
  );
}
