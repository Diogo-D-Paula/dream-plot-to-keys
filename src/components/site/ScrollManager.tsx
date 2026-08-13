import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

/**
 * Sempre inicia a página no topo absoluto (0,0).
 * Se houver hash na URL, rola até a âncora somente depois do layout estabilizar.
 */
export function ScrollManager() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const hash = useRouterState({ select: (s) => s.location.hash });

  useEffect(() => {
    if (typeof window === "undefined") return;

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);

    if (!hash) return;

    let raf = 0;
    const timer = window.setTimeout(() => {
      raf = window.requestAnimationFrame(() => {
        const el = document.getElementById(hash.replace(/^#/, ""));
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }, 250);

    return () => {
      window.clearTimeout(timer);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, [pathname, hash]);

  return null;
}
