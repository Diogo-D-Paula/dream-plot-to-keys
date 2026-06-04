import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { simuladorSchema } from "./leads.schema";

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => simuladorSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("leads").insert({
      nome: data.nome,
      whatsapp: data.whatsapp,
      renda: data.renda,
      possui_fgts: data.possui_fgts,
      cidade: data.cidade,
      possui_terreno: data.possui_terreno,
    });
    if (error) {
      console.error("submitLead error:", error);
      throw new Error("Não foi possível enviar sua simulação. Tente novamente.");
    }
    return { ok: true };
  });

export const listLeads = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { supabase, userId } = context;
    // Verify admin via RLS — non-admins will simply get an empty list
    const { data: roles } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", userId);
    const isAdmin = (roles ?? []).some((r) => r.role === "admin");
    if (!isAdmin) {
      throw new Error("Acesso restrito a administradores.");
    }
    const { data, error } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(500);
    if (error) throw new Error(error.message);
    return { leads: data ?? [] };
  });
