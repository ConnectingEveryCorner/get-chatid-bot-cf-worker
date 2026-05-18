## Traduzione README

**Lingue:** [English](README.md) | [简体中文](README.zh-CN.md) | [繁體中文](README.zh-TW.md) | [हिन्दी](README.hi.md) | [العربية](README.ar.md) | [Français](README.fr.md) | [Español](README.es.md) | [Deutsch](README.de.md) | [日本語](README.ja.md) | [Português](README.pt.md) | [Русский](README.ru.md) | [Italiano](README.it.md) | [한국어](README.ko.md) | [Türkçe](README.tr.md) | [Nederlands](README.nl.md) | [ไทย](README.th.md) | [Tiếng Việt](README.vi.md) | [Polski](README.pl.md) | [Українська](README.uk.md) | [Ελληνικά](README.el.md)

# Bot di supporto ChatID

Recupera facilmente gli ID chat con facilità e comodità! Questo bot di Telegram, basato su Cloudflare Workers, non richiede l'implementazione del server.

**Esempio Bot**:[ChatIDHelperBot](https://t.me/ChatIDHelperBot)

![screenshot](https://raw.githubusercontent.com/CECEthanClarke/get-chatid-bot-cf-worker/refs/heads/main/other/screenshot.jpg)

* * *

## Guida alla distribuzione

### Passaggio 1: crea il tuo bot Telegram

1.  Vai a**@BotFather**su Telegram e usa il file`/newbot`comando per creare il tuo bot.
2.  Segui le istruzioni per fornire le informazioni richieste.
3.  Una volta creato,**@BotFather**ti invierà il token del bot. Questo token è essenziale per la distribuzione: salvalo per un utilizzo successivo.

### Passaggio 2: impara a distribuire i lavoratori Cloudflare

1.  Fare riferimento al[Guida all'implementazione di Cloudflare Workers](https://developers.cloudflare.com/workers/get-started/guide/).
2.  Scarica il codice sorgente del bot.
3.  Correre`npm run deploy`localmente per distribuire il tuo lavoratore.

### Passaggio 3: configurare le variabili di ambiente richieste

Per eseguire correttamente il bot, è necessario impostare tre variabili di ambiente:

-   **BOT_TOKEN**
-   **BOT_SECRET_TOKEN**
-   **BOT_LANGUAGE**

Fare riferimento alla documentazione di Cloudflare Workers per[aggiunta di variabili d'ambiente](https://developers.cloudflare.com/workers/configuration/environment-variables/#add-environment-variables-via-the-dashboard).

#### Dettagli:

1.  **BOT_TOKEN**: copia e incolla il token ricevuto da**@BotFather**in questa variabile.
2.  **BOT_SECRET_TOKEN**: Questo è un valore che definisci tu stesso. Deve soddisfare i seguenti criteri:
    -   Lunghezza compresa tra 1 e 256 caratteri.
    -   Caratteri consentiti:`A-Z`,`a-z`,`0-9`,`_`, E`-`.
    -   Ciò garantisce la sicurezza del bot.
3.  **BOT_LANGUAGE**: modalità lingua opzionale. Usa `auto` per rilevare la lingua dall’utente e dai caratteri di nome/titolo, oppure forza un codice supportato come `zh`, `en`, `ja`, `ko`, `es`, `de`, `fr`, `ru`, `ar`, `fa`, `uk`, `vi`, `tr`, `pt`, `it`, `nl`, `id` o `ms`.


### Passaggio 4: imposta l'URL del webhook

Accedi al seguente endpoint API nel tuo browser per configurare l'URL del webhook:

    https://api.telegram.org/bot<token>/setWebhook?url=<url>&secret_token=<BOT_SECRET_TOKEN>

**Sostituisci i segnaposto`<token>`,`<url>`, E`<BOT_SECRET_TOKEN>`con i tuoi valori reali:**

-   `<token>`: il token del tuo bot da**@BotFather**.
-   `<url>`: l'URL fornito da Cloudflare dopo aver distribuito il tuo lavoratore.
-   `<BOT_SECRET_TOKEN>`: il valore definito nel passaggio 3, assicurandoti che corrisponda esattamente.
