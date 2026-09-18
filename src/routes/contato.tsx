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
            href="https://wa.me/5566999990322?text=Ol%C3%A1%21%20Vim%20do%20site%20e%20quero%20fazer%20uma%20simula%C3%A7%C3%A3o%20de%20financiamento%20para%20terreno%20%2B%20constru%C3%A7%C3%A3o."
            target="_blank"
            rel="noreferrer"
            className="gold-button rounded-xl px-6 py-5 text-center font-bold uppercase tracking-widest text-primary-foreground"
          >
            WhatsApp (66) 99999-90322
          </a>
          <a
            href="mailto:atendimento@seisalles.com.br"
            className="rounded-xl border border-border px-6 py-5 text-center font-bold"
          >
            atendimento@seisalles.com.br
          </a>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
