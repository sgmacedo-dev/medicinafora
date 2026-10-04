# Auditoria do Medicina Fora

Leitura do diretório `/workspace/medicinafora-site`, sem commit e sem push. O backup citado já está em `/workspace/medicinafora-site-backup-2026-10-04`. Esta nota descreve os arquivos no disco no momento da escrita. A cópia de trabalho não está limpa: `index.html`, `css/style.css`, `paraguai/index.html`, `bolivia/index.html`, `argentina/index.html` e `ebook/index.html` diferem do último commit em `main`. Há também o arquivo não rastreado `ESTRUTURA-GUIAS-ONDA-1.md`. Nada disso foi publicado por esta auditoria.

O site publicado em `https://sgmacedo-dev.github.io/medicinafora/` respondeu 200 nas cinco rotas. O H1 da home publicada, na hora do curl, ainda era “Dá pra estudar medicina fora”. O H1 no disco já é “Medicina fora do Brasil, sem escuro no caminho”. Home publicada e home local não são a mesma versão.

## Arquivos presentes

Fora do `.git`:

- `.nojekyll`
- `404.html`
- `LEIA-ME-PIX.md`
- `README.md`
- `ESTRUTURA-GUIAS-ONDA-1.md` (não rastreado)
- `index.html`
- `robots.txt`
- `sitemap.xml`
- `css/style.css`
- `js/main.js`
- `argentina/index.html`
- `bolivia/index.html`
- `paraguai/index.html`
- `ebook/index.html`
- `img/sorriso-estetoscopio.jpg` (usada na home e no e-book)
- `img/estetoscopio.jpg` e `img/estetoscopio-livro.jpg` (não aparecem em nenhum HTML)

Não há `CNAME`. Não há pasta `data/`. Não há favicon. Não há JSON-LD. Não há páginas institucionais.

O `README.md` diz que o domínio futuro é `https://medicinafora.site` e que o DNS ainda não aponta para o site. Nesta checagem, `www.medicinafora.site` resolve para `parkingpage.namecheap.com`. HTTPS de `medicinafora.site` e de `www` falhou no handshake (curl 35). HTTP de `medicinafora.site` seguiu um redirecionamento e a primeira resposta foi 200 em `http://www.medicinafora.site/`; um segundo pedido do corpo estourou o tempo. O domínio customizado não está servindo este repositório.

## O que manter

Vale preservar a base, não jogar fora:

- HTML em português, `lang="pt-BR"`, viewport e menu com botão que abre e fecha (`js/main.js` só faz isso, mais o botão de copiar a chave Pix na página do e-book).
- Skip link “Ir para o conteúdo”.
- Rotas que já existem e abrem: `/`, `/paraguai/`, `/bolivia/`, `/argentina/`, `/ebook/`.
- Nos três países: aviso de que o texto é informativo, tabela custo × burocracia × Revalida, FAQ, e a lista de fontes. O tom recusa ranking, vaga garantida e “revalidação fácil”.
- O e-book “Primeira casa fora” como produto à parte, com preço R$ 5 já escrito na página, e o aviso de que a página não vê o extrato do banco.
- `sitemap.xml`, `robots.txt`, `404.html`, `.nojekyll`.
- `css/style.css` próprio, mobile-first, com o menu estreito e `overflow-x: auto` nas tabelas.
- JavaScript curto, sem framework.

O crédito “Feito com amor pela agência eco.logic” está no rodapé como texto. Não é link. Não há URL da agência no repositório, então o crédito deve continuar sem link até existir um endereço real.

## Conteúdo incompleto

Os três países dizem, em texto, que os guias longos ainda não estão na página. O CSS acrescenta “(em breve)” em cada `span.soon`. São rótulos, não links.

Em breve no Paraguai: guia Revalida, quanto custa, documentos e visto, melhores faculdades / como escolher, vale a pena.

Em breve na Bolívia: guia Revalida, quanto custa, estudar medicina e documentos.

Em breve na Argentina: guia Revalida, quanto custa, estudar medicina e UBA, guia dedicado da UBA.

A home lista a mesma primeira onda como “em breve”: Revalida, comparar os três países, e os guias de estudar, custo, documentos, faculdades e UBA. Nenhum desses HTML existe.

A página da Bolívia diz que não achou um catálogo oficial completo de Medicina autorizada por sede. Cita uma notícia do Minedu e nomes de instituições, mas essa notícia não está entre os links. Não dá para tratar isso como ficha de universidade.

A página do Paraguai cita uma faixa de mensalidade e uma ordem de grandeza de brasileiros no país. As fontes ligadas são órgãos (ANEAES, CONES, Migraciones, Inep, CFM). Não há link para a reportagem nem para a tabela de mensalidade. A mesma página afirma um valor de arancel e uma data de tabela. O URL desse arancel não abriu neste acesso (ver abaixo). Esses números ficam como texto do site, não como fato reconfirmado aqui.

