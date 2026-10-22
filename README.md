# Cicarelli — site de atendimento em São Paulo

React 19, TypeScript, Vite 6 e Tailwind 4. Node 22 ou superior.

## Desenvolvimento e validação

- npm ci
- npm run dev
- npm run lint (verificação TypeScript; não há ESLint configurado)
- npm run build (sitemap + cliente + renderização estática)
- npm test (HTML, links, metadados, schema e sitemap de todas as rotas)
- node scripts/browser-check.mjs (Edge instalado; servidor local próprio, sem enviar formulários)

O build escreve HTML para cada rota conhecida e 404.html. Vercel usa cleanUrls e não possui fallback universal para index.html. Rotas inexistentes devem retornar HTTP 404. O alias da home e as seis rotas /especialidade têm redirects permanentes. O teste local simula essa configuração; a verificação HTTP em produção é obrigatória após publicar.

## Publicação e rollback

Repositório: supremapix/Alfeu-Cicarelli-de-Melo---Advogado, branch main.
Projeto Vercel identificado pelo status GitHub: supremapixs-projects/alfeu-cicarelli-de-melo-advogado.
Domínio deste checkout: https://sp.cicarelli.adv.br.
O build de base 592c26ce99db5ffd804b90f61a8b3543a04d3cf5 gerou os mesmos assets publicados (index-CfJKOsVx.js / index-DILVQV3G.css). O domínio www.cicarelli.adv.br entrega outros assets e não é alvo desta publicação.
A integração GitHub/Vercel publica main. Para rollback, reverta o commit da atualização com git revert e publique pelo mesmo fluxo; não faça reset forçado. O workflow Site quality valida o conteúdo no GitHub; não se presume que ele seja um bloqueio obrigatório da Vercel.

## Conteúdo

Rotas: src/data/site.ts, src/data/bairros.ts e src/data/blog.ts. Guias novos em src/data/guides.ts. Não inventar bairros, sedes, números OAB, resultados ou gratuidade. Preservar atendimento online e distinguir sede em Curitiba de área atendida.
Ver AUDIT.md para evidências e pendências editoriais.
