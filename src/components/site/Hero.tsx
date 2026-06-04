import heroImg from "@/assets/hero-house.jpg";

export function Hero() {
  return (
    <section className="px-6 pt-40 pb-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-end gap-16 lg:grid-cols-2">
          <div className="animate-fade-up">
            <span className="mb-6 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
              Crédito Imobiliário Caixa
            </span>
            <h1 className="mb-8 text-balance text-6xl font-extrabold leading-[0.9] tracking-tighter md:text-8xl">
              Conquiste sua casa própria no{" "}
              <span className="text-primary">terreno ideal.</span>
            </h1>
            <p className="mb-10 max-w-lg text-lg text-muted-foreground">
              Financie a compra do terreno e a construção da casa em um único contrato. Comece a
              pagar as parcelas só depois da entrega das chaves.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#simulador"
                className="rounded-sm bg-foreground px-8 py-5 text-sm font-bold uppercase text-background transition-transform hover:scale-[1.01]"
              >
                Começar Simulação
              </a>
              <a
                href="https://wa.me/5562999999999"
                target="_blank"
                rel="noreferrer"
                className="rounded-sm border border-border px-8 py-5 text-sm font-bold uppercase hover:bg-black/5"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
          <div className="animate-fade-up [animation-delay:200ms]">
            <img
              src={heroImg}
              alt="Casa moderna brasileira com grandes janelas durante o pôr do sol"
              className="aspect-[4/5] w-full rounded-sm object-cover outline-1 -outline-offset-1 outline-black/5"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
