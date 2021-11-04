const { Telegraf } = require('telegraf')

const bot = new Telegraf(process.env.BOT_TOKEN, {
  telegram: { webhookReply: true },
});

const message = "What did you do today?"

module.exports = () => {
  return bot.telegram.sendMessage(parseInt(process.env.DEST_ID), message)
}

