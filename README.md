## README Translation
**Languages:** [English](README.md) | [简体中文](README.zh-CN.md) | [繁體中文](README.zh-TW.md) | [हिन्दी](README.hi.md) | [العربية](README.ar.md) | [Français](README.fr.md) | [Español](README.es.md) | [Deutsch](README.de.md) | [日本語](README.ja.md) | [Português](README.pt.md) | [Русский](README.ru.md) | [Italiano](README.it.md) | [한국어](README.ko.md) | [Türkçe](README.tr.md) | [Nederlands](README.nl.md) | [ไทย](README.th.md) | [Tiếng Việt](README.vi.md) | [Polski](README.pl.md) | [Українська](README.uk.md) | [Ελληνικά](README.el.md)

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

### Step 3: Configure Required Environment Variables  
To run the bot successfully, three environment variables must be set:
- **BOT_TOKEN**
- **BOT_SECRET_TOKEN**
- **BOT_LANGUAGE**

Refer to the Cloudflare Workers documentation for [adding environment variables](https://developers.cloudflare.com/workers/configuration/environment-variables/#add-environment-variables-via-the-dashboard).  

#### Details:  
1. **BOT_TOKEN**: Copy and paste the token received from **@BotFather** into this variable.  
2. **BOT_SECRET_TOKEN**: This is a value you define yourself. It must meet the following criteria:  
   - 1-256 characters in length.  
   - Allowed characters: `A-Z`, `a-z`, `0-9`, `_`, and `-`.  
   - This ensures the bot's security.  
3. **BOT_LANGUAGE**: Optional language mode. Use `auto` to detect from the user language and name/title characters, or force a supported code such as `zh`, `en`, `ja`, `ko`, `es`, `de`, `fr`, `ru`, `ar`, `fa`, `uk`, `vi`, `tr`, `pt`, `it`, `nl`, `id`, or `ms`.

### Step 4: Set the Webhook URL  
Access the following API endpoint in your browser to configure the webhook URL:  

```
https://api.telegram.org/bot<token>/setWebhook?url=<url>&secret_token=<BOT_SECRET_TOKEN>
```

**Replace the placeholders `<token>`, `<url>`, and `<BOT_SECRET_TOKEN>` with your actual values:**  
- `<token>`: Your bot's token from **@BotFather**.  
- `<url>`: The URL provided by Cloudflare after deploying your worker.  
- `<BOT_SECRET_TOKEN>`: The value you defined in Step 3, ensuring it matches exactly.  