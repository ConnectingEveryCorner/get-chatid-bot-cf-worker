## Μετάφραση README

**Γλώσσες:** [English](README.md) | [简体中文](README.zh-CN.md) | [繁體中文](README.zh-TW.md) | [हिन्दी](README.hi.md) | [العربية](README.ar.md) | [Français](README.fr.md) | [Español](README.es.md) | [Deutsch](README.de.md) | [日本語](README.ja.md) | [Português](README.pt.md) | [Русский](README.ru.md) | [Italiano](README.it.md) | [한국어](README.ko.md) | [Türkçe](README.tr.md) | [Nederlands](README.nl.md) | [ไทย](README.th.md) | [Tiếng Việt](README.vi.md) | [Polski](README.pl.md) | [Українська](README.uk.md) | [Ελληνικά](README.el.md)

# ChatID Helper Bot

Ανακτήστε τα αναγνωριστικά συνομιλίας με ευκολία και ευκολία! Αυτό το bot Telegram, που έχει δημιουργηθεί σε Cloudflare Workers, δεν απαιτεί ανάπτυξη διακομιστή.

**Παράδειγμα Bot**:[ChatIDHelperBot](https://t.me/ChatIDHelperBot)

![screenshot](https://raw.githubusercontent.com/CECEthanClarke/get-chatid-bot-cf-worker/refs/heads/main/other/screenshot.jpg)

* * *

## Οδηγός ανάπτυξης

### Βήμα 1: Δημιουργήστε το Telegram bot σας

1.  Μεταβείτε στο**@BotFather**στο Telegram και χρησιμοποιήστε το`/newbot`εντολή για τη δημιουργία του bot σας.
2.  Ακολουθήστε τις οδηγίες για να δώσετε τις απαιτούμενες πληροφορίες.
3.  Μόλις δημιουργηθεί,**@BotFather**θα σας στείλει το διακριτικό του bot. Αυτό το διακριτικό είναι απαραίτητο για την ανάπτυξη - αποθηκεύστε το για μελλοντική χρήση.

### Βήμα 2: Μάθετε να αναπτύσσετε το Cloudflare Workers

1.  Ανατρέξτε στο[Οδηγός ανάπτυξης Cloudflare Workers](https://developers.cloudflare.com/workers/get-started/guide/).
2.  Κατεβάστε τον πηγαίο κώδικα του bot.
3.  Τρέξιμο`npm run deploy`τοπικά για να αναπτύξετε τον εργάτη σας.

### Βήμα 3: Διαμόρφωση απαιτούμενων μεταβλητών περιβάλλοντος

Για να εκτελεστεί σωστά το bot, πρέπει να οριστούν τρεις μεταβλητές περιβάλλοντος:

-   **BOT_TOKEN**
-   **BOT_SECRET_TOKEN**
-   **BOT_LANGUAGE**

Ανατρέξτε στην τεκμηρίωση του Cloudflare Workers για[προσθήκη μεταβλητών περιβάλλοντος](https://developers.cloudflare.com/workers/configuration/environment-variables/#add-environment-variables-via-the-dashboard).

#### Καθέκαστα:

1.  **BOT_TOKEN**: Αντιγράψτε και επικολλήστε το διακριτικό που λάβατε από**@BotFather**σε αυτή τη μεταβλητή.
2.  **BOT_SECRET_TOKEN**: Αυτή είναι μια αξία που ορίζετε μόνοι σας. Πρέπει να πληροί τα ακόλουθα κριτήρια:
    -   Μήκος 1-256 χαρακτήρες.
    -   Επιτρεπόμενοι χαρακτήρες:`A-Z`,`a-z`,`0-9`,`_`, και`-`.
    -   Αυτό διασφαλίζει την ασφάλεια του bot.
3.  **BOT_LANGUAGE**: προαιρετική λειτουργία γλώσσας. Χρησιμοποιήστε `auto` για ανίχνευση από τη γλώσσα χρήστη και τους χαρακτήρες ονόματος/τίτλου ή ορίστε υποχρεωτικά έναν υποστηριζόμενο κωδικό όπως `zh`, `en`, `ja`, `ko`, `es`, `de`, `fr`, `ru`, `ar`, `fa`, `uk`, `vi`, `tr`, `pt`, `it`, `nl`, `id` ή `ms`.

### Βήμα 4: Ορίστε τη διεύθυνση URL του Webhook

Αποκτήστε πρόσβαση στο ακόλουθο τελικό σημείο API στο πρόγραμμα περιήγησής σας για να διαμορφώσετε τη διεύθυνση URL του webhook:

    https://api.telegram.org/bot<token>/setWebhook?url=<url>&secret_token=<BOT_SECRET_TOKEN>

**Αντικαταστήστε τα σύμβολα κράτησης θέσης`<token>`,`<url>`, και`<BOT_SECRET_TOKEN>`με τις πραγματικές σας αξίες:**

-   `<token>`: Το bot σας είναι διακριτικό από**@BotFather**.
-   `<url>`: Η διεύθυνση URL που παρέχεται από το Cloudflare μετά την ανάπτυξη του εργάτη σας.
-   `<BOT_SECRET_TOKEN>`: Η τιμή που ορίσατε στο Βήμα 3, διασφαλίζοντας ότι ταιριάζει ακριβώς.
