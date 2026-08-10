import { Link } from "@tanstack/react-router";

const links = [
  { label: "Processo", href: "/#processo" },
  { label: "FAQ", href: "/#faq" },
];

export function SiteNav() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="font-display font-extrabold uppercase tracking-tighter">
          <span className="hidden text-sm md:inline">
            SEI <span className="text-primary">— Salles Empreendimentos Imobiliários</span>
          </span>
          <span className="text-xl md:hidden">
            SEI
          </span>
        </Link>
        <div className="hidden gap-8 text-sm font-medium uppercase tracking-wider md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-primary">
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="https://wa.me/5566999990322?text=Ol%C3%A1%21%20Vim%20do%20site%20e%20quero%20fazer%20uma%20simula%C3%A7%C3%A3o%20de%20financiamento%20para%20terreno%20%2B%20constru%C3%A7%C3%A3o."
          target="_blank"
          rel="noopener noreferrer"
          className="gold-button rounded-full px-6 py-3 text-xs font-bold uppercase tracking-widest text-primary-foreground transition-all hover:brightness-110"
        >
          Falar no WhatsApp
        </a>
      </div>
    </nav>
  );
}
