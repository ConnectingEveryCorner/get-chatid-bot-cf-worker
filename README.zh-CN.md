## 自述文件翻译

**语言:** [English](README.md) | [简体中文](README.zh-CN.md) | [繁體中文](README.zh-TW.md) | [हिन्दी](README.hi.md) | [العربية](README.ar.md) | [Français](README.fr.md) | [Español](README.es.md) | [Deutsch](README.de.md) | [日本語](README.ja.md) | [Português](README.pt.md) | [Русский](README.ru.md) | [Italiano](README.it.md) | [한국어](README.ko.md) | [Türkçe](README.tr.md) | [Nederlands](README.nl.md) | [ไทย](README.th.md) | [Tiếng Việt](README.vi.md) | [Polski](README.pl.md) | [Українська](README.uk.md) | [Ελληνικά](README.el.md)

# ChatID 助手机器人

轻松便捷地轻松检索聊天 ID！此 Telegram 机器人基于 Cloudflare Workers 构建，无需部署服务器。

**机器人示例**:[ChatIDHelperBot](https://t.me/ChatIDHelperBot)

![screenshot](https://raw.githubusercontent.com/CECEthanClarke/get-chatid-bot-cf-worker/refs/heads/main/other/screenshot.jpg)

* * *

## 部署指南

### 第 1 步：创建您的 Telegram 机器人

1.  前往**@BotFather**在 Telegram 上并使用`/newbot`命令来创建你的机器人。
2.  按照提示提供所需的信息。
3.  一旦创建，**@BotFather**将向您发送机器人的令牌。此令牌对于部署至关重要 - 保存它以供以后使用。

### 第 2 步：学习部署 Cloudflare Workers

1.  请参阅[Cloudflare Workers 部署指南](https://developers.cloudflare.com/workers/get-started/guide/).
2.  下载机器人的源代码。
3.  跑步`npm run deploy`在本地部署您的工作人员。

### 步骤3：配置所需的环境变量

要成功运行机器人，必须设置三个环境变量：

-   **BOT_TOKEN**
-   **BOT_SECRET_TOKEN**
-   **BOT_LANGUAGE**

请参阅 Cloudflare Workers 文档了解[添加环境变量](https://developers.cloudflare.com/workers/configuration/environment-variables/#add-environment-variables-via-the-dashboard).

#### 细节：

1.  **BOT_TOKEN**：复制并粘贴从接收到的令牌**@BotFather**到这个变量中。
2.  **BOT_SECRET_TOKEN**：这是您自己定义的值。它必须满足以下标准：
    -   长度为 1-256 个字符。
    -   允许的字符：`A-Z`,`a-z`,`0-9`,`_`， 和`-`.
    -   这确保了机器人的安全。
3.  **BOT_LANGUAGE**：可选语言模式。使用 `auto` 会根据用户语言和昵称/标题字符自动判断，也可以强制指定支持的语言代码，例如 `zh`、`en`、`ja`、`ko`、`es`、`de`、`fr`、`ru`、`ar`、`fa`、`uk`、`vi`、`tr`、`pt`、`it`、`nl`、`id` 或 `ms`。

### 第 4 步：设置 Webhook URL

在浏览器中访问以下 API 端点以配置 Webhook URL：

    https://api.telegram.org/bot<token>/setWebhook?url=<url>&secret_token=<BOT_SECRET_TOKEN>

**替换占位符`<token>`,`<url>`， 和`<BOT_SECRET_TOKEN>`与您的实际值：**

-   `<token>`：您的机器人的令牌来自**@BotFather**.
-   `<url>`：部署工作程序后 Cloudflare 提供的 URL。
-   `<BOT_SECRET_TOKEN>`：您在步骤 3 中定义的值，确保其完全匹配。
