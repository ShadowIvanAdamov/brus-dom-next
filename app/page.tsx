import HeroSection from "@/components/HeroSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import WhatWeBuildSection from "@/components/WhatWeBuildSection";
import FoundationsSection from "@/components/FoundationsSection";
import CostCalculator from "@/components/CostCalculator";
import PortfolioSection from "@/components/PortfolioSection";
import ProcessSection from "@/components/ProcessSection";
import TrustSection from "@/components/TrustSection";
import SeoTextSection from "@/components/SeoTextSection";
import FaqSection from "@/components/FaqSection";
import ContactsSection from "@/components/ContactsSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AdvantagesSection />
      <WhatWeBuildSection />
      <FoundationsSection />
      <CostCalculator />
      <PortfolioSection />
      <ProcessSection />
      <TrustSection />
      <SeoTextSection />
      <FaqSection />
      <ContactsSection />
    </main>
  );
}
