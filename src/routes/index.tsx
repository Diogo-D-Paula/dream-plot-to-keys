import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Hero } from "@/components/site/Hero";
import { Beneficios } from "@/components/site/Beneficios";
import { Processo } from "@/components/site/Processo";

import { Diferenciais } from "@/components/site/Diferenciais";
import { Faq } from "@/components/site/Faq";
import { FinalCta } from "@/components/site/FinalCta";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Sua Construtora — Casa própria com terreno e construção financiados pela Caixa",
      },
      {
        name: "description",
        content:
          "Financie a aquisição do terreno e a construção da sua casa em um único contrato pela Caixa Econômica Federal. Simule grátis em 2 minutos.",
      },
      {
        property: "og:title",
        content: "Sua Construtora — Casa própria financiada pela Caixa",
      },
      {
        property: "og:description",
        content:
          "Terreno + construção em um único financiamento. Simule grátis em 2 minutos.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-background text-foreground font-display selection:bg-primary/20">
      <SiteNav />
      <main>
        <Hero />
        <Beneficios />
        <Processo />
        <Simulador />
        <Diferenciais />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}
