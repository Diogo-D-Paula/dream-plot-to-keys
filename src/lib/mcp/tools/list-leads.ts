import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { supabaseForUser } from "../supabase";

export default defineTool({
  name: "list_leads",
  title: "List leads",
  description:
    "List captured leads (name, WhatsApp, income, city, FGTS and land flags), newest first. Requires an admin account.",
  inputSchema: {
    limit: z
      .number()
      .int()
      .min(1)
      .max(200)
      .optional()
      .describe("Maximum number of leads to return. Defaults to 50."),
    cidade: z
      .string()
      .trim()
      .min(1)
      .optional()
      .describe("Filter by city (case-insensitive partial match)."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: async ({ limit, cidade }, ctx) => {
    if (!ctx.isAuthenticated()) {
      return { content: [{ type: "text", text: "Not authenticated" }], isError: true };
    }
    const supabase = supabaseForUser(ctx);
    let query = supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(limit ?? 50);
    if (cidade) query = query.ilike("cidade", `%${cidade}%`);

    const { data, error } = await query;
    if (error) {
      return { content: [{ type: "text", text: error.message }], isError: true };
    }
    if (!data || data.length === 0) {
      return {
        content: [
          {
            type: "text",
            text: "No leads returned. If you expected results, your account may not have the admin role.",
          },
        ],
        structuredContent: { leads: [], count: 0 },
      };
    }
    return {
      content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
      structuredContent: { leads: data, count: data.length },
    };
  },
});
