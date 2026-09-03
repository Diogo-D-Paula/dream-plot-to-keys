import { createMiddleware } from "@tanstack/react-start";

/**
 * Client-side middleware that attaches the Supabase bearer token to
 * server function requests so `requireSupabaseAuth` can verify the caller.
 */
export const attachSupabaseAuth = createMiddleware({ type: "function" }).client(
  async ({ next }) => {
    try {
      const { supabase } = await import("@/integrations/supabase/client");
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session?.access_token) {
        return next({
          headers: { Authorization: `Bearer ${session.access_token}` },
        });
      }
    } catch {
      // no session available — continue unauthenticated
    }

    return next();
  },
);
