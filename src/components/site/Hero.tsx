import heroImg from "@/assets/hero-house.jpg";

export function Hero() {
  return (
    <section className="px-6 pt-40 pb-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-end gap-16 lg:grid-cols-2">
          <div className="animate-fade-up">
            <h1 className="mb-8 text-balance text-6xl font-extrabold leading-[0.9] tracking-tighter md:text-8xl">
              Conquiste sua casa própria financiando a compra do terreno e a construção em um único
              processo.
            </h1>
            <p className="mb-10 max-w-lg text-lg text-muted-foreground">
              Você escolhe o terreno e constrói sua casa de acordo com suas necessidades, gostos e
              orçamento.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/5566999990322?text=Ol%C3%A1%21%20Vim%20do%20site%20e%20quero%20fazer%20uma%20simula%C3%A7%C3%A3o%20de%20financiamento%20para%20terreno%20%2B%20constru%C3%A7%C3%A3o."
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm bg-primary px-10 py-5 text-sm font-bold uppercase tracking-widest text-primary-foreground transition-transform hover:scale-[1.01]"
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
