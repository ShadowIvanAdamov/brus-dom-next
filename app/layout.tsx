import type { Metadata } from "next";
import { Toaster } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileContactBar from "@/components/MobileContactBar";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Дома и бани из бруса под ключ в Иркутске — Брус Дом 38",
    template: "%s | Брус Дом 38",
  },
  description: "Строительство домов и бань из профилированного бруса под ключ в Иркутске и Иркутской области. Собственное производство, прозрачные сметы, работа по договору.",
  metadataBase: new URL("https://domizbrusa38.ru"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Дома и бани из бруса под ключ — Брус Дом 38, Иркутск",
    description: "Строим надёжные дома и бани из бруса с 2010 года. Собственное производство, фиксированные цены.",
    type: "website",
    locale: "ru_RU",
    url: "https://domizbrusa38.ru",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Брус Дом 38",
  description: "Строительство домов и бань из бруса под ключ в Иркутске и Иркутской области",
  telephone: "+79642810173",
  email: "antonvladimirovich50@gmail.com",
  areaServed: ["Иркутск", "Шелехов", "Ангарск", "Слюдянка", "Усолье-Сибирское"],
  foundingDate: "2010",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Иркутск",
    addressRegion: "Иркутская область",
    addressCountry: "RU",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-foreground font-body">
        <Header />
        <div className="pb-16 md:pb-0">
          {children}
        </div>
        <Footer />
        <MobileContactBar />
        <Toaster />
      </body>
    </html>
  );
}
