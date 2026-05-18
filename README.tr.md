## README Çevirisi

**Diller:** [English](README.md) | [简体中文](README.zh-CN.md) | [繁體中文](README.zh-TW.md) | [हिन्दी](README.hi.md) | [العربية](README.ar.md) | [Français](README.fr.md) | [Español](README.es.md) | [Deutsch](README.de.md) | [日本語](README.ja.md) | [Português](README.pt.md) | [Русский](README.ru.md) | [Italiano](README.it.md) | [한국어](README.ko.md) | [Türkçe](README.tr.md) | [Nederlands](README.nl.md) | [ไทย](README.th.md) | [Tiếng Việt](README.vi.md) | [Polski](README.pl.md) | [Українська](README.uk.md) | [Ελληνικά](README.el.md)

# ChatID Yardımcı Botu

Kolayca ve rahatlıkla sohbet kimliklerini zahmetsizce alın! Cloudflare Workers üzerine kurulu bu Telegram botu, sunucu dağıtımı gerektirmez.

**Örnek Bot**:[ChatIDHelperBot](https://t.me/ChatIDHelperBot)

![screenshot](https://raw.githubusercontent.com/CECEthanClarke/get-chatid-bot-cf-worker/refs/heads/main/other/screenshot.jpg)

* * *

## Dağıtım Kılavuzu

### Adım 1: Telegram Botunuzu Oluşturun

1.  Git**@BotFather**Telegram'da ve`/newbot`botunuzu oluşturma komutu.
2.  Gerekli bilgileri sağlamak için talimatları izleyin.
3.  Bir kez oluşturulduktan sonra,**@BotFather**size botun jetonunu gönderecek. Bu belirteç dağıtım için gereklidir; daha sonra kullanmak üzere saklayın.

### 2. Adım: Cloudflare Çalışanlarını Dağıtmayı Öğrenin

1.  Şuraya bakın:[Cloudflare Çalışanları Dağıtım Kılavuzu](https://developers.cloudflare.com/workers/get-started/guide/).
2.  Botun kaynak kodunu indirin.
3.  Koşmak`npm run deploy`Çalışanınızı dağıtmak için yerel olarak.

### 3. Adım: Gerekli Ortam Değişkenlerini Yapılandırın

Botu başarılı bir şekilde çalıştırmak için üç ortam değişkeninin ayarlanması gerekir:

-   **BOT_TOKEN**
-   **BOT_SECRET_TOKEN**
-   **BOT_LANGUAGE**

için Cloudflare Workers belgelerine bakın.[ortam değişkenleri ekleme](https://developers.cloudflare.com/workers/configuration/environment-variables/#add-environment-variables-via-the-dashboard).

#### Detaylar:

1.  **BOT_TOKEN**: Alınan jetonu kopyalayıp yapıştırın**@BotFather**bu değişkene.
2.  **BOT_SECRET_TOKEN**: Bu sizin kendi tanımladığınız bir değerdir. Aşağıdaki kriterleri karşılaması gerekir:
    -   1-256 karakter uzunluğunda.
    -   İzin verilen karakterler:`A-Z`,`a-z`,`0-9`,`_`, Ve`-`.
    -   Bu botun güvenliğini sağlar.
3.  **BOT_LANGUAGE**: isteğe bağlı dil modu. Kullanıcı dili ve ad/başlık karakterlerinden algılamak için `auto` kullanın veya `zh`, `en`, `ja`, `ko`, `es`, `de`, `fr`, `ru`, `ar`, `fa`, `uk`, `vi`, `tr`, `pt`, `it`, `nl`, `id` ya da `ms` gibi desteklenen bir kodu zorunlu kılın.


### 4. Adım: Web Kancası URL'sini ayarlayın

Webhook URL'sini yapılandırmak için tarayıcınızda aşağıdaki API uç noktasına erişin:

    https://api.telegram.org/bot<token>/setWebhook?url=<url>&secret_token=<BOT_SECRET_TOKEN>

**Yer tutucuları değiştirin`<token>`,`<url>`, Ve`<BOT_SECRET_TOKEN>`gerçek değerlerinizle:**

-   `<token>`: Botunuzun jetonu**@BotFather**.
-   `<url>`: Çalışanınızı dağıttıktan sonra Cloudflare tarafından sağlanan URL.
-   `<BOT_SECRET_TOKEN>`: 3. Adımda tanımladığınız değerin tam olarak eşleştiğinden emin olun.
