import type { Metadata } from "next";
import ContactsSection from "@/components/ContactsSection";
import SeoTextSection from "@/components/SeoTextSection";

export const metadata: Metadata = {
  title: "Контакты — Брус Дом 38, Иркутск",
  description: "Свяжитесь с нами: телефон 8 964 281-01-73, WhatsApp, Telegram. Строительство домов и бань из бруса в Иркутске и Иркутской области.",
  alternates: { canonical: "/kontakty" },
};

export default function KontaktyPage() {
  return (
    <main>
      <section className="pt-28 pb-12 md:pt-36 md:pb-16 bg-secondary">
        <div className="container">
          <h1 className="font-display font-extrabold text-3xl md:text-5xl text-primary-foreground mb-4">
            Контакты
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl">
            Свяжитесь с нами любым удобным способом — ответим в течение часа.
          </p>
        </div>
      </section>

      <ContactsSection />
      <SeoTextSection />
    </main>
  );
}
