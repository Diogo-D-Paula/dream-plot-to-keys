import { useMemo, useState } from "react";
import { cidades, terrenos } from "@/data/terrenos";

export function Terrenos() {
  const [cidade, setCidade] = useState<(typeof cidades)[number]>("Todas");
  const [maxPreco, setMaxPreco] = useState(500000);

  const lista = useMemo(
    () =>
      terrenos.filter(
        (t) => (cidade === "Todas" || t.cidade === cidade) && t.preco <= maxPreco,
      ),
    [cidade, maxPreco],
  );

  return (
    <section id="terrenos" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
            Terrenos Disponíveis
          </span>
          <h2 className="text-balance text-4xl font-extrabold tracking-tighter md:text-5xl">
            Lotes validados, prontos para financiar.
          </h2>
        </div>

        <div className="mb-10 grid gap-6 md:grid-cols-[1fr_auto]">
          <div className="flex flex-wrap gap-2">
            {cidades.map((c) => (
              <button
                key={c}
                onClick={() => setCidade(c)}
                className={`rounded-full border px-4 py-2 font-mono text-[10px] font-medium uppercase tracking-widest transition-colors ${
                  cidade === c
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card hover:bg-secondary/40"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Até R$ {(maxPreco / 1000).toFixed(0)}k
            </span>
            <input
              type="range"
              min={100000}
              max={500000}
              step={10000}
              value={maxPreco}
              onChange={(e) => setMaxPreco(Number(e.target.value))}
              className="w-40 accent-primary"
            />
          </div>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
          {lista.length === 0 ? (
            <div className="col-span-2 bg-card p-12 text-center text-sm text-muted-foreground">
              Nenhum terreno encontrado com esses filtros.
            </div>
          ) : (
            lista.map((t) => (
              <article key={t.id} className="bg-card p-8 transition-colors hover:bg-secondary/30">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold">{t.bairro}</h3>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      {t.cidade}
                    </p>
                  </div>
                  <span className="text-lg font-extrabold text-primary">{t.precoFormatado}</span>
                </div>
                <p className="font-mono text-xs text-muted-foreground">{t.metragem}m² de área total</p>
                {t.destaque ? (
                  <p className="mt-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {t.destaque}
                  </p>
                ) : null}
              </article>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
