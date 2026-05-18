## Traduction du fichier README

**Langues:** [English](README.md) | [简体中文](README.zh-CN.md) | [繁體中文](README.zh-TW.md) | [हिन्दी](README.hi.md) | [العربية](README.ar.md) | [Français](README.fr.md) | [Español](README.es.md) | [Deutsch](README.de.md) | [日本語](README.ja.md) | [Português](README.pt.md) | [Русский](README.ru.md) | [Italiano](README.it.md) | [한국어](README.ko.md) | [Türkçe](README.tr.md) | [Nederlands](README.nl.md) | [ไทย](README.th.md) | [Tiếng Việt](README.vi.md) | [Polski](README.pl.md) | [Українська](README.uk.md) | [Ελληνικά](README.el.md)

# Bot d'assistance ChatID

Récupérez sans effort les identifiants de discussion avec facilité et commodité ! Ce bot Telegram, construit sur Cloudflare Workers, ne nécessite aucun déploiement de serveur.

**Exemple de robot**:[ChatIDHelperBot](https://t.me/ChatIDHelperBot)

![screenshot](https://raw.githubusercontent.com/CECEthanClarke/get-chatid-bot-cf-worker/refs/heads/main/other/screenshot.jpg)

* * *

## Guide de déploiement

### Étape 1 : Créez votre robot Telegram

1.  Allez sur **@BotFather** dans Telegram et utilisez la commande `/newbot` pour créer votre bot.
2.  Suivez les invites pour fournir les informations requises.
3.  Une fois créé,**@BotFather**vous enverra le jeton du bot. Ce jeton est essentiel au déploiement : conservez-le pour une utilisation ultérieure.

### Étape 2 : Apprenez à déployer des Cloudflare Workers

1.  Consultez le [guide de déploiement des Cloudflare Workers](https://developers.cloudflare.com/workers/get-started/guide/).
2.  Téléchargez le code source du bot.
3.  Courir`npm run deploy`localement pour déployer votre travailleur.

### Étape 3 : configurer les variables d'environnement requises

Pour exécuter le bot avec succès, trois variables d'environnement doivent être définies :

-   **BOT_TOKEN**
-   **BOT_SECRET_TOKEN**
-   **BOT_LANGUAGE**

Reportez-vous à la documentation Cloudflare Workers pour[ajout de variables d'environnement](https://developers.cloudflare.com/workers/configuration/environment-variables/#add-environment-variables-via-the-dashboard).

#### Détails:

1.  **BOT_TOKEN**: Copiez et collez le jeton reçu de**@BotFather**dans cette variable.
2.  **BOT_SECRET_TOKEN**: C'est une valeur que vous définissez vous-même. Il doit répondre aux critères suivants :
    -   1 à 256 caractères.
    -   Caractères autorisés :`A-Z`,`a-z`,`0-9`,`_`, et`-`.
    -   Cela garantit la sécurité du bot.
3.  **BOT_LANGUAGE**: mode de langue facultatif. Utilisez `auto` pour détecter la langue à partir de la langue utilisateur et des caractères du nom/titre, ou forcez un code pris en charge comme `zh`, `en`, `ja`, `ko`, `es`, `de`, `fr`, `ru`, `ar`, `fa`, `uk`, `vi`, `tr`, `pt`, `it`, `nl`, `id` ou `ms`.

### Étape 4 : Définir l'URL du Webhook

Accédez au point de terminaison d'API suivant dans votre navigateur pour configurer l'URL du webhook :

    https://api.telegram.org/bot<token>/setWebhook?url=<url>&secret_token=<BOT_SECRET_TOKEN>

**Remplacer les espaces réservés`<token>`,`<url>`, et`<BOT_SECRET_TOKEN>`avec vos valeurs réelles :**

-   `<token>`: Le jeton de votre bot de**@BotFather**.
-   `<url>`: L'URL fournie par Cloudflare après le déploiement de votre travailleur.
-   `<BOT_SECRET_TOKEN>`: La valeur que vous avez définie à l'étape 3, en vous assurant qu'elle correspond exactement.
