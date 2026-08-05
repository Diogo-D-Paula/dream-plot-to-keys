import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

type OAuthResult = {
  redirect_url?: string;
  redirect_to?: string;
  client?: { name?: string } | null;
};

type OAuthApi = {
  getAuthorizationDetails: (
    id: string,
  ) => Promise<{ data: OAuthResult | null; error: { message: string } | null }>;
  approveAuthorization: (
    id: string,
  ) => Promise<{ data: OAuthResult | null; error: { message: string } | null }>;
  denyAuthorization: (
    id: string,
  ) => Promise<{ data: OAuthResult | null; error: { message: string } | null }>;
};

function oauthApi(): OAuthApi {
  return (supabase.auth as unknown as { oauth: OAuthApi }).oauth;
}

export const Route = createFileRoute("/.lovable/oauth/consent")({
  ssr: false,
  validateSearch: (s: Record<string, unknown>) => ({
    authorization_id: typeof s.authorization_id === "string" ? s.authorization_id : "",
  }),
  component: Consent,
});

function Consent() {
  const { authorization_id: authorizationId } = Route.useSearch();
  const [session, setSession] = useState<boolean | null>(null);
  const [details, setDetails] = useState<OAuthResult | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    supabase.auth.getSession().then(({ data }) => {
      if (active) setSession(Boolean(data.session));
    });
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    if (!session || !authorizationId) return;
    let active = true;
    oauthApi()
      .getAuthorizationDetails(authorizationId)
      .then(({ data, error: err }) => {
        if (!active) return;
        if (err) {
          setError(err.message);
          return;
        }
        const immediate = data?.redirect_url ?? data?.redirect_to;
        if (immediate && !data?.client) {
          window.location.href = immediate;
          return;
        }
        setDetails(data);
      });
    return () => {
      active = false;
    };
  }, [session, authorizationId]);

  async function signIn(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    const { error: err } = await supabase.auth.signInWithPassword({ email, password });
    setBusy(false);
    if (err) {
      setError(err.message);
      return;
    }
    setSession(true);
  }

  async function decide(approve: boolean) {
    setBusy(true);
    setError(null);
    const api = oauthApi();
    const { data, error: err } = approve
      ? await api.approveAuthorization(authorizationId)
      : await api.denyAuthorization(authorizationId);
    if (err) {
      setBusy(false);
      setError(err.message);
      return;
    }
    const target = data?.redirect_url ?? data?.redirect_to;
    if (!target) {
      setBusy(false);
      setError("O servidor de autorização não retornou um redirecionamento.");
      return;
    }
    window.location.href = target;
  }

  if (!authorizationId) {
    return (
      <Shell>
        <p className="text-sm text-muted-foreground">
          Requisição inválida: parâmetro <code>authorization_id</code> ausente.
        </p>
      </Shell>
    );
  }

  if (session === null) {
    return (
      <Shell>
        <p className="text-sm text-muted-foreground">Carregando…</p>
      </Shell>
    );
  }

  if (!session) {
    return (
      <Shell>
        <h1 className="text-xl font-semibold text-foreground">Entrar para continuar</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Faça login na sua conta para autorizar este aplicativo.
        </p>
        <form onSubmit={signIn} className="mt-6 space-y-3">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
          />
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha"
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
          />
          {error && (
            <p role="alert" className="text-sm text-destructive">
              {error}
            </p>
          )}
          <button
            type="submit"
            disabled={busy}
            className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground disabled:opacity-60"
          >
            {busy ? "Entrando…" : "Entrar"}
          </button>
        </form>
      </Shell>
    );
  }

  const clientName = details?.client?.name ?? "um aplicativo";

  return (
    <Shell>
      <h1 className="text-xl font-semibold text-foreground">
        Conectar {clientName} à sua conta
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Isso permite que {clientName} acesse os leads e recursos deste site em seu nome.
      </p>
      {error && (
        <p role="alert" className="mt-4 text-sm text-destructive">
          {error}
        </p>
      )}
      <div className="mt-6 flex gap-2">
        <button
          disabled={busy}
          onClick={() => decide(true)}
          className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground disabled:opacity-60"
        >
          Autorizar
        </button>
        <button
          disabled={busy}
          onClick={() => decide(false)}
          className="rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground disabled:opacity-60"
        >
          Recusar
        </button>
      </div>
    </Shell>
  );
}

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-sm rounded-lg border border-border bg-card p-6">
        {children}
      </div>
    </main>
  );
}
