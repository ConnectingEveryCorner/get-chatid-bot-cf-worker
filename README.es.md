## Léame Traducción

**Idiomas:** [English](README.md) | [简体中文](README.zh-CN.md) | [繁體中文](README.zh-TW.md) | [हिन्दी](README.hi.md) | [العربية](README.ar.md) | [Français](README.fr.md) | [Español](README.es.md) | [Deutsch](README.de.md) | [日本語](README.ja.md) | [Português](README.pt.md) | [Русский](README.ru.md) | [Italiano](README.it.md) | [한국어](README.ko.md) | [Türkçe](README.tr.md) | [Nederlands](README.nl.md) | [ไทย](README.th.md) | [Tiếng Việt](README.vi.md) | [Polski](README.pl.md) | [Українська](README.uk.md) | [Ελληνικά](README.el.md)

# Bot auxiliar ChatID

¡Recupere ID de chat sin esfuerzo con facilidad y conveniencia! Este bot de Telegram, construido sobre Cloudflare Workers, no requiere implementación de servidor.

**robot de ejemplo**:[ChatIDHelperBot](https://t.me/ChatIDHelperBot)

![screenshot](https://raw.githubusercontent.com/CECEthanClarke/get-chatid-bot-cf-worker/refs/heads/main/other/screenshot.jpg)

* * *

## Guía de implementación

### Paso 1: crea tu bot de Telegram

1.  Ir a**@BotFather**en Telegram y utilizar el`/newbot`Comando para crear tu bot.
2.  Siga las indicaciones para proporcionar la información requerida.
3.  Una vez creado,**@BotFather**le enviará el token del bot. Este token es esencial para la implementación; guárdelo para usarlo más adelante.

### Paso 2: aprenda a implementar trabajadores de Cloudflare

1.  Consulte el[Guía de implementación para trabajadores de Cloudflare](https://developers.cloudflare.com/workers/get-started/guide/).
2.  Descarga el código fuente del bot.
3.  Correr`npm run deploy`localmente para implementar a su trabajador.

### Paso 3: configurar las variables de entorno necesarias

Para ejecutar el bot correctamente, se deben configurar tres variables de entorno:

-   **BOT_TOKEN**
-   **BOT_SECRET_TOKEN**
-   **BOT_LANGUAGE**

Consulte la documentación de Cloudflare Workers para[agregando variables de entorno](https://developers.cloudflare.com/workers/configuration/environment-variables/#add-environment-variables-via-the-dashboard).

#### Detalles:

1.  **BOT_TOKEN**: Copie y pegue el token recibido de**@BotFather**en esta variable.
2.  **BOT_SECRET_TOKEN**: Este es un valor que usted mismo define. Debe cumplir los siguientes criterios:
    -   1-256 caracteres de longitud.
    -   Caracteres permitidos:`A-Z`,`a-z`,`0-9`,`_`, y`-`.
    -   Esto garantiza la seguridad del bot.
3.  **BOT_LANGUAGE**: modo de idioma opcional. Use `auto` para detectar según el idioma del usuario y los caracteres del nombre/título, o fuerce un código compatible como `zh`, `en`, `ja`, `ko`, `es`, `de`, `fr`, `ru`, `ar`, `fa`, `uk`, `vi`, `tr`, `pt`, `it`, `nl`, `id` o `ms`.


### Paso 4: configurar la URL del webhook

Acceda al siguiente punto final API en su navegador para configurar la URL del webhook:

    https://api.telegram.org/bot<token>/setWebhook?url=<url>&secret_token=<BOT_SECRET_TOKEN>

**Reemplazar los marcadores de posición`<token>`,`<url>`, y`<BOT_SECRET_TOKEN>`con sus valores reales:**

-   `<token>`: El token de tu bot de**@BotFather**.
-   `<url>`: La URL proporcionada por Cloudflare después de implementar a su trabajador.
-   `<BOT_SECRET_TOKEN>`: El valor que definiste en el Paso 3, asegurándote de que coincida exactamente.
