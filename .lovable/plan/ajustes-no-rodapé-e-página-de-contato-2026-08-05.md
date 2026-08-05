# Ajustes no rodapé e página de Contato

## O que será feito

1. **Remover link "Terrenos" do rodapé**
   - Arquivo: `src/components/site/SiteFooter.tsx`
   - Remover o item `<li><a href="/#terrenos" ...>Terrenos</a></li>` do bloco de navegação do footer.

2. **Remover CTA de simulação da página de Contato**
   - Arquivo: `src/routes/contato.tsx`
   - Remover o `<Link>` com o texto "Ou faça a simulação direto na home →".

3. **Atualizar WhatsApp na página de Contato**
   - Arquivo: `src/routes/contato.tsx`
   - Trocar o número do link de WhatsApp de `5562999999999` para `5566999990322`.

## Critérios de pronto

- `SiteFooter.tsx` não exibe mais o link "Terrenos".
- Página `/contato` não exibe mais o link para simulação na home.
- Página `/contato` usa o número `5566999990322` no link de WhatsApp.
- TypeScript compila sem erros.
