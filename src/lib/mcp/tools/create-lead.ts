import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { supabaseForUser } from "../supabase";

export default defineTool({
  name: "create_lead",
  title: "Create lead",
  description:
    "Register a new lead interested in land purchase + financed construction.",
  inputSchema: {
    nome: z.string().trim().min(2).max(120).describe("Full name of the lead."),
    whatsapp: z
      .string()
      .trim()
      .min(8)
      .max(30)
      .describe("WhatsApp number, digits and separators only."),
    renda: z
      .number()
      .min(0)
      .max(100000000)
      .optional()
      .describe("Monthly household income in BRL."),
    cidade: z.string().trim().max(120).optional().describe("City of interest."),
    possui_fgts: z.boolean().optional().describe("Whether the lead has FGTS balance."),
    possui_terreno: z.boolean().optional().describe("Whether the lead already owns land."),
  },
  annotations: { readOnlyHint: false, destructiveHint: false, openWorldHint: false },
  handler: async (input, ctx) => {
    if (!ctx.isAuthenticated()) {
      return { content: [{ type: "text", text: "Not authenticated" }], isError: true };
    }
    const supabase = supabaseForUser(ctx);
    const { error } = await supabase.from("leads").insert({
      nome: input.nome,
      whatsapp: input.whatsapp,
      renda: input.renda ?? null,
      cidade: input.cidade ?? null,
      possui_fgts: input.possui_fgts ?? false,
      possui_terreno: input.possui_terreno ?? false,
    });
    if (error) {
      return { content: [{ type: "text", text: error.message }], isError: true };
    }
    return {
      content: [{ type: "text", text: `Lead "${input.nome}" registrado com sucesso.` }],
      structuredContent: { ok: true },
    };
  },
});
