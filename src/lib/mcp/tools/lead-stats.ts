import { defineTool } from "@lovable.dev/mcp-js";
import { supabaseForUser } from "../supabase";

export default defineTool({
  name: "lead_stats",
  title: "Lead statistics",
  description:
    "Summarize captured leads: total count, how many already own land, how many have FGTS, average income and top cities. Requires an admin account.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: async (_input, ctx) => {
    if (!ctx.isAuthenticated()) {
      return { content: [{ type: "text", text: "Not authenticated" }], isError: true };
    }
    const supabase = supabaseForUser(ctx);
    const { data, error } = await supabase
      .from("leads")
      .select("renda, cidade, possui_fgts, possui_terreno")
      .limit(1000);
    if (error) {
      return { content: [{ type: "text", text: error.message }], isError: true };
    }
    const rows = data ?? [];
    const rendas = rows
      .map((r) => r.renda)
      .filter((v): v is number => typeof v === "number");
    const cityCounts: Record<string, number> = {};
    for (const row of rows) {
      const city = (row.cidade ?? "").trim();
      if (city) cityCounts[city] = (cityCounts[city] ?? 0) + 1;
    }
    const stats = {
      total: rows.length,
      com_terreno: rows.filter((r) => r.possui_terreno).length,
      com_fgts: rows.filter((r) => r.possui_fgts).length,
      renda_media:
        rendas.length > 0
          ? Math.round(rendas.reduce((a, b) => a + b, 0) / rendas.length)
          : null,
      top_cidades: Object.entries(cityCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10)
        .map(([cidade, count]) => ({ cidade, count })),
    };
    return {
      content: [{ type: "text", text: JSON.stringify(stats, null, 2) }],
      structuredContent: stats,
    };
  },
});
