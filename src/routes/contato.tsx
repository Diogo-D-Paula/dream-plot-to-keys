import { createFileRoute } from "@tanstack/react-router";
import { Instagram } from "lucide-react";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — SEI — Salles Empreendimentos Imobiliários" },
      { name: "description", content: "Fale com um consultor especialista em financiamento bancário." },
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
            href="https://wa.me/5543991750788?text=Ol%C3%A1%21%20Vim%20do%20site%20e%20quero%20fazer%20uma%20simula%C3%A7%C3%A3o%20de%20financiamento%20para%20terreno%20%2B%20constru%C3%A7%C3%A3o."
            target="_blank"
            rel="noreferrer"
            className="gold-button rounded-xl px-6 py-5 text-center font-bold uppercase tracking-widest text-primary-foreground"
          >
            WhatsApp (43) 99175-0788
          </a>
          <a
            href="mailto:seisallesempreendimentos@gmail.com"
            className="rounded-xl border border-border px-6 py-5 text-center font-bold"
          >
            seisallesempreendimentos@gmail.com
          </a>
        </div>
        <div className="mt-6 flex flex-col items-center justify-center gap-2 text-sm text-muted-foreground">
          <p>Carlópolis/PR • Curitiba e região metropolitana/PR</p>
          <a
            href="https://www.instagram.com/sei_sallesempreendimentosimob/?hl=pt-br"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-primary"
          >
            <Instagram className="h-4 w-4" />
            <span>Mais informações sobre MCMV</span>
          </a>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
