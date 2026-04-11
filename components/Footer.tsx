import { MapPin } from "lucide-react";
import Link from "next/link";

const cities = ["Иркутск", "Шелехов", "Ангарск", "Слюдянка", "Усолье-Сибирское"];

export default function Footer() {
  return (
    <footer className="bg-foreground py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
          <div>
            <Link href="/" className="font-display font-extrabold text-xl text-background">
              Брус Дом <span className="text-accent">38</span>
            </Link>
            <p className="text-background/50 text-sm mt-2 max-w-xs">
              Строительство домов и бань из бруса под ключ в Иркутске и Иркутской области с 2010 года
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-background text-sm mb-3">Работаем в городах</h4>
            <div className="flex flex-wrap gap-2">
              {cities.map((c) => (
                <span key={c} className="flex items-center gap-1 text-background/50 text-xs">
                  <MapPin className="w-3 h-3" /> {c}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-background text-sm mb-3">Навигация</h4>
            <nav className="flex flex-col gap-1.5">
              <Link href="/doma-iz-brusa" className="text-background/50 text-xs hover:text-accent transition-colors">Дома из бруса</Link>
              <Link href="/bani-iz-brusa" className="text-background/50 text-xs hover:text-accent transition-colors">Бани из бруса</Link>
              <Link href="/proekty" className="text-background/50 text-xs hover:text-accent transition-colors">Портфолио</Link>
              <Link href="/stoimost" className="text-background/50 text-xs hover:text-accent transition-colors">Расчёт стоимости</Link>
              <Link href="/kontakty" className="text-background/50 text-xs hover:text-accent transition-colors">Контакты</Link>
            </nav>
          </div>
        </div>

        <div className="border-t border-background/10 mt-8 pt-6 text-center text-background/30 text-xs">
          © {new Date().getFullYear()} Брус Дом 38. Все права защищены.
        </div>
      </div>
    </footer>
  );
}
