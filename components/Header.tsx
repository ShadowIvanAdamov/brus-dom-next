"use client";

import { Phone, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const PHONE = "89642810173";
const WHATSAPP_URL = "https://wa.me/79642810173?text=Здравствуйте,%20интересует%20строительство%20дома%20или%20бани.%20Хотел%20бы%20узнать%20стоимость";
const TELEGRAM_URL = "https://t.me/AntonVladimirovich77";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/doma-iz-brusa", label: "Дома" },
    { href: "/bani-iz-brusa", label: "Бани" },
    { href: "/proekty", label: "Портфолио" },
    { href: "/stoimost", label: "Стоимость" },
    { href: "/kontakty", label: "Контакты" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-sm">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="font-display font-extrabold text-xl md:text-2xl text-primary-foreground tracking-tight">
          Брус Дом <span className="text-accent">38</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm text-primary-foreground/80 hover:text-accent transition-colors font-medium">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href={`tel:+7${PHONE.slice(1)}`} className="flex items-center gap-2 text-sm font-semibold text-primary-foreground hover:text-accent transition-colors">
            <Phone className="w-4 h-4" />
            <span className="hidden xl:inline">8 964 281-01-73</span>
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="p-2 rounded-md bg-primary-foreground/10 hover:bg-accent/20 text-primary-foreground transition-colors" aria-label="WhatsApp">
            <MessageCircle className="w-4 h-4" />
          </a>
          <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="p-2 rounded-md bg-primary-foreground/10 hover:bg-accent/20 text-primary-foreground transition-colors" aria-label="Telegram">
            <Send className="w-4 h-4" />
          </a>
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2 text-primary-foreground" aria-label="Меню">
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-0.5 bg-current transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 bg-current transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-current transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-secondary border-t border-primary-foreground/10 pb-4">
          <nav className="container flex flex-col gap-3 pt-4">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="text-primary-foreground/80 hover:text-accent py-2 font-medium">
                {l.label}
              </Link>
            ))}
            <a href={`tel:+7${PHONE.slice(1)}`} className="flex items-center gap-2 text-accent font-semibold pt-2">
              <Phone className="w-4 h-4" /> 8 964 281-01-73
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
