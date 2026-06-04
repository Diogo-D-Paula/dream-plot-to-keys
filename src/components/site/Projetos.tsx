import { useState } from "react";
import { categorias, projetos } from "@/data/projetos";

export function Projetos() {
  const [filtro, setFiltro] = useState<(typeof categorias)[number]>("Todos");
  const lista = filtro === "Todos" ? projetos : projetos.filter((p) => p.categoria === filtro);

  return (
    <section id="projetos" className="bg-foreground py-24 text-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col items-end justify-between gap-6 md:flex-row">
          <div>
            <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
              Projetos de Casas
            </span>
            <h2 className="text-balance text-4xl font-extrabold tracking-tighter md:text-5xl">
              Inspire-se. Personalize. Construa.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {categorias.map((c) => (
              <button
                key={c}
                onClick={() => setFiltro(c)}
                className={`rounded-full px-4 py-2 font-mono text-[10px] font-medium uppercase tracking-widest transition-colors ${
                  filtro === c ? "bg-primary text-primary-foreground" : "bg-white/5 text-white/60 hover:bg-white/10"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {lista.map((p) => (
            <article key={p.id} className="group">
              <div className="mb-4 aspect-[4/3] overflow-hidden rounded-2xl outline-1 -outline-offset-1 outline-white/5">
                <img
                  src={p.imagem}
                  alt={`Render do ${p.nome}`}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold">{p.nome}</h3>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-white/50">
                    {p.area}m² • {p.quartos} quartos • {p.banheiros} banheiros
                  </p>
                </div>
                <span className="rounded-full bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-white/60">
                  {p.categoria}
                </span>
              </div>
              <p className="mt-3 text-sm text-primary">{p.valor}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
