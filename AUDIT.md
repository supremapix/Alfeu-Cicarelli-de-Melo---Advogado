# Auditoria — 22/10/2026

## Evidências da base

- Checkout novo, sem trabalho anterior sobreposto; base main 592c26ce99db5ffd804b90f61a8b3543a04d3cf5. Não havia AGENTS.md, README ou .agents/skills no repo.
- React/Vite SPA. Status Vercel success, deployment Production 6414696090; destino alfeu-cicarelli-de-melo-advogado-ig5j5tw46-supremapixs-projects.vercel.app. Assets locais idênticos aos de sp.cicarelli.adv.br.
- URL inexistente retornava 200 e o HTML da home. Canonicals dinâmicos apontavam ao domínio principal enquanto o HTML base e robots apontavam ao subdomínio SP.
- Sitemap anterior: 63 URLs, incluindo 38 regiões de Curitiba incompatíveis com os dados SP. Gerador não integrado ao build, com artigos fictícios e rotas geográficas inexistentes.
- Inventário real: 142 registros regionais, 10 artigos anteriores, 6 serviços e 9 páginas institucionais. Mantidos os 142 registros; nenhuma expansão de bairros. Agora 12 artigos e 169 URLs canônicas. As URLs de Curitiba que nunca existiram neste checkout não recebem redirects geograficamente enganosos.
- npm ci falhava porque rehype-raw e dependências estavam ausentes do lockfile. Corrigido sem mudança deliberada da stack.

## Correções

HTML estático por rota, canonical próprio, uma descrição e título por página, JSON-LD correspondente à página, remoção de FAQ global invisível e metadados duplicados. Robots mantém o sitemap SP. HTTP404 via arquivo estático e remoção do catch-all, erros em slugs inválidos e redirects permanentes conhecidos. Não foram criadas avaliações nem estatísticas de resultados. Relatos de clientes sem evidência foram substituídos por acesso à pesquisa de jurisprudência na mesma URL. Removidas ofertas promocionais de gratuidade, êxito sem risco e garantias da apresentação comercial. Site preserva contatos e identidade visual. Menu móvel oculto deixa de receber foco quando fechado; dropdown acessível por foco e link de salto para o conteúdo. Conteúdo fica visível sem esperar animações/JavaScript.

Novos guias: /blog/documentos-atendimento-plano-saude e /blog/protocolo-ans-consulta-processo-tjsp. /bairro/centro ganhou conteúdo próprio com atendimento online confirmado pelo usuário, sede em Curitiba e links úteis. Home/blog conectam os novos conteúdos.

## Fontes primárias consultadas

- https://www.oab.org.br/leisnormas/legislacao/provimentos/205-2021 — publicidade informativa, veracidade e limites promocionais.
- https://www.gov.br/ans/pt-br/assuntos/consumidor/notificacao-de-intermediacao-preliminar-nip — canal administrativo.
- https://www.tjsp.jus.br/Processos — serviços oficiais, consulta e sistemas.
- https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm — dados de saúde sensíveis.

## Pendências que não devem ser confundidas com validação jurídica

Os dez artigos anteriores, respostas da FAQ e textos jurídicos de serviços/bairros incluem teses absolutas sobre cobertura, rol, prazos, indenizações e tutelas. A revisão jurídica material foi submetida à confirmação e não foi feita por substituições automáticas. Há informação potencialmente desatualizada (incluindo referências normativas e generalizações sobre cobertura). Este lote não certifica essas teses nem confirma os resultados apresentados anteriormente.

OAB divergente: componente AdvogadoProfile informa SP 430.760 / PR 56.401; equipe e rodapé informam SP 331.673 / PR 49.213. Não foi escolhido um número por inferência; exige confirmação do escritório. Os perfis permanecem pendentes de verificação factual.

As 142 páginas locais herdadas são muito semelhantes. Foram preservadas para não apagar URLs úteis, mas precisam de revisão editorial gradual ou consolidação baseada em evidência de tráfego. Não há promessa de indexação, posição ou citação em IA. llms.txt é apenas navegação auxiliar.

Performance: HTML pré-renderizado e arquivos JS divididos; carga JS total ainda relevante, com aviso de chunk principal acima de 500 kB. Não foi realizada auditoria Lighthouse nem medição de Core Web Vitals de campo. Imagens/fontes externas continuam dependendo dos respectivos hosts.

## Testes

Resultados finais e commit constam do relatório de entrega. Scripts reproduzíveis no README. Não foram enviados formulários nem mensagens externas; DNS, permissões, credenciais e contas não foram alterados.
