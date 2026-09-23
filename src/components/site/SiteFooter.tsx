import { Link } from "@tanstack/react-router";
import { Instagram } from "lucide-react";
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
                  href="https://wa.me/5543991750788?text=Ol%C3%A1%21%20Vim%20do%20site%20e%20quero%20fazer%20uma%20simula%C3%A7%C3%A3o%20de%20financiamento%20para%20terreno%20%2B%20constru%C3%A7%C3%A3o."
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary"
                >
                  WhatsApp (43) 99175-0788
                </a>
              </li>
              <li>seisallesempreendimentos@gmail.com</li>
              <li>Carlópolis/PR • Curitiba e região metropolitana/PR</li>
              <li>
                <a
                  href="https://www.instagram.com/sei_sallesempreendimentosimob/?hl=pt-br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-primary"
                >
                  <Instagram className="h-4 w-4" />
                  <span>Mais informações sobre MCMV</span>
                </a>
              </li>
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
