## Bản dịch README

**Ngôn ngữ:** [English](README.md) | [简体中文](README.zh-CN.md) | [繁體中文](README.zh-TW.md) | [हिन्दी](README.hi.md) | [العربية](README.ar.md) | [Français](README.fr.md) | [Español](README.es.md) | [Deutsch](README.de.md) | [日本語](README.ja.md) | [Português](README.pt.md) | [Русский](README.ru.md) | [Italiano](README.it.md) | [한국어](README.ko.md) | [Türkçe](README.tr.md) | [Nederlands](README.nl.md) | [ไทย](README.th.md) | [Tiếng Việt](README.vi.md) | [Polski](README.pl.md) | [Українська](README.uk.md) | [Ελληνικά](README.el.md)

# Bot trợ giúp ChatID

Dễ dàng truy xuất ID trò chuyện một cách dễ dàng và thuận tiện! Bot Telegram này, được xây dựng trên Cloudflare Workers, không yêu cầu triển khai máy chủ.

**Bot ví dụ**:[ChatIDHelperBot](https://t.me/ChatIDHelperBot)

![screenshot](https://raw.githubusercontent.com/CECEthanClarke/get-chatid-bot-cf-worker/refs/heads/main/other/screenshot.jpg)

* * *

## Hướng dẫn triển khai

### Bước 1: Tạo Bot Telegram của bạn

1.  đi tới**@BotFather**trên Telegram và sử dụng`/newbot`lệnh để tạo bot của bạn.
2.  Làm theo lời nhắc để cung cấp thông tin cần thiết.
3.  Sau khi được tạo,**@BotFather**sẽ gửi cho bạn mã thông báo của bot. Mã thông báo này rất cần thiết cho việc triển khai—hãy lưu nó để sử dụng sau.

### Bước 2: Tìm hiểu cách triển khai Cloudflare Workers

1.  Tham khảo[Hướng dẫn triển khai nhân viên Cloudflare](https://developers.cloudflare.com/workers/get-started/guide/).
2.  Tải xuống mã nguồn của bot.
3.  Chạy`npm run deploy`cục bộ để triển khai nhân viên của bạn.

### Bước 3: Định cấu hình các biến môi trường cần thiết

Để chạy bot thành công, phải đặt ba biến môi trường:

-   **BOT_TOKEN**
-   **BOT_SECRET_TOKEN**
-   **BOT_LANGUAGE**

Tham khảo tài liệu Cloudflare Workers để biết[thêm các biến môi trường](https://developers.cloudflare.com/workers/configuration/environment-variables/#add-environment-variables-via-the-dashboard).

#### Chi tiết:

1.  **BOT_TOKEN**: Sao chép và dán mã thông báo nhận được từ**@BotFather**vào biến này.
2.  **BOT_SECRET_TOKEN**: Đây là giá trị do bạn tự xác định. Nó phải đáp ứng các tiêu chí sau:
    -   Độ dài 1-256 ký tự.
    -   Ký tự được phép:`A-Z`,`a-z`,`0-9`,`_`, Và`-`.
    -   Điều này đảm bảo tính bảo mật của bot.
3.  **BOT_LANGUAGE**: chế độ ngôn ngữ tùy chọn. Dùng `auto` để phát hiện theo ngôn ngữ người dùng và ký tự trong tên/tiêu đề, hoặc ép một mã được hỗ trợ như `zh`, `en`, `ja`, `ko`, `es`, `de`, `fr`, `ru`, `ar`, `fa`, `uk`, `vi`, `tr`, `pt`, `it`, `nl`, `id` hoặc `ms`.

### Bước 4: Đặt URL Webhook

Truy cập điểm cuối API sau trong trình duyệt của bạn để định cấu hình URL webhook:

    https://api.telegram.org/bot<token>/setWebhook?url=<url>&secret_token=<BOT_SECRET_TOKEN>

**Thay thế phần giữ chỗ`<token>`,`<url>`, Và`<BOT_SECRET_TOKEN>`với giá trị thực tế của bạn:**

-   `<token>`: Mã thông báo bot của bạn từ**@BotFather**.
-   `<url>`: URL được Cloudflare cung cấp sau khi triển khai nhân viên của bạn.
-   `<BOT_SECRET_TOKEN>`: Giá trị bạn đã xác định ở Bước 3, đảm bảo nó khớp chính xác.
