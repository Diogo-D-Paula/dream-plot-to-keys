import { Check } from "lucide-react";

const itens = [
  "Especialistas em financiamento habitacional Caixa",
  "Acompanhamento completo da obra com relatórios mensais",
  "Gestão documental e burocrática do início ao fim",
  "Transparência total em todas as etapas do contrato",
  "Cronograma e prazos garantidos em contrato",
  "Atendimento personalizado por consultor dedicado",
  "Comunicação contínua via WhatsApp e e-mail",
];

export function Diferenciais() {
  return (
    <section className="border-t border-border bg-secondary/30 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
              Diferenciais
            </span>
            <h2 className="text-balance text-4xl font-extrabold tracking-tighter md:text-5xl">
              Você não está sozinho nessa jornada.
            </h2>
            <p className="mt-6 max-w-md text-muted-foreground">
              Realizamos seu sonho da casa própria com segurança e transparência.
            </p>
          </div>
          <ul className="space-y-4">
            {itens.map((i) => (
              <li key={i} className="flex items-start gap-4 border-b border-border pb-4">
                <span className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check size={14} strokeWidth={3} />
                </span>
                <span className="font-medium">{i}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
