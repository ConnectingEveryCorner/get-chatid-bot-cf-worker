import { getLocale, t } from './locales';
import { sendMessage } from './telegram';

const MULTI_BOT_PATH_PREFIX = '/webhook/';

function parseBotsConfig(value) {
	if (!value) {
		return {};
	}

	const config = typeof value === 'string' ? JSON.parse(value) : value;
	if (!config || Array.isArray(config) || typeof config !== 'object') {
		throw new Error('BOTS_CONFIG must be a JSON object');
	}
	return config;
}

function getBotSettings(config, key) {
	if (!config || typeof config !== 'object' || Array.isArray(config)) {
		return undefined;
	}

	const token = config.token || config.BOT_TOKEN;
	const secret = config.secret || config.BOT_SECRET_TOKEN;
	const language = config.language || config.BOT_LANGUAGE || 'auto';
	if (!token || !secret || config.enabled === false) {
		return undefined;
	}

	return {
		key,
		token,
		secret,
		BOT_LANGUAGE: language,
	};
}

function getBotForRequest(request, env) {
	const pathname = new URL(request.url).pathname;
	if (pathname.startsWith(MULTI_BOT_PATH_PREFIX)) {
		const key = decodeURIComponent(pathname.slice(MULTI_BOT_PATH_PREFIX.length));
		if (!key || key.includes('/')) {
			return undefined;
		}
		return getBotSettings(parseBotsConfig(env.BOTS_CONFIG)[key], key);
	}

	return getBotSettings({
		token: env.BOT_TOKEN,
		secret: env.BOT_SECRET_TOKEN,
		language: env.BOT_LANGUAGE,
	}, 'default');
}

function getSendText(msg, lang) {
	let send_text = '';
	if (msg) {
		if (msg.message_id) {
			send_text += `${t(lang, 'messageId')}: <code>${msg.message_id}</code>\n\n`;
		}
		if (msg.message_thread_id) {
			send_text += `${t(lang, 'messageThreadId')}: <code>${msg.message_thread_id}</code>\n\n`;
		}
		if (msg.from) {
			send_text += `
🟢 <strong>${t(lang, 'from')}</strong>
	- ${t(lang, 'title')}: <code>${msg.from.first_name || ''}${msg.from.last_name || ''}</code>
	- ${t(lang, 'chatId')}: <code>${msg.from.id}</code>
	- ${t(lang, 'username')}: ${msg.from.username ? '@' + msg.from.username: ''}\n\n`;
		}
		if (msg.chat) {
			send_text += `
🔵 <strong>${t(lang, 'chat')}</strong>
	- ${t(lang, 'title')}: <code>${msg.chat.first_name || ''}${msg.chat.last_name || ''}${msg.chat.title || ''}</code>
	- ${t(lang, 'chatId')}: <code>${msg.chat.id}</code>  
	- ${t(lang, 'username')}: ${msg.chat.username ? '@' + msg.chat.username: ''}\n\n`;
		}
		if (msg.reply_to_message) {
			if (msg.reply_to_message.message_thread_id) {
				send_text += `${t(lang, 'replyToMessageThreadId')}: <code>${msg.reply_to_message.message_thread_id}</code>\n\n`;
			}
			if (msg.reply_to_message.from) {
				send_text += `
🟢 <strong>${t(lang, 'replyToMessageFrom')}</strong>
	- ${t(lang, 'title')}: <code>${msg.reply_to_message.from.first_name || ''}${msg.reply_to_message.from.last_name || ''}</code>
	- ${t(lang, 'chatId')}: <code>${msg.reply_to_message.from.id}</code>
	- ${t(lang, 'username')}: ${msg.reply_to_message.from.username ? '@' + msg.reply_to_message.from.username: ''}\n\n`;
			}
			if (msg.reply_to_message.chat) {
				send_text += `
🔵 <strong>${t(lang, 'replyToMessageChat')}</strong>
	- ${t(lang, 'title')}: <code>${msg.reply_to_message.chat.first_name || ''}${msg.reply_to_message.chat.last_name || ''}${msg.reply_to_message.chat.title || ''}</code>
	- ${t(lang, 'chatId')}: <code>${msg.reply_to_message.chat.id}</code>  
	- ${t(lang, 'username')}: ${msg.reply_to_message.chat.username ? '@' + msg.reply_to_message.chat.username: ''}\n\n`;
			}
		}
		if (msg.forward_from) {
			send_text += `
🟢 <strong>${t(lang, 'forwardFrom')}</strong>
	- ${t(lang, 'title')}: <code>${msg.forward_from.first_name || ''}${msg.forward_from.last_name || ''}</code>
	- ${t(lang, 'chatId')}: <code>${msg.forward_from.id}</code>
	- ${t(lang, 'username')}: ${msg.forward_from.username ? '@' + msg.forward_from.username: ''}\n\n`;
		}
		if (msg.forward_from_chat) {
			send_text += `
🔵 <strong>${t(lang, 'forwardFromChat')}</strong>
	- ${t(lang, 'title')}: <code>${msg.forward_from_chat.first_name || ''}${msg.forward_from_chat.last_name || ''}${msg.forward_from_chat.title || ''}</code>
	- ${t(lang, 'chatId')}: <code>${msg.forward_from_chat.id}</code>  
	- ${t(lang, 'username')}: ${msg.forward_from_chat.username ? '@' + msg.forward_from_chat.username: ''}\n\n`;
		}
	}
	return send_text;
}

