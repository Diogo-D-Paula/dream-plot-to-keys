import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card pt-20 pb-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link
              to="/"
              className="font-display text-xl font-extrabold uppercase tracking-tighter"
            >
              Sua<span className="text-primary">Construtora</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Especialistas em financiamento de terreno + construção pela Caixa Econômica
              Federal. Sua casa nova, do zero, em um só contrato.
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
              <li>atendimento@suaconstrutora.com.br</li>
              <li>Goiânia • Anápolis • Aparecida</li>
            </ul>
          </div>
        </div>
        <div className="mt-16 border-t border-border pt-8 text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            CNPJ 00.000.000/0000-00 • CRECI 0000-J
          </p>
          <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            © {new Date().getFullYear()} Sua Construtora • Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
