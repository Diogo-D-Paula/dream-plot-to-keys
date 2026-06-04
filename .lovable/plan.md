## Visão geral

Construir uma landing page MVP focada em conversão, em português, com a direção visual "Editorial moderno e confiável" (Inter + JetBrains Mono, paleta off-white/charcoal/terracota). Todas as seções da brief presentes na página `/`, com simulador de financiamento persistindo leads no Lovable Cloud. Páginas extras como placeholders simples para receberem conteúdo depois.

## Direção visual (travada)

- Fontes: Inter (display) + JetBrains Mono (mono, números e labels)
- Paleta: background `hsl(40 20% 97%)`, foreground `hsl(200 20% 12%)`, primary terracota `hsl(15 65% 45%)`, muted, border
- Tom editorial: tipografia bold tracking-tighter, mono labels uppercase, layouts amplos, animações sutis (fade-up)
- Tokens copiados verbatim para `src/styles.css` via `@theme`

## Estrutura de rotas

```
src/routes/
  __root.tsx          já existe — apenas atualizar meta + nav/footer global se necessário
  index.tsx           landing page completa (todas as seções abaixo)
  como-funciona.tsx   placeholder com link de volta + CTA simulador
  projetos.tsx        placeholder
  terrenos.tsx        placeholder
  contato.tsx         placeholder com WhatsApp + form
  admin.leads.tsx     painel simples (lista de leads) — protegido
  _authenticated/route.tsx + auth.tsx  para o admin
```

Menu fixo com âncoras na home (`#processo`, `#simulador`, `#projetos`, `#faq`) + CTA "Simular" sempre visível.

## Seções da home (index.tsx)

1. Nav fixa com logo placeholder + âncoras + CTA Simular
2. Hero: headline "Conquiste sua casa própria no terreno ideal" + sub + 2 CTAs (Simular / WhatsApp) + imagem
3. Benefícios (6 cards em grid escuro) — escolha local, projeto, 30% economia, imóvel novo, pague após entrega, Caixa
4. Como funciona (timeline 6 passos)
5. **Simulador** (peça central, formulário grande): nome, WhatsApp, renda, FGTS, cidade, possui terreno — salva em `leads`
6. Projetos de casas (galeria 6 cards com filtros visuais — categoria, área, quartos) — dados estáticos
7. Terrenos disponíveis (lista com filtros cidade/bairro/preço/metragem) — dados estáticos
8. Diferenciais da empresa (7 itens com checks)
9. Depoimentos / prova social (3-4 cards)
10. FAQ accordion (8 perguntas)
11. CTA final + Footer

## Backend (Lovable Cloud)

Habilitar Lovable Cloud e criar migração:

```sql
create table public.leads (
  id uuid primary key default gen_random_uuid(),
  nome text not null,
  whatsapp text not null,
  renda numeric,
  possui_fgts boolean,
  cidade text,
  possui_terreno boolean,
  created_at timestamptz default now()
);

grant insert on public.leads to anon, authenticated;
grant select on public.leads to authenticated;
grant all on public.leads to service_role;

alter table public.leads enable row level security;

create policy "anyone can insert leads" on public.leads
  for insert to anon, authenticated with check (true);

-- admin role check
create type public.app_role as enum ('admin', 'user');
create table public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  role app_role not null,
  unique (user_id, role)
);
grant select on public.user_roles to authenticated;
grant all on public.user_roles to service_role;
alter table public.user_roles enable row level security;

create or replace function public.has_role(_user_id uuid, _role app_role)
returns boolean language sql stable security definer set search_path = public
as $$ select exists (select 1 from public.user_roles where user_id = _user_id and role = _role) $$;

create policy "admins can read leads" on public.leads
  for select to authenticated using (public.has_role(auth.uid(), 'admin'));
```

### Server functions

- `src/lib/leads.functions.ts`
  - `submitLead` — público (sem auth), valida com Zod (nome, whatsapp regex, renda min 0 max 1e8, etc.), insere via `supabaseAdmin`
  - `listLeads` — protegido com `requireSupabaseAuth`, valida `has_role(admin)` antes de retornar

### Admin

- `/auth` — login email/senha (Supabase Auth)
- `/_authenticated/admin/leads` — tabela simples com leads ordenados desc

## Componentes a criar

- `src/components/site/Nav.tsx`, `Footer.tsx`
- `src/components/site/Hero.tsx`, `Benefits.tsx`, `Process.tsx`, `Projects.tsx`, `Lots.tsx`, `Differentials.tsx`, `Testimonials.tsx`, `Faq.tsx` (usando shadcn accordion), `FinalCta.tsx`
- `src/components/site/SimulatorForm.tsx` — form react-hook-form + zod + toast (sonner) + envia ao server fn
- `src/data/projects.ts`, `src/data/lots.ts` — dados estáticos
- Imagens geradas via `imagegen` para hero + 6 projetos + 3 depoimentos

## SEO

- `index.tsx` head: title "Sua Construtora — Casa própria com terreno e construção financiados pela Caixa", description focada em conversão, og:title/description, og:url relativo `/`
- JSON-LD `Organization` em `__root.tsx`
- Title de cada rota placeholder também customizado

## Detalhes técnicos

- Tailwind v4: tokens via `@theme inline` em `src/styles.css` mapeando para variáveis `:root`
- Animações: `@keyframes fade-up` + classe utilitária
- shadcn: usar `accordion`, `button`, `input`, `select`, `label`, `toast` (sonner)
- Validação Zod no client (form) E server (server fn)
- Máscara WhatsApp manual no input (sem libs extras)
- Preview viewport: desktop (site institucional)

## Fora de escopo desta versão

- Blog
- Página Obras (acompanhamento)
- Página Sobre Nós completa
- Integração CRM/WhatsApp API (apenas link `wa.me`)
- Filtros funcionais reais de projetos/terrenos (UI visual apenas, sem busca)
- Multi-idioma

Posso seguir? Após aprovado, habilito o Lovable Cloud, crio a migração e construo tudo de uma vez.