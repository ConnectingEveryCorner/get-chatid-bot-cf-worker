## Tradução LEIA-ME

**Idiomas:** [English](README.md) | [简体中文](README.zh-CN.md) | [繁體中文](README.zh-TW.md) | [हिन्दी](README.hi.md) | [العربية](README.ar.md) | [Français](README.fr.md) | [Español](README.es.md) | [Deutsch](README.de.md) | [日本語](README.ja.md) | [Português](README.pt.md) | [Русский](README.ru.md) | [Italiano](README.it.md) | [한국어](README.ko.md) | [Türkçe](README.tr.md) | [Nederlands](README.nl.md) | [ไทย](README.th.md) | [Tiếng Việt](README.vi.md) | [Polski](README.pl.md) | [Українська](README.uk.md) | [Ελληνικά](README.el.md)

# Bot auxiliar ChatID

Recupere facilmente IDs de bate-papo com facilidade e conveniência! Este bot do Telegram, desenvolvido com base no Cloudflare Workers, não requer implantação de servidor.

**Exemplo de bot**:[ChatIDHelperBot](https://t.me/ChatIDHelperBot)

![screenshot](https://raw.githubusercontent.com/CECEthanClarke/get-chatid-bot-cf-worker/refs/heads/main/other/screenshot.jpg)

* * *

## Guia de implantação

### Etapa 1: crie seu bot de telegrama

1.  Vá para**@BotFather**no Telegram e use o`/newbot`comando para criar seu bot.
2.  Siga as instruções para fornecer as informações necessárias.
3.  Uma vez criado,**@BotFather**enviará a você o token do bot. Este token é essencial para a implantação – guarde-o para uso posterior.

### Etapa 2: Aprenda a implantar trabalhadores Cloudflare

1.  Consulte o[Guia de implantação do Cloudflare Workers](https://developers.cloudflare.com/workers/get-started/guide/).
2.  Baixe o código-fonte do bot.
3.  Correr`npm run deploy`localmente para implantar seu trabalhador.

### Etapa 3: configurar variáveis ​​de ambiente necessárias

Para executar o bot com sucesso, três variáveis de ambiente devem ser definidas:

-   **BOT_TOKEN**
-   **BOT_SECRET_TOKEN**
-   **BOT_LANGUAGE**

Consulte a documentação do Cloudflare Workers para[adicionando variáveis ​​de ambiente](https://developers.cloudflare.com/workers/configuration/environment-variables/#add-environment-variables-via-the-dashboard).

#### Detalhes:

1.  **BOT_TOKEN**: Copie e cole o token recebido de**@BotFather**nesta variável.
2.  **BOT_SECRET_TOKEN**: Este é um valor que você mesmo define. Deve atender aos seguintes critérios:
    -   1-256 caracteres de comprimento.
    -   Caracteres permitidos:`A-Z`,`a-z`,`0-9`,`_`, e`-`.
    -   Isso garante a segurança do bot.
3.  **BOT_LANGUAGE**: modo de idioma opcional. Use `auto` para detectar pelo idioma do usuário e pelos caracteres do nome/título, ou force um código compatível como `zh`, `en`, `ja`, `ko`, `es`, `de`, `fr`, `ru`, `ar`, `fa`, `uk`, `vi`, `tr`, `pt`, `it`, `nl`, `id` ou `ms`.


### Etapa 4: definir o URL do webhook

Acesse o seguinte endpoint de API em seu navegador para configurar o URL do webhook:

    https://api.telegram.org/bot<token>/setWebhook?url=<url>&secret_token=<BOT_SECRET_TOKEN>

**Substitua os espaços reservados`<token>`,`<url>`, e`<BOT_SECRET_TOKEN>`com seus valores reais:**

-   `<token>`: o token do seu bot de**@BotFather**.
-   `<url>`: o URL fornecido pela Cloudflare após a implantação do seu trabalhador.
-   `<BOT_SECRET_TOKEN>`: o valor que você definiu na Etapa 3, garantindo que corresponda exatamente.
