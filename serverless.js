const config = {
  "service": "telegram-reminder",
  "frameworkVersion": "2",
  "provider":
  {
    "name": "aws",
    "runtime": "nodejs12.x",
    "lambdaHashingVersion": 20201221,
    "region": "eu-west-3"
  },
  "functions":
  {
    "sendReminder":
    {
      "handler": "handler.sendReminder",
      "events": [{ "schedule": "cron(0 20 * * ? *)" }],
    },
  },
}

config.provider["environment"] = {}
config.provider["environment"]["BOT_TOKEN"] = process.env.BOT_TOKEN
config.provider["environment"]["DEST_ID"] = process.env.DEST_ID

console.log(config)

module.exports = config