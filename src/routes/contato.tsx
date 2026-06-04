import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Sua Construtora" },
      { name: "description", content: "Fale com um consultor especialista em financiamento Caixa." },
    ],
  }),
  component: Contato,
});

function Contato() {
  return (
    <div className="bg-background text-foreground font-display">
      <SiteNav />
      <main className="mx-auto max-w-3xl px-6 pt-40 pb-32">
        <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
          Contato
        </span>
        <h1 className="mb-8 text-balance text-5xl font-extrabold tracking-tighter md:text-6xl">
          Fale com um especialista.
        </h1>
        <div className="grid gap-6 rounded-2xl border border-border bg-card p-8">
          <a
            href="https://wa.me/5562999999999"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-primary px-6 py-5 text-center font-bold uppercase tracking-widest text-primary-foreground"
          >
            WhatsApp (62) 99999-9999
          </a>
          <a
            href="mailto:atendimento@suaconstrutora.com.br"
            className="rounded-xl border border-border px-6 py-5 text-center font-bold"
          >
            atendimento@suaconstrutora.com.br
          </a>
          <Link
            to="/"
            className="text-center font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-primary"
          >
            Ou faça a simulação direto na home →
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
