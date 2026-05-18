## README-Übersetzung

**Sprachen:** [English](README.md) | [简体中文](README.zh-CN.md) | [繁體中文](README.zh-TW.md) | [हिन्दी](README.hi.md) | [العربية](README.ar.md) | [Français](README.fr.md) | [Español](README.es.md) | [Deutsch](README.de.md) | [日本語](README.ja.md) | [Português](README.pt.md) | [Русский](README.ru.md) | [Italiano](README.it.md) | [한국어](README.ko.md) | [Türkçe](README.tr.md) | [Nederlands](README.nl.md) | [ไทย](README.th.md) | [Tiếng Việt](README.vi.md) | [Polski](README.pl.md) | [Українська](README.uk.md) | [Ελληνικά](README.el.md)

# ChatID Helper Bot

Rufen Sie Chat-IDs mühelos und bequem ab! Dieser auf Cloudflare Workers basierende Telegram-Bot erfordert keine Serverbereitstellung.

**Beispiel-Bot**:[ChatIDHelperBot](https://t.me/ChatIDHelperBot)

![screenshot](https://raw.githubusercontent.com/CECEthanClarke/get-chatid-bot-cf-worker/refs/heads/main/other/screenshot.jpg)

* * *

## Bereitstellungshandbuch

### Schritt 1: Erstellen Sie Ihren Telegram-Bot

1.  Gehe zu**@BotFather**auf Telegram und nutzen Sie die`/newbot`Befehl zum Erstellen Ihres Bots.
2.  Befolgen Sie die Anweisungen, um die erforderlichen Informationen bereitzustellen.
3.  Einmal erstellt,**@BotFather**sendet Ihnen den Token des Bots. Dieses Token ist für die Bereitstellung unerlässlich – bewahren Sie es zur späteren Verwendung auf.

### Schritt 2: Erfahren Sie, wie Sie Cloudflare-Worker bereitstellen

1.  Siehe die[Cloudflare Workers-Bereitstellungshandbuch](https://developers.cloudflare.com/workers/get-started/guide/).
2.  Laden Sie den Quellcode des Bots herunter.
3.  Laufen`npm run deploy`lokal, um Ihren Worker bereitzustellen.

### Schritt 3: Erforderliche Umgebungsvariablen konfigurieren

Um den Bot erfolgreich auszuführen, müssen drei Umgebungsvariablen festgelegt werden:

-   **BOT_TOKEN**
-   **BOT_SECRET_TOKEN**
-   **BOT_LANGUAGE**

Weitere Informationen finden Sie in der Cloudflare Workers-Dokumentation[Umgebungsvariablen hinzufügen](https://developers.cloudflare.com/workers/configuration/environment-variables/#add-environment-variables-via-the-dashboard).

#### Einzelheiten:

1.  **BOT_TOKEN**: Kopieren Sie das von erhaltene Token und fügen Sie es ein**@BotFather**in diese Variable ein.
2.  **BOT_SECRET_TOKEN**: Dies ist ein Wert, den Sie selbst definieren. Es muss folgende Kriterien erfüllen:
    -   1-256 Zeichen lang.
    -   Erlaubte Zeichen:`A-Z`,`a-z`,`0-9`,`_`, Und`-`.
    -   Dies gewährleistet die Sicherheit des Bots.
3.  **BOT_LANGUAGE**: Optionaler Sprachmodus. Verwenden Sie `auto`, um anhand der Benutzersprache und der Zeichen im Namen/Titel zu erkennen, oder erzwingen Sie einen unterstützten Code wie `zh`, `en`, `ja`, `ko`, `es`, `de`, `fr`, `ru`, `ar`, `fa`, `uk`, `vi`, `tr`, `pt`, `it`, `nl`, `id` oder `ms`.

### Schritt 4: Legen Sie die Webhook-URL fest

Greifen Sie in Ihrem Browser auf den folgenden API-Endpunkt zu, um die Webhook-URL zu konfigurieren:

    https://api.telegram.org/bot<token>/setWebhook?url=<url>&secret_token=<BOT_SECRET_TOKEN>

**Ersetzen Sie die Platzhalter`<token>`,`<url>`, Und`<BOT_SECRET_TOKEN>`mit Ihren tatsächlichen Werten:**

-   `<token>`: Das Token Ihres Bots von**@BotFather**.
-   `<url>`: Die von Cloudflare nach der Bereitstellung Ihres Workers bereitgestellte URL.
-   `<BOT_SECRET_TOKEN>`: Der Wert, den Sie in Schritt 3 definiert haben, um sicherzustellen, dass er genau übereinstimmt.
