"use strict";

const telegram = require("./telegram");

async function webhookCenter(event) {
  console.log("🔥", JSON.stringify(event, null, 2));
  await telegram(JSON.stringify(event, null, 2));
  return {
    statusCode: 200,
    body: "OK",
  };
}

module.exports = { webhookCenter };
