const passos = [
  { n: "01", titulo: "Simulação e crédito", desc: "Analisamos seu perfil e aprovamos seu limite junto ao Banco." },
  { n: "02", titulo: "Escolha do terreno", desc: "Visitamos lotes validados na região que você deseja morar." },
  { n: "03", titulo: "Projeto arquitetônico", desc: "Nossos arquitetos desenham a planta ideal para sua família." },
  { n: "04", titulo: "Aprovação no Banco", desc: "Cuidamos da papelada para garantir a assinatura do contrato." },
  { n: "05", titulo: "Obra garantida", desc: "Cronograma rigoroso, relatórios mensais e gestão total da obra." },
  { n: "06", titulo: "Entrega das chaves", desc: "Casa pronta, vistoriada e com documentação em dia." },
];

export function Processo() {
  return (
    <section id="processo" className="scroll-mt-4 border-t border-border py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col items-end justify-between gap-6 md:flex-row">
          <h2 className="text-balance text-4xl font-extrabold uppercase tracking-tighter md:text-5xl">
            O caminho para as chaves
          </h2>
          <p className="max-w-sm text-sm text-muted-foreground">
            Seis etapas simples e acompanhadas por um especialista, do primeiro contato à mudança.
          </p>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {passos.map((p, i) => (
            <div key={p.n} className="border-t border-border pt-6">
              <div className="mb-4 flex items-center gap-3">
                <span
                  className={`flex size-10 items-center justify-center rounded-full font-mono font-bold ${
                    i === 0 ? "bg-primary/10 text-primary" : "bg-secondary text-muted-foreground"
                  }`}
                >
                  {p.n}
                </span>
              </div>
              <h3 className="mb-2 text-lg font-bold">{p.titulo}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
