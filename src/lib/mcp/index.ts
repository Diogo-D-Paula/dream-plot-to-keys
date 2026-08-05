import { auth, defineMcp } from "@lovable.dev/mcp-js";
import listLeadsTool from "./tools/list-leads";
import leadStatsTool from "./tools/lead-stats";
import createLeadTool from "./tools/create-lead";

const projectRef = import.meta.env['VITE_SUPABASE_PROJECT_ID'] ?? "project-ref-unset";

export default defineMcp({
  name: "your-dream-home-path",
  title: "Your Dream Home Path",
  version: "0.1.0",
  instructions:
    "Tools for the land + financed construction lead site. Use `list_leads` and `lead_stats` to review captured leads (admin accounts only), and `create_lead` to register a new interested customer.",
  auth: auth.oauth.issuer({
    issuer: `https://${projectRef}.supabase.co/auth/v1`,
    acceptedAudiences: "authenticated",
  }),
  tools: [listLeadsTool, leadStatsTool, createLeadTool],
});
