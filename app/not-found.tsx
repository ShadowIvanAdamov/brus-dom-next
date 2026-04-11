import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="font-display font-extrabold text-6xl text-primary mb-4">404</h1>
        <p className="text-muted-foreground mb-8">Страница не найдена</p>
        <Link href="/" className="px-8 py-4 bg-primary text-primary-foreground font-display font-bold rounded-lg hover:bg-accent transition-colors">
          На главную
        </Link>
      </div>
    </main>
  );
}
