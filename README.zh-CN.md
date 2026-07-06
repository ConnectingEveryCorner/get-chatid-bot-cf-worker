## 自述文件翻译

**语言:** [English](README.md) | [简体中文](README.zh-CN.md)

# ChatID 助手机器人

轻松便捷地轻松检索聊天 ID！此 Telegram 机器人基于 Cloudflare Workers 构建，无需部署服务器

**机器人示例**:[ChatIDHelperBot](https://t.me/ChatIDHelperBot)

![screenshot](https://raw.githubusercontent.com/CECEthanClarke/get-chatid-bot-cf-worker/refs/heads/main/other/screenshot.jpg)

* * *

## 部署指南

### 第 1 步：创建您的 Telegram 机器人

1.  前往**@BotFather**在 Telegram 上并使用`/newbot`命令来创建你的机器人
2.  按照提示提供所需的信息
3.  一旦创建，**@BotFather**将向您发送机器人的令牌。此令牌对于部署至关重要 - 保存它以供以后使用

### 第 2 步：学习部署 Cloudflare Workers

1.  请参阅[Cloudflare Workers 部署指南](https://developers.cloudflare.com/workers/get-started/guide/).
2.  下载机器人的源代码
3.  跑步`npm run deploy`在本地部署您的工作人员

### 步骤3：配置环境变量

单机器人继续配置现有的 `BOT_*` 变量；只有需要新增机器人时才配置 `BOTS_CONFIG`：

-   **BOT_TOKEN**
-   **BOT_SECRET_TOKEN**
-   **BOT_LANGUAGE**
-   **BOTS_CONFIG**（可选，用于配置多个机器人）

请参阅 Cloudflare Workers 文档了解[添加环境变量](https://developers.cloudflare.com/workers/configuration/environment-variables/#add-environment-variables-via-the-dashboard).

#### 细节：

1.  **BOT_TOKEN**：复制并粘贴从接收到的令牌**@BotFather**到这个变量中
2.  **BOT_SECRET_TOKEN**：这是您自己定义的值。它必须满足以下标准：
    -   长度为 1-256 个字符
    -   允许的字符：`A-Z`,`a-z`,`0-9`,`_`， 和`-`.
    -   这确保了机器人的安全
3.  **BOT_LANGUAGE**：可选语言模式。使用 `auto` 会根据用户语言和昵称/标题字符自动判断，也可以强制指定支持的语言代码，例如 `zh`、`en`、`ja`、`ko`、`es`、`de`、`fr`、`ru`、`ar`、`fa`、`uk`、`vi`、`tr`、`pt`、`it`、`nl`、`id` 或 `ms`
4.  **BOTS_CONFIG**：用于新增机器人的可选 JSON Secret。现有的 `BOT_*` 变量仍然用于默认 Webhook，不需要迁移

示例：

```json
{
  "helper_cn": {
    "token": "123456:替换为机器人Token",
    "secret": "替换为WebhookSecret",
    "language": "zh",
    "enabled": true
  },
  "helper_global": {
    "token": "789012:替换为机器人Token",
    "secret": "替换为WebhookSecret",
    "language": "auto"
  }
}
```

`BOTS_CONFIG` 需要填写为一段完整的 JSON 字符串，Worker 会自动解析。字段说明：

- 机器人标识，例如 `helper_cn`：必填且不能重复。建议只使用字母、数字、`_` 或 `-`；不能包含 `/`，因为它会出现在 Webhook URL 中
- `token`：必填，填写 **@BotFather** 提供的 Bot Token
- `secret`：必填，该机器人的 Webhook Secret。长度为 1-256，只能包含 `A-Z`、`a-z`、`0-9`、`_` 或 `-`
- `language`：可选，未填写时默认为 `auto`
- `enabled`：可选，默认启用；设置为 `false` 后会拒绝该机器人的 Webhook 请求

### 第 4 步：设置 Webhook URL

在浏览器中访问以下 API 端点以配置 Webhook URL：

    https://api.telegram.org/bot<token>/setWebhook?url=<url>&secret_token=<BOT_SECRET_TOKEN>

**替换占位符`<token>`,`<url>`， 和`<BOT_SECRET_TOKEN>`与您的实际值：**

-   `<token>`：您的机器人的令牌来自**@BotFather**.
-   `<url>`：部署工作程序后 Cloudflare 提供的 URL
-   `<BOT_SECRET_TOKEN>`：您在步骤 3 中定义的值，确保其完全匹配

对于 `BOTS_CONFIG` 中的机器人，分别使用其键、Token 和 Secret 设置 Webhook：

```text
https://api.telegram.org/bot<token>/setWebhook?url=<url>/webhook/<bot-key>&secret_token=<bot-secret>
```

例如，`helper_cn` 对应的 Webhook URL 是 `https://<你的Worker地址>/webhook/helper_cn`。未知或已停用的机器人标识会被拒绝，不会回退到默认机器人

`helper_cn` 的完整示例：

```text
https://api.telegram.org/bot123456:替换为机器人Token/setWebhook?url=https://example.workers.dev/webhook/helper_cn&secret_token=替换为WebhookSecret
```

`BOTS_CONFIG` 中每个机器人都需要分别调用一次 `setWebhook`。URL 中的机器人标识，以及该配置项里的 `token` 和 `secret`，必须属于同一个机器人
