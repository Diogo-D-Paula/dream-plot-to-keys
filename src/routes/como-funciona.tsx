import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";

function Placeholder({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-background text-foreground font-display">
      <SiteNav />
      <main className="mx-auto max-w-3xl px-6 pt-40 pb-32 text-center">
        <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
          Em breve
        </span>
        <h1 className="mb-6 text-balance text-5xl font-extrabold tracking-tighter md:text-6xl">
          {title}
        </h1>
        <p className="mb-10 text-muted-foreground">{desc}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="rounded-sm bg-foreground px-8 py-4 text-sm font-bold uppercase text-background"
          >
            Voltar para a home
          </Link>
          <a
            href="/#simulador"
            className="rounded-sm bg-primary px-8 py-4 text-sm font-bold uppercase text-primary-foreground"
          >
            Fazer simulação
          </a>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

export const Route = createFileRoute("/como-funciona")({
  head: () => ({
    meta: [
      { title: "Como funciona — Sua Construtora" },
      {
        name: "description",
        content: "Entenda passo a passo como funciona o financiamento de terreno + construção.",
      },
    ],
  }),
  component: () => (
    <Placeholder
      title="Como funciona o financiamento"
      desc="Estamos preparando esta página com o passo a passo detalhado. Por enquanto, veja o resumo na home."
    />
  ),
});
