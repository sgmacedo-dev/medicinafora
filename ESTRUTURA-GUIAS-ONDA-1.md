# Estrutura dos guias — onda 1

**Marca:** Medicina Fora  
**Público:** brasileiros que pensam em estudar medicina fora  
**Núcleo:** Paraguai, Bolívia, Argentina (Itália fora)  
**Staging:** https://sgmacedo-dev.github.io/medicinafora/  
**Domínio futuro:** medicinafora.site  
**Fontes de verdade (rascunho editorial, não colar inteiro no HTML):** `/workspace/hub-medicina-content/p0/`  
**Status:** estrutura. Não publicar. Páginas de país já no ar ficam como estão nesta etapa.

## 1. Posicionamento

Portal independente, jovem e útil: convida a **comparar** caminhos no Mercosul, sem ranking, sem agência e sem promessa de vaga, visto ou diploma no Brasil.

## 2. Mapa da onda 1

### Já no ar (hubs de país)

| URL | HTML | Fonte MD | Papel |
| --- | --- | --- | --- |
| `/paraguai/` | `paraguai/index.html` | `paraguai.md` | Landing: custo × burocracia × Revalida, filtro ANEAES, aponta os guias |
| `/bolivia/` | `bolivia/index.html` | `bolivia.md` | Landing: presencial, alerta de modalidade, aponta os guias |
| `/argentina/` | `argentina/index.html` | `argentina.md` | Landing: pública vs particular, UBA, aponta os guias |

### Guias longos a montar em seguida

Cada um vira uma página HTML no slug abaixo. O MD é roteiro e checagem de fonte — não despejo.

| Prioridade | URL | Propósito | H2 (esqueleto a partir do P0) | MD |
| --- | --- | --- | --- | --- |
| 1 | `/revalida/` | Explicar o exame Inep sem vender aprovação | O que é; quem pode fazer; duas etapas; taxas com fonte e ano; depois de passar; o que não faz; preparação sem golpe; checklist; FAQ; fontes | `revalida.md` |
| 2 | `/comparativo/paraguai-bolivia-argentina/` | Lado a lado, sem eleger vencedor | O que os três têm em comum; tabela; um bloco por país; como decidir; por perfil; FAQ; fontes | `comparativo-paraguai-bolivia-argentina.md` |
| 3 | `/paraguai/estudar-medicina/` | Mapa de ingresso e rotina | Por que aparece nas buscas; passo a passo; cidades; ingresso; ANEAES; documentos (resumo); idioma; duração; Brasil depois; erros; FAQ; fontes | `paraguai-estudar-medicina.md` |
| 4 | `/paraguai/quanto-custa/` | Faixas com ano e “confirme na IES”, nunca preço de manchete solto | Tabela; o que mexe na mensalidade; exercício de 6 anos; fronteira vs capital; checklist de dinheiro; Brasil depois; comparar; FAQ; fontes | `paraguai-quanto-custa.md` |
| 5 | `/paraguai/vale-a-pena/` | Decisão, não propaganda | Resposta curta; dinheiro incompleto; entrada mais fácil; ANEAES; fronteira vs capital; riscos; quando faz sentido; quando olhar os outros; checklist; tempo + Revalida; FAQ; fontes | `paraguai-vale-a-pena.md` |
| 6 | `/paraguai/melhores-faculdades/` | Critérios, não ranking | Por que não há ranking; ANEAES; infra e prática; transparência de custo; comunidade e idioma; CONES; shortlist; o que ignorar; pública vs privada; red flags; FAQ; fontes | `paraguai-melhores-faculdades.md` |
| 7 | `/paraguai/documentos-e-visto/` | Três pastas (escola, apostila, residência) | Visão geral; documentos escolares; Apostila de Haia; residência temporal Mercosul; ordem sugerida; fronteira; erros; FAQ; fontes | `paraguai-documentos-e-visto.md` |
| 8 | `/bolivia/estudar-medicina/` | Presencial e reconhecimento, com alerta de EAD | Por que entra no radar; alerta de modalidade; passo a passo; ingresso; exemplos com ressalva (não ranking); documentos; idioma; duração; Brasil; prós e contras; erros; FAQ; fontes | `bolivia-estudar-medicina.md` |
| 9 | `/bolivia/quanto-custa/` | Ordem de grandeza, não tabela inventada | Tabela orientativa; o que mexe no preço; 6 anos; custo de vida; o que pedir por escrito; migração; comparar; FAQ; fontes | `bolivia-quanto-custa.md` |
| 10 | `/argentina/estudar-medicina/` | Pública vs particular e o debate do arancel sem cravar cobrança | Pública vs particular; arancel a estrangeiros (com cuidado); passo a passo; convalidação; idioma; cidades; Brasil; prós e contras; erros; FAQ; fontes | `argentina-estudar-medicina.md` |
| 11 | `/argentina/quanto-custa/` | “Sem mensalidade” ≠ barato | Tabela; pública não é de graça viver; particular; custo de vida com caveat; exercício de 6 anos; checklist; comparar; FAQ; fontes | `argentina-quanto-custa.md` |
| 12 | `/argentina/uba-medicina/` | UBA como processo, não atalho | O que é a UBA no mapa; estrangeiros; checklist; CBC; idioma; gratuidade e norma vigente sem afirmar que já cobra; Brasil; vs particular; erros; FAQ; fontes | `argentina-uba-medicina.md` |

