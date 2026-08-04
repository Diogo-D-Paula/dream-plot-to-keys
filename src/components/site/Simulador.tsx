import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { simuladorSchema, type SimuladorInput } from "@/lib/leads.schema";
import { submitLead } from "@/lib/leads.functions";

function maskPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export function Simulador() {
  const submit = useServerFn(submitLead);
  const [sent, setSent] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SimuladorInput>({
    resolver: zodResolver(simuladorSchema),
    defaultValues: { possui_fgts: false, possui_terreno: false, renda: 0 },
  });

  const whatsapp = watch("whatsapp") ?? "";

  const onSubmit = async (values: SimuladorInput) => {
    try {
      await submit({ data: values });
      toast.success("Simulação recebida! Um consultor falará com você em até 15 minutos.");
      setSent(true);
      reset();
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Erro ao enviar. Tente novamente.");
    }
  };

  return (
    <section id="simulador" className="border-t border-border bg-secondary/30 py-32">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-16 text-center">
          <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
            Simulador de Viabilidade
          </span>
          <h2 className="mb-4 text-balance text-4xl font-extrabold tracking-tighter md:text-5xl">
            Descubra seu potencial de financiamento.
          </h2>
          <p className="mx-auto max-w-md text-muted-foreground">
            Preencha em 2 minutos. Retornamos pelo WhatsApp com o valor aprovado e as parcelas
            estimadas.
          </p>
        </div>

        {sent ? (
          <div className="rounded-2xl border border-border bg-card p-12 text-center shadow-2xl shadow-black/5 ring-1 ring-black/5">
            <h3 className="mb-2 text-2xl font-extrabold">Simulação enviada!</h3>
            <p className="text-muted-foreground">
              Um consultor entrará em contato pelo WhatsApp em até 15 minutos.
            </p>
            <button
              onClick={() => setSent(false)}
              className="mt-6 font-mono text-xs uppercase tracking-widest text-primary hover:underline"
            >
              Fazer outra simulação
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-2xl border border-border bg-card p-8 shadow-2xl shadow-black/5 ring-1 ring-black/5 md:p-12"
          >
            <div className="mb-8 grid gap-8 md:grid-cols-2">
              <Field label="Seu nome completo" error={errors.nome?.message}>
                <input
                  type="text"
                  placeholder="Ex: Ana Silva"
                  {...register("nome")}
                  className="w-full border-b border-border bg-transparent py-3 outline-none transition-colors focus:border-primary"
                />
              </Field>
              <Field label="WhatsApp para resultado" error={errors.whatsapp?.message}>
                <input
                  type="tel"
                  placeholder="(11) 99999-9999"
                  value={whatsapp}
                  onChange={(e) => setValue("whatsapp", maskPhone(e.target.value), { shouldValidate: true })}
                  className="w-full border-b border-border bg-transparent py-3 outline-none transition-colors focus:border-primary"
                />
              </Field>
              <Field label="Renda familiar mensal" error={errors.renda?.message}>
                <div className="relative">
                  <span className="absolute top-3 left-0 text-muted-foreground">R$</span>
                  <input
                    type="number"
                    step="100"
                    placeholder="0,00"
                    {...register("renda", { valueAsNumber: true })}
                    className="w-full border-b border-border bg-transparent py-3 pl-8 outline-none transition-colors focus:border-primary"
                  />
                </div>
              </Field>
              <Field label="Cidade onde deseja morar" error={errors.cidade?.message}>
                <input
                  type="text"
                  placeholder="Ex: Goiânia"
                  {...register("cidade")}
                  className="w-full border-b border-border bg-transparent py-3 outline-none transition-colors focus:border-primary"
                />
              </Field>
            </div>

            <div className="mb-8 grid gap-4 md:grid-cols-2">
              <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-border p-4 transition-colors hover:bg-secondary/40">
                <input type="checkbox" {...register("possui_fgts")} className="size-4 accent-primary" />
                <span className="text-sm font-medium">Possuo saldo de FGTS</span>
              </label>
              <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-border p-4 transition-colors hover:bg-secondary/40">
                <input type="checkbox" {...register("possui_terreno")} className="size-4 accent-primary" />
                <span className="text-sm font-medium">Já possuo terreno próprio</span>
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-xl bg-primary py-6 font-extrabold uppercase tracking-widest text-primary-foreground transition-transform hover:scale-[1.01] disabled:opacity-60"
            >
              {isSubmitting ? "Enviando..." : "Gerar minha simulação agora"}
            </button>
            <p className="mt-6 text-center font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Dados protegidos pela LGPD • Retorno via WhatsApp em até 15 min
            </p>
          </form>
        )}
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label className="block font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      {children}
      {error ? <p className="text-xs text-destructive">{error}</p> : null}
    </div>
  );
}
