const beneficios = [
  {
    titulo: "Escolha onde morar",
    desc: "Encontramos o terreno ideal no bairro que você sempre quis, com infraestrutura completa.",
  },
  {
    titulo: "Projeto personalizado",
    desc: "Arquitetos desenham a planta que cabe na sua rotina, no seu orçamento e no seu sonho.",
  },
  {
    titulo: "Economia de até 30%",
    desc: "Construir do zero custa significativamente menos que comprar um imóvel pronto.",
  },
  {
    titulo: "Imóvel 100% novo",
    desc: "Sem reformas, sem surpresas. Garantia estrutural e acabamento de primeira linha.",
  },
  {
    titulo: "Pague após a entrega",
    desc: "Carência no financiamento. As parcelas começam quando você recebe as chaves.",
  },
  {
    titulo: "Financiamento Bancário",
    desc: "Menores taxas do mercado, uso do FGTS como entrada e subsídios do Minha Casa Minha Vida.",
  },
];

export function Beneficios() {
  return (
    <section style={{ backgroundColor: "#2a2a2c" }} className="py-24 text-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-2xl">
          <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
            Por que terreno + construção
          </span>
          <h2 className="text-balance text-4xl font-extrabold tracking-tighter md:text-5xl">
            A forma mais inteligente de ter a sua casa própria hoje.
          </h2>
        </div>
        <div className="grid gap-px border border-white/10 bg-white/10 md:grid-cols-3">
          {beneficios.map((b, i) => (
            <div key={b.titulo} style={{ backgroundColor: "#2a2a2c" }} className="p-10">
              <span className="mb-4 block font-mono text-sm text-primary">
                0{i + 1}
              </span>
              <h3 className="mb-3 text-xl font-bold">{b.titulo}</h3>
              <p className="text-sm leading-relaxed text-white/60">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
