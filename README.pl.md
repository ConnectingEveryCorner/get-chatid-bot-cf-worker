## CZYTAJ TŁUMACZENIE

**Języki:** [English](README.md) | [简体中文](README.zh-CN.md) | [繁體中文](README.zh-TW.md) | [हिन्दी](README.hi.md) | [العربية](README.ar.md) | [Français](README.fr.md) | [Español](README.es.md) | [Deutsch](README.de.md) | [日本語](README.ja.md) | [Português](README.pt.md) | [Русский](README.ru.md) | [Italiano](README.it.md) | [한국어](README.ko.md) | [Türkçe](README.tr.md) | [Nederlands](README.nl.md) | [ไทย](README.th.md) | [Tiếng Việt](README.vi.md) | [Polski](README.pl.md) | [Українська](README.uk.md) | [Ελληνικά](README.el.md)

# ChatID Helper Bot

Bez wysiłku pobieraj identyfikatory czatu z łatwością i wygodą! Ten bot Telegram, zbudowany na platformie Cloudflare Workers, nie wymaga wdrażania serwera.

**Przykładowy Bot**:[ChatIDHelperBot](https://t.me/ChatIDHelperBot)

![screenshot](https://raw.githubusercontent.com/CECEthanClarke/get-chatid-bot-cf-worker/refs/heads/main/other/screenshot.jpg)

* * *

## Przewodnik wdrażania

### Krok 1: Utwórz bota telegramu

1.  Idź do**@BotFather**na Telegramie i skorzystaj z`/newbot`polecenie utworzenia bota.
2.  Postępuj zgodnie z instrukcjami, aby podać wymagane informacje.
3.  Raz stworzony,**@BotFather**wyśle ​​Ci token bota. Ten token jest niezbędny do wdrożenia — zachowaj go do późniejszego wykorzystania.

### Krok 2: Naucz się wdrażać pracowników Cloudflare

1.  Patrz[Przewodnik wdrażania pracowników Cloudflare](https://developers.cloudflare.com/workers/get-started/guide/).
2.  Pobierz kod źródłowy bota.
3.  Uruchomić`npm run deploy`lokalnie, aby wdrożyć pracownika.

### Krok 3: Skonfiguruj wymagane zmienne środowiskowe

Aby bot działał poprawnie, należy ustawić trzy zmienne środowiskowe:

-   **BOT_TOKEN**
-   **BOT_SECRET_TOKEN**
-   **BOT_LANGUAGE**

Zapoznaj się z dokumentacją Cloudflare Workers dla[dodawanie zmiennych środowiskowych](https://developers.cloudflare.com/workers/configuration/environment-variables/#add-environment-variables-via-the-dashboard).

#### Bliższe dane:

1.  **BOT_TOKEN**: Skopiuj i wklej otrzymany token od**@BotFather**w tę zmienną.
2.  **BOT_SECRET_TOKEN**: To jest wartość, którą sam definiujesz. Musi spełniać następujące kryteria:
    -   Długość od 1 do 256 znaków.
    -   Dozwolone znaki:`A-Z`,`a-z`,`0-9`,`_`, I`-`.
    -   This ensures the bot's security.  
3.  **BOT_LANGUAGE**: opcjonalny tryb języka. Użyj `auto`, aby wykrywać język na podstawie języka użytkownika i znaków w nazwie/tytule, albo wymuś obsługiwany kod, taki jak `zh`, `en`, `ja`, `ko`, `es`, `de`, `fr`, `ru`, `ar`, `fa`, `uk`, `vi`, `tr`, `pt`, `it`, `nl`, `id` lub `ms`.


### Krok 4: Ustaw adres URL webhooka

Uzyskaj dostęp do następującego punktu końcowego interfejsu API w przeglądarce, aby skonfigurować adres URL elementu webhook:

    https://api.telegram.org/bot<token>/setWebhook?url=<url>&secret_token=<BOT_SECRET_TOKEN>

**Wymień symbole zastępcze`<token>`,`<url>`, I`<BOT_SECRET_TOKEN>`z twoimi rzeczywistymi wartościami:**

-   `<token>`: Token Twojego bota z**@BotFather**.
-   `<url>`: adres URL dostarczony przez Cloudflare po wdrożeniu pracownika.
-   `<BOT_SECRET_TOKEN>`: Wartość zdefiniowana w kroku 3, upewniając się, że jest dokładnie dopasowana.
