## اقرأني الترجمة

**اللغات:** [English](README.md) | [简体中文](README.zh-CN.md) | [繁體中文](README.zh-TW.md) | [हिन्दी](README.hi.md) | [العربية](README.ar.md) | [Français](README.fr.md) | [Español](README.es.md) | [Deutsch](README.de.md) | [日本語](README.ja.md) | [Português](README.pt.md) | [Русский](README.ru.md) | [Italiano](README.it.md) | [한국어](README.ko.md) | [Türkçe](README.tr.md) | [Nederlands](README.nl.md) | [ไทย](README.th.md) | [Tiếng Việt](README.vi.md) | [Polski](README.pl.md) | [Українська](README.uk.md) | [Ελληνικά](README.el.md)

# روبوت مساعد ChatID

يمكنك بسهولة استرداد معرفات الدردشة بكل سهولة وراحة! لا يتطلب روبوت Telegram هذا، المبني على Cloudflare Workers، أي نشر للخادم.

**مثال بوت**:[ChatIDHelperBot](https://t.me/ChatIDHelperBot)

![screenshot](https://raw.githubusercontent.com/CECEthanClarke/get-chatid-bot-cf-worker/refs/heads/main/other/screenshot.jpg)

* * *

## دليل النشر

### الخطوة 1: إنشاء بوت Telegram الخاص بك

1.  اذهب الى**@BotFather**على Telegram واستخدم`/newbot`أمر لإنشاء الروبوت الخاص بك.
2.  اتبع المطالبات لتقديم المعلومات المطلوبة.
3.  بمجرد إنشائها،**@BotFather**سوف نرسل لك رمز البوت. يعد هذا الرمز المميز ضروريًا للنشر — احفظه لاستخدامه لاحقًا.

### الخطوة 2: تعلم كيفية نشر عمال Cloudflare

1.  الرجوع إلى[دليل نشر عمال Cloudflare](https://developers.cloudflare.com/workers/get-started/guide/).
2.  قم بتنزيل الكود المصدري للبوت.
3.  يجري`npm run deploy`محليًا لنشر العامل الخاص بك.

### الخطوة 3: تكوين متغيرات البيئة المطلوبة

لتشغيل الروبوت بنجاح، يجب تعيين ثلاثة متغيرات للبيئة:

-   **BOT_TOKEN**
-   **BOT_SECRET_TOKEN**
-   **BOT_LANGUAGE**

راجع وثائق Cloudflare Workers لـ[إضافة متغيرات البيئة](https://developers.cloudflare.com/workers/configuration/environment-variables/#add-environment-variables-via-the-dashboard).

#### تفاصيل:

1.  **BOT_TOKEN**: انسخ وألصق الرمز المميز الذي تم استلامه منه**@BotFather**في هذا المتغير.
2.  **BOT_SECRET_TOKEN**: هذه هي القيمة التي تحددها بنفسك. يجب أن تستوفي المعايير التالية:
    -   1-256 حرفا في الطول.
    -   الأحرف المسموح بها:`A-Z`,`a-z`,`0-9`,`_`، و`-`.
    -   وهذا يضمن أمن الروبوت.
3.  **BOT_LANGUAGE**: وضع اللغة اختياري. استخدم `auto` للكشف من لغة المستخدم وأحرف الاسم/العنوان، أو عيّن رمزًا مدعومًا مثل `zh` أو `en` أو `ja` أو `ko` أو `es` أو `de` أو `fr` أو `ru` أو `ar` أو `fa` أو `uk` أو `vi` أو `tr` أو `pt` أو `it` أو `nl` أو `id` أو `ms`.


### الخطوة 4: قم بتعيين عنوان URL للويب هوك

قم بالوصول إلى نقطة نهاية API التالية في متصفحك لتكوين عنوان URL للخطاف على الويب:

    https://api.telegram.org/bot<token>/setWebhook?url=<url>&secret_token=<BOT_SECRET_TOKEN>

**استبدل العناصر النائبة`<token>`,`<url>`، و`<BOT_SECRET_TOKEN>`مع القيم الفعلية الخاصة بك:**

-   `<token>`: رمز البوت الخاص بك من**@BotFather**.
-   `<url>`: عنوان URL المقدم من Cloudflare بعد نشر العامل الخاص بك.
-   `<BOT_SECRET_TOKEN>`: القيمة التي حددتها في الخطوة 3، مع التأكد من مطابقتها تمامًا.
