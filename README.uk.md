## Переклад README

**Мови:** [English](README.md) | [简体中文](README.zh-CN.md) | [繁體中文](README.zh-TW.md) | [हिन्दी](README.hi.md) | [العربية](README.ar.md) | [Français](README.fr.md) | [Español](README.es.md) | [Deutsch](README.de.md) | [日本語](README.ja.md) | [Português](README.pt.md) | [Русский](README.ru.md) | [Italiano](README.it.md) | [한국어](README.ko.md) | [Türkçe](README.tr.md) | [Nederlands](README.nl.md) | [ไทย](README.th.md) | [Tiếng Việt](README.vi.md) | [Polski](README.pl.md) | [Українська](README.uk.md) | [Ελληνικά](README.el.md)

# Бот-помічник ChatID

Отримайте ідентифікатори чату з легкістю та зручністю! Цей бот Telegram, створений на Cloudflare Workers, не вимагає розгортання сервера.

**Приклад бота**:[ChatIDHelperBot](https://t.me/ChatIDHelperBot)

![screenshot](https://raw.githubusercontent.com/CECEthanClarke/get-chatid-bot-cf-worker/refs/heads/main/other/screenshot.jpg)

* * *

## Посібник із розгортання

### Крок 1: Створіть свого Telegram-бота

1.  Перейти до**@BotFather**у Telegram і використовуйте`/newbot`команда для створення бота.
2.  Дотримуйтесь підказок, щоб надати необхідну інформацію.
3.  Після створення**@BotFather**надішле вам маркер бота. Цей маркер необхідний для розгортання — збережіть його для подальшого використання.

### Крок 2. Навчіться розгортати Cloudflare Workers

1.  Зверніться до[Посібник із розгортання Cloudflare Workers](https://developers.cloudflare.com/workers/get-started/guide/).
2.  Завантажте вихідний код бота.
3.  бігти`npm run deploy`локально, щоб розгорнути свого працівника.

### Крок 3: Налаштуйте необхідні змінні середовища

Для успішного запуску бота необхідно встановити три змінні середовища:

-   **BOT_TOKEN**
-   **BOT_SECRET_TOKEN**
-   **BOT_LANGUAGE**

Зверніться до документації Cloudflare Workers для[додавання змінних середовища](https://developers.cloudflare.com/workers/configuration/environment-variables/#add-environment-variables-via-the-dashboard).

#### Подробиці:

1.  **BOT_TOKEN**: Скопіюйте та вставте маркер, отриманий від**@BotFather**у цю змінну.
2.  **BOT_SECRET_TOKEN**: це цінність, яку ви визначаєте самі. Він повинен відповідати наступним критеріям:
    -   Довжина 1-256 символів.
    -   Дозволені символи:`A-Z`,`a-z`,`0-9`,`_`, і`-`.
    -   Це гарантує безпеку бота.
3.  **BOT_LANGUAGE**: необов’язковий мовний режим. Використовуйте `auto`, щоб визначати мову за мовою користувача та символами імені/назви, або примусово задайте підтримуваний код, наприклад `zh`, `en`, `ja`, `ko`, `es`, `de`, `fr`, `ru`, `ar`, `fa`, `uk`, `vi`, `tr`, `pt`, `it`, `nl`, `id` або `ms`.

### Крок 4. Встановіть URL-адресу Webhook

Отримайте доступ до такої кінцевої точки API у своєму браузері, щоб налаштувати URL-адресу веб-перехоплення:

    https://api.telegram.org/bot<token>/setWebhook?url=<url>&secret_token=<BOT_SECRET_TOKEN>

**Замініть заповнювачі`<token>`,`<url>`, і`<BOT_SECRET_TOKEN>`з вашими фактичними значеннями:**

-   `<token>`: маркер вашого бота з**@BotFather**.
-   `<url>`: URL-адреса, надана Cloudflare після розгортання вашого робочого файлу.
-   `<BOT_SECRET_TOKEN>`: значення, яке ви визначили на кроці 3, переконавшись, що воно точно збігається.
