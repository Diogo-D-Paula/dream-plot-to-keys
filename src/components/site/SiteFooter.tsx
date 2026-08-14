import { Link } from "@tanstack/react-router";
import logoSei from "@/assets/logo-sei.png";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card pt-20 pb-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link
              to="/"
              className="flex items-center gap-3"
            >
              <img
                src={logoSei}
                alt="SEI"
                className="h-8 w-auto"
                width={32}
                height={32}
              />
              <span className="font-display text-sm font-extrabold uppercase tracking-tighter">
                SEI <span className="text-primary">— Salles Empreendimentos Imobiliários</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Especialistas em financiamento de terreno + construção pelo Banco. Sua casa nova, do zero, em um só contrato.
            </p>
          </div>
          <div>
            <h4 className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Navegação
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/#processo" className="hover:text-primary">Como funciona</a></li>
              <li><a href="/#faq" className="hover:text-primary">FAQ</a></li>
              <li><Link to="/contato" className="hover:text-primary">Contato</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Contato
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://wa.me/5562999999999"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary"
                >
                  WhatsApp (62) 99999-9999
                </a>
              </li>
              <li>atendimento@seisalles.com.br</li>
              <li>Carlópolis/PR • Curitiba e região metropolitana/PR</li>

            </ul>
          </div>
        </div>
        <div className="mt-16 border-t border-border pt-8 text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            © {new Date().getFullYear()} SEI — Salles Empreendimentos Imobiliários • Todos os direitos reservados
          </p>
        </div>

      </div>
    </footer>
  );
}
