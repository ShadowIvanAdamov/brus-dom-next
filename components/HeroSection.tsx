import { Phone, MessageCircle, Send, Shield, Factory, Home, MapPin } from "lucide-react";

const PHONE = "89642810173";
const WHATSAPP_URL = "https://wa.me/79642810173?text=Здравствуйте,%20интересует%20строительство%20дома%20или%20бани.%20Хотел%20бы%20узнать%20стоимость";
const TELEGRAM_URL = "https://t.me/AntonVladimirovich77";

const trustPoints = [
  { icon: Shield, text: "С 2010 года" },
  { icon: Factory, text: "Своё производство" },
  { icon: Home, text: "Под ключ" },
];

const cities = ["Иркутск", "Шелехов", "Ангарск", "Слюдянка", "Усолье-Сибирское"];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0">
        <img src="/images/hero-house.jpg" alt="Дом из бруса в Иркутске" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-secondary/70" />
      </div>

      <div className="container relative z-10 py-16 md:py-24">
        <div className="max-w-2xl animate-fade-in-up">
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-6 text-balance">
            Дома и бани из бруса под&nbsp;ключ в&nbsp;Иркутске
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl font-body">
            Строим надёжные дома и бани из профилированного бруса. Собственное производство, прозрачные сметы. Рассчитаем стоимость за&nbsp;24&nbsp;часа.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            <a href="/stoimost" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-display font-bold text-base rounded-lg hover:bg-accent transition-colors shadow-elevated">
              Получить расчёт
            </a>
            <a href={`tel:+7${PHONE.slice(1)}`} className="inline-flex items-center gap-2 px-5 py-4 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground/20 transition-colors border border-primary-foreground/20">
              <Phone className="w-4 h-4" /> Позвонить
            </a>
            <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-4 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground/20 transition-colors border border-primary-foreground/20">
              <Send className="w-4 h-4" /> Telegram
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-4 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground/20 transition-colors border border-primary-foreground/20">
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3 mb-5">
            {trustPoints.map((tp) => (
              <div key={tp.text} className="flex items-center gap-2 text-accent text-sm font-medium">
                <tp.icon className="w-4 h-4" />
                <span>{tp.text}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 flex-wrap text-primary-foreground/60 text-sm">
            <MapPin className="w-4 h-4 text-accent shrink-0" />
            <span>{cities.join(" · ")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