`LEIA-ME-PIX.md` está atrasado. Diz que não há chave Pix e que o botão não cobra. A página `/ebook/` e o `js/main.js` já mostram uma chave e dizem que a entrega automática não está ligada. O arquivo do e-book não está no repositório. Não há política de privacidade para o e-mail que a pessoa guardaria fora da página.

O `sitemap.xml` marca `lastmod` 2026-09-29 na home e nos três países, e 2026-10-04 no e-book. A home local mudou depois disso. A data do sitemap não descreve o arquivo atual.

## Links checados com curl

Links internos relativos (home, países, e-book, CSS, JS, a foto usada) apontam para arquivos que existem. Não há 404 interno entre essas páginas.

`404.html` usa caminhos absolutos `/medicinafora/`, `/medicinafora/css/style.css` e `/medicinafora/ebook/`. Isso combina com o GitHub Pages do projeto. Na raiz de um domínio próprio, esses caminhos não batem com as pastas do repositório.

Pedido a `https://sgmacedo-dev.github.io/medicinafora/nao-existe/` devolveu 404. As cinco rotas, `sitemap.xml`, `robots.txt` e `404.html` no GitHub Pages devolveram 200.

Fontes e outros URLs, com `curl -L` (seguido de um segundo teste com `--tls-max 1.2` quando o primeiro handshake falhou):

Responderam 200:

- `https://www.aneaes.gov.py/` (redirecionou para `/inicio/`)
- `https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/revalida`
- `https://portal.cfm.org.br/noticias/revalida-e-agora-a-unica-forma-de-revalidacao-de-diplomas-estrangeiros-no-brasil/`
- `https://www.minedu.gob.bo/files/publicaciones/vesfp/dgesu/REGLAMENTO-U-PRIVADAS.pdf` (PDF)
- `https://amb.org.br/apm-acende-alerta-para-irregularidades-em-cursos-de-medicina-nas-fronteiras/`
- `https://www.apm.org.br/estadao-publica-artigo-do-presidente-da-apm-sobre-cursos-de-medicina-a-distancia/`
- `https://migracion.gob.bo/`
- `https://www.boletinoficial.gob.ar/detalleAviso/primera/326096/20250529`
- `https://www.argentina.gob.ar/normativa/nacional/decreto-366-2025-413297/texto`
- `https://www.uba.ar/estudiantesextranjeros`
- `https://www.cbc.uba.ar/`
- `https://www.argentina.gob.ar/educacion/tramites/convalidar-titulo-secundario-de-paises-con-convenio`
- `https://fmed.uba.ar/direccion-admision/ingreso-de-estudiantes-extranjeros` (200 só com TLS 1.2; o curl padrão falhou com erro 35)
- `https://wise.com/invite/ahpc/silvanag203`
- a folha do Google Fonts usada no `<head>`

Não confirmados, não tratar como página viva:

- `https://migraciones.gov.py/`, `https://migraciones.gov.py/residencia-temporaria-mercosur/` e `https://migraciones.gov.py/aranceles-migratorios/`: HTTPS falhou no handshake (curl 35). HTTP devolveu 403. O DNS resolve. O caminho não foi lido.
- `https://cones.gov.py/`: o mesmo padrão, HTTPS curl 35 e HTTP 403.

Quebrado de fato neste acesso:

- `http://embolivia.org.br/visas/` devolveu 404. HTTPS do mesmo host falhou na verificação do certificado (curl 60). A raiz HTTP devolveu 403. O link de vistos da embaixada, do jeito que está na Bolívia, não abre.

`https://www.pexels.com/photo/portrait-of-smiling-doctor-7446991/` devolveu 403 para este cliente. A foto creditada já está em `img/`. 403 aqui não prova que a página da Pexels sumiu.

Não abri o corpo dessas páginas para extrair data de inscrição, taxa ou lista de universidades. Status HTTP não é conferência de conteúdo.

## Lacunas de SEO

- Canonical, Open Graph e o sitemap apontam só para `sgmacedo-dev.github.io/medicinafora`. O domínio da marca não está no ar.
- Não há `og:image` na home nem nos países. Só o e-book tem.
- Não há dados estruturados (artigo, FAQ, organização).
- Não há favicon.
- O sitemap não lista 404 (certo) e não tem páginas que ainda não existem (certo). O `lastmod` da home está velho em relação ao arquivo local.
- Título e description existem e são únicos por página. A home não compete com uma palavra-chave de prazo 2027, e não deve passar a competir sem data oficial.
- Vários H2 prometem guias que não têm URL. O Google veria “em breve”, não uma página.
- Não há `Search Console`, analytics nem arquivo de verificação no repositório.
- AdSense não cabe ainda: não há privacidade, cookies, termos, contato nem página sobre. O próprio README diz isso.

## Lacunas de UX

