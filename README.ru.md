## README Перевод

**Языки:** [English](README.md) | [简体中文](README.zh-CN.md) | [繁體中文](README.zh-TW.md) | [हिन्दी](README.hi.md) | [العربية](README.ar.md) | [Français](README.fr.md) | [Español](README.es.md) | [Deutsch](README.de.md) | [日本語](README.ja.md) | [Português](README.pt.md) | [Русский](README.ru.md) | [Italiano](README.it.md) | [한국어](README.ko.md) | [Türkçe](README.tr.md) | [Nederlands](README.nl.md) | [ไทย](README.th.md) | [Tiếng Việt](README.vi.md) | [Polski](README.pl.md) | [Українська](README.uk.md) | [Ελληνικά](README.el.md)

# Бот-помощник ChatID

Легко и удобно получайте идентификаторы чата! Этот бот Telegram, созданный на основе Cloudflare Workers, не требует развертывания сервера.

**Пример бота**:[ChatIDHelperBot](https://t.me/ChatIDHelperBot)

![screenshot](https://raw.githubusercontent.com/CECEthanClarke/get-chatid-bot-cf-worker/refs/heads/main/other/screenshot.jpg)

* * *

## Руководство по развертыванию

### Шаг 1. Создайте своего бота Telegram

1.  Перейти к**@BotFather**в Telegram и воспользуйтесь`/newbot`команда для создания вашего бота.
2.  Следуйте инструкциям, чтобы предоставить необходимую информацию.
3.  Однажды созданный,**@BotFather**отправит вам токен бота. Этот токен необходим для развертывания — сохраните его для дальнейшего использования.

### Шаг 2. Научитесь развертывать рабочие процессы Cloudflare

1.  Обратитесь к[Руководство по развертыванию Cloudflare Workers](https://developers.cloudflare.com/workers/get-started/guide/).
2.  Загрузите исходный код бота.
3.  Бегать`npm run deploy`локально, чтобы развернуть вашего работника.

### Шаг 3. Настройте необходимые переменные среды

Для успешного запуска бота необходимо установить три переменные среды:

-   **BOT_TOKEN**
-   **BOT_SECRET_TOKEN**
-   **BOT_LANGUAGE**

Обратитесь к документации Cloudflare Workers для получения более подробной информации.[добавление переменных среды](https://developers.cloudflare.com/workers/configuration/environment-variables/#add-environment-variables-via-the-dashboard).

#### Подробности:

1.  **BOT_TOKEN**: скопируйте и вставьте токен, полученный от**@BotFather**в эту переменную.
2.  **BOT_SECRET_TOKEN**: Это ценность, которую вы определяете сами. Он должен соответствовать следующим критериям:
    -   Длина от 1 до 256 символов.
    -   Разрешенные символы:`A-Z`,`a-z`,`0-9`,`_`, и`-`.
    -   Это обеспечивает безопасность бота.
3.  **BOT_LANGUAGE**: необязательный языковой режим. Используйте `auto`, чтобы определять язык по языку пользователя и символам имени/заголовка, или задайте поддерживаемый код, например `zh`, `en`, `ja`, `ko`, `es`, `de`, `fr`, `ru`, `ar`, `fa`, `uk`, `vi`, `tr`, `pt`, `it`, `nl`, `id` или `ms`.


### Шаг 4. Установите URL-адрес вебхука

Откройте следующую конечную точку API в своем браузере, чтобы настроить URL-адрес веб-перехватчика:

    https://api.telegram.org/bot<token>/setWebhook?url=<url>&secret_token=<BOT_SECRET_TOKEN>

**Замените заполнители`<token>`,`<url>`, и`<BOT_SECRET_TOKEN>`с вашими фактическими значениями:**

-   `<token>`: токен вашего бота от**@BotFather**.
-   `<url>`: URL-адрес, предоставленный Cloudflare после развертывания вашего работника.
-   `<BOT_SECRET_TOKEN>`: значение, которое вы определили на шаге 3, гарантируя его точное совпадение.
