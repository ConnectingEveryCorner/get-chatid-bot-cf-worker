## README Translation
**Languages:** [English](README.md) | [简体中文](README.zh-CN.md)

# ChatID Helper Bot  
Effortlessly retrieve chat IDs with ease and convenience! This Telegram bot, built on Cloudflare Workers, requires no server deployment.  

**Example Bot**: [ChatIDHelperBot](https://t.me/ChatIDHelperBot)

![screenshot](https://raw.githubusercontent.com/CECEthanClarke/get-chatid-bot-cf-worker/refs/heads/main/other/screenshot.jpg)

---

## Deployment Guide  

### Step 1: Create Your Telegram Bot  
1. Go to **@BotFather** on Telegram and use the `/newbot` command to create your bot.  
2. Follow the prompts to provide the required information.  
3. Once created, **@BotFather** will send you the bot's token. This token is essential for deployment—save it for later use.  

### Step 2: Learn to Deploy Cloudflare Workers  
1. Refer to the [Cloudflare Workers Deployment Guide](https://developers.cloudflare.com/workers/get-started/guide/).  
2. Download the bot's source code.  
3. Run `npm run deploy` locally to deploy your worker.  

### Step 3: Configure Environment Variables
For a single bot, configure the existing `BOT_*` variables. Add `BOTS_CONFIG` only when you need more bots:
- **BOT_TOKEN**
- **BOT_SECRET_TOKEN**
- **BOT_LANGUAGE**
- **BOTS_CONFIG** (optional, for multiple bots)

Refer to the Cloudflare Workers documentation for [adding environment variables](https://developers.cloudflare.com/workers/configuration/environment-variables/#add-environment-variables-via-the-dashboard).  

#### Details:  
1. **BOT_TOKEN**: Copy and paste the token received from **@BotFather** into this variable.  
2. **BOT_SECRET_TOKEN**: This is a value you define yourself. It must meet the following criteria:  
   - 1-256 characters in length.  
   - Allowed characters: `A-Z`, `a-z`, `0-9`, `_`, and `-`.  
   - This ensures the bot's security.  
3. **BOT_LANGUAGE**: Optional language mode. Use `auto` to detect from the user language and name/title characters, or force a supported code such as `zh`, `en`, `ja`, `ko`, `es`, `de`, `fr`, `ru`, `ar`, `fa`, `uk`, `vi`, `tr`, `pt`, `it`, `nl`, `id`, or `ms`.
4. **BOTS_CONFIG**: Optional JSON secret for additional bots. Existing `BOT_*` variables continue to serve the default webhook URL.

Example:

```json
{
  "helper_cn": {
    "token": "123456:replace-with-your-token",
    "secret": "replace-with-your-secret",
    "language": "zh",
    "enabled": true
  },
  "helper_global": {
    "token": "789012:replace-with-your-token",
    "secret": "replace-with-your-secret",
    "language": "auto"
  }
}
```

Store `BOTS_CONFIG` as a Cloudflare Secret because it contains bot tokens. Each object key is the bot key used in its webhook path. Setting `enabled` to `false` disables that bot.

`BOTS_CONFIG` is entered as one complete JSON string. The Worker parses that string automatically. Its fields are:

- Bot key, such as `helper_cn`: required and unique; use letters, numbers, `_`, or `-`. Do not use `/` because the key is part of the webhook URL.
- `token`: required Bot Token from **@BotFather**.
- `secret`: required webhook secret for this bot. Use 1-256 characters containing only `A-Z`, `a-z`, `0-9`, `_`, or `-`.
- `language`: optional; defaults to `auto`.
- `enabled`: optional; defaults to enabled. Set it to `false` to reject this bot's webhook requests.

### Step 4: Set the Webhook URL  
Access the following API endpoint in your browser to configure the webhook URL:  

```
https://api.telegram.org/bot<token>/setWebhook?url=<url>&secret_token=<BOT_SECRET_TOKEN>
```

**Replace the placeholders `<token>`, `<url>`, and `<BOT_SECRET_TOKEN>` with your actual values:**  
- `<token>`: Your bot's token from **@BotFather**.  
- `<url>`: The URL provided by Cloudflare after deploying your worker.  
- `<BOT_SECRET_TOKEN>`: The value you defined in Step 3, ensuring it matches exactly.

For each bot in `BOTS_CONFIG`, use its own key, token, and secret:

```text
https://api.telegram.org/bot<token>/setWebhook?url=<url>/webhook/<bot-key>&secret_token=<bot-secret>
```

For example, the webhook URL for `helper_cn` is `https://<your-worker-url>/webhook/helper_cn`. Unknown or disabled bot keys are rejected and never fall back to the default bot.

A complete example for `helper_cn`:

```text
https://api.telegram.org/bot123456:replace-with-your-token/setWebhook?url=https://example.workers.dev/webhook/helper_cn&secret_token=replace-with-your-secret
```

Repeat `setWebhook` for every entry in `BOTS_CONFIG`. The bot key in the URL and that entry's `token` and `secret` must belong to the same bot.