Pastas sugeridas no site (ainda sem HTML de guia): `revalida/`, `comparativo/paraguai-bolivia-argentina/`, e subpastas sob `paraguai/`, `bolivia/`, `argentina/`. Não criar as páginas nesta etapa.

## 3. Esqueleto de página (todo guia)

1. **Header** igual ao restante do site (Início, Paraguai, Bolívia, Argentina, E-book) + breadcrumb.
2. **Title / meta / canonical** honestos, no staging `https://sgmacedo-dev.github.io/medicinafora/…`.
3. **Disclaimer** fixo, no topo: informativo; não é consultoria jurídica, acadêmica ou migratória; não garante vaga, visto nem exercício no Brasil; regras e valores mudam.
4. **Lead** em uma frase: o que a página ajuda a comparar, sem “este país é melhor”.
5. **Corpo** nos H2 do mapa acima. Parágrafos úteis. FAQ só se responder dúvida real.
6. **Fontes** clicáveis (órgão + URL). Onde a fonte não fechou, lacuna explícita — não inventar.
7. **Atualizado em** com data real de revisão da página (não data chutada).
8. **CTA leve**, no fim e secundário: e-book *Primeira casa fora* (`/ebook/`, R$ 5). Não compete com o guia. Sem linguagem de agência, captação de aluno ou “garantimos sua vaga”.

Contato de rascunho, se a página tiver bloco de correção: silvanagomesmacedo.dev.br@gmail.com. Sem hard sell.

## 4. Voz — faz / não faz

**Faz**

- Convite no imperativo: “compare”, “confira na faculdade”, “olhe o selo do campus”.
- Tom direto e empático, de portal jovem. Frase curta.
- Separar anúncio, regra oficial e lacuna.
- Preço só como faixa, com ano e “confirme na fonte”. Na home, nem isso: custo fica qualitativo.
- Lembrar que diploma de fora **não** vale no Brasil sem o caminho oficial (Revalida), quando o tema for exercício aqui.

**Não faz**

- “Compara” / “este é o melhor” / ranking inventado / “revalidação fácil” / “diploma automático” / vaga ou visto garantidos.
- Data de edital, taxa ou mensalidade sem fonte. Manchete com R$ na home.
- Agência, parceria de captação, “te matriculamos”.
- Itália ou país fora de PY / BO / AR nesta onda.
- EAD ou semipresencial de medicina como atalho, sobretudo na Bolívia — o guia alerta, não oferece.
- Afirmar que universidade argentina já cobra estrangeiro, ou que a pública é sempre grátis.

## 5. Ordem para implementar o HTML

Hubs de país já existem. Próximas páginas, nesta ordem:

1. `/revalida/`
2. `/comparativo/paraguai-bolivia-argentina/`
3. `/paraguai/estudar-medicina/`
4. `/paraguai/quanto-custa/`
5. `/paraguai/vale-a-pena/`
6. `/paraguai/melhores-faculdades/`
7. `/paraguai/documentos-e-visto/`
8. `/bolivia/estudar-medicina/`
9. `/bolivia/quanto-custa/`
10. `/argentina/estudar-medicina/`
11. `/argentina/quanto-custa/`
12. `/argentina/uba-medicina/`

Ao subir cada uma, trocar o `<span class="soon">` correspondente na home por link real. Não publicar (sem git push) até pedido explícito.

## 6. E-book

**Primeira casa fora** (R$ 5, `/ebook/`) é complemento: mala, primeira semana, mudança. Não substitui hub nem guia de país, não entra no hero e não é promessa acadêmica.
