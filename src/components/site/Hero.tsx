import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import casa1 from "@/assets/casa-1.jpg";
import casa2 from "@/assets/casa-2.jpg";
import casa3 from "@/assets/casa-3.jpg";

const slides = [
  { src: casa1, alt: "Fachada de casa branca com muro de pedra natural" },
  { src: casa2, alt: "Área gourmet com pergolado de madeira e piscina" },
  { src: casa3, alt: "Duas casas geminadas com fachada em concreto aparente" },
];

export function Hero() {
  const [index, setIndex] = useState(0);
  const go = (n: number) => setIndex((n + slides.length) % slides.length);

  return (
    <section className="px-6 pt-40 pb-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="flex items-center animate-fade-up">
            <div>
              <h1 className="mb-8 text-balance text-6xl font-extrabold leading-[0.9] tracking-tighter md:text-8xl">
                Conquiste sua{" "}
                <span className="gold-text">casa própria</span>
              </h1>
              <p className="mb-10 max-w-lg text-lg text-muted-foreground">
                Financie a compra do terreno e a construção da casa em um único contrato. Comece a
                pagar as parcelas só depois da entrega das chaves.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/5543991750788?text=Ol%C3%A1%21%20Vim%20do%20site%20e%20quero%20fazer%20uma%20simula%C3%A7%C3%A3o%20de%20financiamento%20para%20terreno%20%2B%20constru%C3%A7%C3%A3o."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gold-button rounded-sm px-10 py-5 text-sm font-bold uppercase tracking-widest text-primary-foreground transition-transform hover:scale-[1.01]"
                >
                  Falar no WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="animate-fade-up [animation-delay:200ms]">
            <div
              className="relative w-full overflow-hidden rounded-sm outline-1 -outline-offset-1 outline-black/5"
              style={{ aspectRatio: "16 / 10" }}
              role="region"
              aria-roledescription="carrossel"
              aria-label="Projetos realizados"
            >
              {slides.map((s, i) => (
                <img
                  key={s.src}
                  src={s.src}
                  alt={s.alt}
                  width={1280}
                  height={800}
                  aria-hidden={i !== index}
                  className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-500 ${
                    i === index ? "opacity-100" : "opacity-0"
                  }`}
                  loading={i === 0 ? "eager" : "lazy"}
                  decoding={i === 0 ? "sync" : "async"}
                  fetchPriority={i === 0 ? "high" : "low"}
                />
              ))}

              <button
                type="button"
                onClick={() => go(index - 1)}
                aria-label="Imagem anterior"
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 text-foreground shadow-sm transition hover:bg-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => go(index + 1)}
                aria-label="Próxima imagem"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 text-foreground shadow-sm transition hover:bg-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-4 flex justify-center gap-3">
              {slides.map((s, i) => (
                <button
                  key={s.src}
                  type="button"
                  onClick={() => go(i)}
                  aria-label={`Ir para a imagem ${i + 1}`}
                  aria-current={i === index}
                  className={`h-2.5 w-2.5 rounded-full transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                    i === index ? "bg-primary" : "bg-border"
                  }`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
