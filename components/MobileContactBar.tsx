import { Phone, MessageCircle, Send } from "lucide-react";
import Link from "next/link";

const PHONE = "89642810173";

export default function MobileContactBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-secondary/95 backdrop-blur-sm border-t border-secondary-foreground/10 safe-area-bottom">
      <div className="grid grid-cols-4 h-16">
        <Link href="/stoimost" className="flex flex-col items-center justify-center gap-0.5 text-accent font-semibold text-xs">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground text-xs font-bold">₽</span>
          </div>
          Расчёт
        </Link>
        <a href={`tel:+7${PHONE.slice(1)}`} className="flex flex-col items-center justify-center gap-0.5 text-secondary-foreground/70 text-xs">
          <Phone className="w-5 h-5" /> Звонок
        </a>
        <a href="https://wa.me/79642810173?text=Здравствуйте,%20интересует%20строительство%20дома%20или%20бани.%20Хотел%20бы%20узнать%20стоимость" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-0.5 text-secondary-foreground/70 text-xs">
          <MessageCircle className="w-5 h-5" /> WhatsApp
        </a>
        <a href="https://t.me/AntonVladimirovich77" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-0.5 text-secondary-foreground/70 text-xs">
          <Send className="w-5 h-5" /> Telegram
        </a>
      </div>
    </div>
  );
}