- O site ainda é uma home e três textos longos, mais a landing do e-book. A pessoa compara três faixas e cai num artigo. Não há caminho “descobrir, comparar, pesquisar, planejar” além desses três cliques.
- O menu é Início, Paraguai, Bolívia, Argentina, E-book. Não há destino para fontes, sobre ou contato.
- Nos países, o mesmo e-book aparece três vezes, e a Wise aparece de novo no fim. O produto complementar ocupa mais a rolagem do que um próximo passo editorial.
- Os “em breve” parecem link e não são.
- A home fala em tom de convite. Os países ainda mandam (“confirme nesta semana”, “exija”, “monte”). A voz não é uma só.
- O rodapé repete países e e-book. Não leva a nada que a pessoa não tenha visto no menu. O crédito da agência não leva a lugar nenhum, de propósito.
- A página 404 explica o limite do guia, mas o endereço dela está amarrado ao subcaminho do GitHub Pages.
- Não há busca, filtro, checklist salvo no navegador, nem forma de avisar que uma informação mudou.

## Lacunas de design

- A identidade (creme, verde escuro, serifa, bordô, faixas) já está no CSS e na home. Não é um portal: não há manchete secundária, índice, linha do tempo nem bloco de fonte visual fora da lista no fim do artigo.
- O `style.css` local ganhou classes (`.dates`, `.destinos`, `.uni`, `.indice`, `.saiu`, `.falta`) que o HTML atual não usa. São gavetas vazias. Não devem ser preenchidas com data ou universidade inventada.
- Duas fotos em `img/` não entram em página nenhuma.
- A fonte vem do Google Fonts em todas as páginas, inclusive na 404.
- Tabelas rolam no celular, o que é o mínimo. Não há versão em cards.
- O e-book é o único bloco com figura de abertura. Os países são texto puro.
- Não há mapa, selo de “fonte / última leitura” desenhado, nem estado visual de prazo. E não deve haver, enquanto não existir prazo conferido.

## Arquitetura de URL para um primeiro lançamento pequeno

Publicar só o que já é página real, mais o institucional que se escreve sem calendário e sem ficha nova.

Já existem e continuam:

- `/`
- `/paraguai/`
- `/argentina/`
- `/bolivia/`
- `/ebook/`

Dá para criar em seguida, porque o texto é do próprio projeto e não depende de edital 2027:

- `/sobre/`
- `/contato/`
- `/politica-editorial/`
- `/disclaimer/` (o aviso que já está no topo dos países, numa página só)
- `/politica-de-privacidade/`
- `/politica-de-cookies/`
- `/termos-de-uso/`
- `/fontes/` apenas com os links que esta auditoria conseguiu abrir, mais uma linha explícita para Migraciones, CONES e o visto da embaixada: “não confirmado neste acesso”. Sem universidade nova.

`/revalida/` e `/comparar/` só entram nesta leva se repetirem o que os três hubs já dizem e apontarem para o Inep (link que respondeu 200), sem data de prova, sem taxa nova e sem eleger país. Se o texto precisar de número que não está numa fonte aberta aqui, a página espera.

Não criar, nesta leva, as URLs longas que o rascunho `ESTRUTURA-GUIAS-ONDA-1.md` lista (`/paraguai/quanto-custa/`, `/paraguai/melhores-faculdades/`, `/argentina/uba-medicina/` e as outras). Elas pedem faixa, cidade ou critério que esta auditoria não reabriu na fonte.

## O que não publicar ainda

Não há, neste repositório, data de inscrição 2027 lida numa página oficial. Por isso não publicar:

- entradas de `/calendario/` ou `/prazos/`
- qualquer “inscrições abertas”, “faltam N dias” ou contagem regressiva
- ficha em `/universidades/` e página individual de universidade
- `/paraguai/inscricoes-2027/`, `/argentina/inscricoes-2027/`, `/bolivia/inscricoes-2027/` e `/universidades/.../inscricoes-2027/`
- painel “o que está acontecendo agora” com prazo, campus ou mudança de regra datada
- calculadora com mensalidade, câmbio ou custo de seis anos
- quiz que devolva um país como se fosse resultado apurado
- cidade, mapa de campi, newsletter que prometa alerta de prazo, comentário de aluno

Enquanto a fonte não for aberta e a data não estiver no HTML com o link ao lado, o lugar certo da lacuna é a frase que o próprio guia já usa: ainda não localizado oficialmente. Não inventar a data para estrear o calendário.

## Resumo

Manter a casca que funciona: menu responsivo, três países, fontes e avisos, e-book, sitemap, robots, 404, CSS e JS leve.

Incompleto: guias longos, Revalida em página própria, comparação dedicada, instituições, privacidade, domínio, sitemap alinhado ao arquivo, e três links oficiais que este acesso não leu (Migraciones, CONES, vistos da embaixada em 404).

Não inventar data de inscrição 2027, nem calendário, nem ficha de universidade, nem contagem.
