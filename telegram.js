const { Telegraf } = require('telegraf')

const bot = new Telegraf(process.env.BOT_TOKEN, {
  telegram: { webhookReply: true },
});

module.exports = (message) => {
  return bot.telegram.sendMessage(parseInt(process.env.DEST_ID), message)
}

