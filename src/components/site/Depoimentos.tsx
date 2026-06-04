const depoimentos = [
  {
    nome: "Família Oliveira",
    cidade: "Goiânia, GO",
    texto:
      "Saímos do aluguel e hoje pagamos o que é nosso. O processo foi muito mais simples do que imaginávamos, com tudo explicado pelo nosso consultor.",
  },
  {
    nome: "Marcos e Carla",
    cidade: "Aparecida, GO",
    texto:
      "Conseguimos personalizar cada detalhe da casa. A planta foi feita pensando na nossa rotina com as duas filhas. Recomendamos demais.",
  },
  {
    nome: "Juliana Rocha",
    cidade: "Anápolis, GO",
    texto:
      "Sozinha, achei que nunca conseguiria. Eles me ajudaram com o FGTS, a Caixa aprovou e em 11 meses eu estava com a chave na mão.",
  },
];

export function Depoimentos() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16">
          <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
            Quem já realizou
          </span>
          <h2 className="text-balance text-4xl font-extrabold tracking-tighter md:text-5xl">
            Histórias reais de chaves entregues.
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {depoimentos.map((d) => (
            <figure
              key={d.nome}
              className="flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-8"
            >
              <blockquote className="text-pretty text-base leading-relaxed">
                "{d.texto}"
              </blockquote>
              <figcaption className="mt-8 border-t border-border pt-6">
                <p className="font-bold">{d.nome}</p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {d.cidade}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