async function processUpdate(bot, update) {
	try {
		if (update) {
			const msg = update.message;
			if (msg) {
				const type = msg.chat.type;
				const text = msg.text || msg.caption;
				const lang = getLocale(bot, msg);
				if (text) {
					if (text.startsWith('/start')) {
						const send_text = getSendText(msg, lang);
						await sendMessage(bot.token, {
							chat_id: msg.chat.id, 
							text: send_text, 
							parse_mode: 'HTML', 
							reply_to_message_id: msg.message_id,
							reply_markup: type === 'private' ? JSON.stringify({
								keyboard: [
									[
										{
											text: t(lang, 'getBotChatId'),
											request_users: {
												request_id: msg.message_id + 1,
												user_is_bot: true
											}
										},
										{
											text: t(lang, 'getUserChatId'),
											request_users: {
												request_id: msg.message_id + 2,
												user_is_bot: false
											}
										}
									],
									[
										{
											text: t(lang, 'getChannelChatId'),
											request_chat: {
												request_id: msg.message_id + 3,
												chat_is_channel: true
											}
										},
										{
											text: t(lang, 'getGroupChatId'),
											request_chat: {
												request_id: msg.message_id + 4,
												chat_is_channel: false
											}
										}
									]
								],
								is_persistent: false,
								resize_keyboard: true,
								one_time_keyboard: true
							}) : undefined
						});
					}
					else if (text.startsWith('/help')) {
						await sendMessage(bot.token, {
							chat_id: msg.chat.id, 
							text: t(lang, 'help'), 
							parse_mode: 'HTML',
							reply_to_message_id: msg.message_id,
						});
					}
					else {
						if (type === 'private') {
							const send_text = getSendText(msg, lang);
							await sendMessage(bot.token, {
								chat_id: msg.chat.id, 
								text: send_text, 
								parse_mode: 'HTML',
								reply_to_message_id: msg.message_id,
							});
						}
					}
				} else if (msg.user_shared) {
					await sendMessage(bot.token, {
						chat_id: msg.chat.id, 
						text: `${t(lang, 'chatId')}: <code>${msg.user_shared.user_id}</code>`, 
						parse_mode: 'HTML'
					});
				} else if (msg.chat_shared) {
					await sendMessage(bot.token, {
						chat_id: msg.chat.id, 
						text: `${t(lang, 'chatId')}: <code>${msg.chat_shared.chat_id}</code>`, 
						parse_mode: 'HTML'
					});
				}
			}
		}
		return true;
	} catch(e) {
		throw e;
	}
}

export default {
	async fetch(request, env, ctx) {
		try {
			const bot = getBotForRequest(request, env);
			if (!bot) {
				return Response.json({ ok: false, error: true }, { status: 404 });
			}
			const secret_token = request.headers.get('x-telegram-bot-api-secret-token');
			// console.log(secret_token);
			if (secret_token && secret_token === bot.secret) {
				const update = await request.json();
				console.log(update);			
				const result = await processUpdate(bot, update).catch(e => console.log(e));
				if (result) {
					return Response.json({ ok: true, error: false });
				} else {
					return Response.json({ ok: false, error: true });
				}
			} else {
				return Response.json({ ok: false, error: true });
			}
		} catch (err) {
			console.log(err);
			return Response.json({ ok: false, error: true });
		}
	},
};
