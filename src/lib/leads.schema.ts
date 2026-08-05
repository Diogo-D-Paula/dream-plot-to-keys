import { z } from "zod";

export const simuladorSchema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome completo").max(120),
  whatsapp: z
    .string()
    .trim()
    .min(8, "WhatsApp inválido")
    .max(30, "WhatsApp inválido")
    .regex(/^[\d\s()+\-]+$/, "WhatsApp inválido"),
  renda: z
    .number({ error: "Informe sua renda" })
    .min(0)
    .max(100000000),
  possui_fgts: z.boolean(),
  cidade: z.string().trim().min(2, "Informe a cidade").max(120),
  possui_terreno: z.boolean(),
});

export type SimuladorInput = z.infer<typeof simuladorSchema>;
