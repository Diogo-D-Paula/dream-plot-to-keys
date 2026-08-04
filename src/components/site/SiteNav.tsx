import { Link } from "@tanstack/react-router";

const links = [
  { label: "Processo", href: "/#processo" },
  { label: "FAQ", href: "/#faq" },
];

export function SiteNav() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="font-display text-xl font-extrabold uppercase tracking-tighter">
          Sua<span className="text-primary">Construtora</span>
        </Link>
        <div className="hidden gap-8 text-sm font-medium uppercase tracking-wider md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-primary">
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="/#simulador"
          className="rounded-full bg-primary px-6 py-3 text-xs font-bold uppercase tracking-widest text-primary-foreground transition-all hover:brightness-110"
        >
          Simular Financiamento
        </a>
      </div>
    </nav>
  );
}
