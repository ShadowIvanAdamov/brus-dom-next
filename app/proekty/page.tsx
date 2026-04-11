import type { Metadata } from "next";
import PortfolioSection from "@/components/PortfolioSection";
import ProcessSection from "@/components/ProcessSection";
import TrustSection from "@/components/TrustSection";
import CostCalculator from "@/components/CostCalculator";

export const metadata: Metadata = {
  title: "Наши проекты домов и бань из бруса — портфолио",
  description: "Реальные проекты домов и бань из бруса, построенные в Иркутске, Шелехове, Ангарске, Слюдянке. Фото объектов, сроки, размеры.",
  alternates: { canonical: "/proekty" },
};

export default function ProektyPage() {
  return (
    <main>
      <section className="pt-28 pb-12 md:pt-36 md:pb-16 bg-secondary">
        <div className="container">
          <h1 className="font-display font-extrabold text-3xl md:text-5xl text-primary-foreground mb-4">
            Наши проекты
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl">
            Реальные дома и бани, построенные нашей командой в Иркутской области. Каждый объект — с фотоотчётом.
          </p>
        </div>
      </section>

      <PortfolioSection />
      <ProcessSection />
      <TrustSection />
      <CostCalculator />
    </main>
  );
}
