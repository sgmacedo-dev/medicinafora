# Pix — o que falta para vender de verdade

O e-book **Primeira casa fora** custa **R$ 5,00**. A landing está em `/ebook/`.

## O que a página já mostra

- o preço
- o que a pessoa recebe
- o campo de e-mail do lead
- o botão **Pagar R$ 5 no Pix**
- os quatro passos: escolher, e-mail, Pix, link automático

## O que ainda não existe

Não há conta de pagamento. Não há chave Pix. Não há id de gateway. O botão **não cobra** e **não diz que o arquivo foi enviado**. O e-mail digitado **não sai do navegador** e **não é gravado** em servidor nenhum.

## O gancho real, quando houver chave

1. A pessoa deixa o e-mail e abre o checkout do **Mercado Pago** (ou serviço parecido).
2. O Pix é gerado por essa conta, não por um número inventado no HTML.
3. O webhook do provedor marca o pedido como pago.
4. Só então o site manda o arquivo (ou o link) para o e-mail do pedido.

Até esse webhook existir, entrega automática é desenho — não é fato.

## Foto

- Página: https://www.pexels.com/photo/portrait-of-smiling-doctor-7446991/
- Autor: Gustavo Fring
- Licença: Pexels (uso livre, inclusive comercial)
- Arquivo na página: `img/sorriso-estetoscopio.jpg`
- A foto anterior de livro + estetoscópio (Abdulai Sayni, Unsplash) ficou em `img/` e saiu da landing.
