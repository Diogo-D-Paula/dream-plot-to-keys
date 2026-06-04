export function FinalCta() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-3xl bg-foreground p-12 text-center text-background md:p-20">
          <h2 className="mx-auto mb-8 max-w-3xl text-balance text-4xl font-extrabold tracking-tighter md:text-6xl">
            Sua casa própria pode estar mais perto do que você imagina.
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-white/60">
            Faça uma simulação gratuita agora e descubra em minutos o valor aprovado e as
            parcelas estimadas para o seu perfil.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#simulador"
              className="rounded-sm bg-primary px-10 py-5 text-sm font-bold uppercase tracking-widest text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              Fazer simulação gratuita
            </a>
            <a
              href="https://wa.me/5562999999999"
              target="_blank"
              rel="noreferrer"
              className="rounded-sm border border-white/20 px-10 py-5 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-white/10"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
