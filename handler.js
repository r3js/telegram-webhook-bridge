"use strict";

const telegram = require("./telegram");

async function webhookCenter(event) {
  console.log("🔥", JSON.stringify(event, null, 2));
  await telegram(JSON.stringify(event, null, 2));
  if (event.body) {
    let body = event.body;
    try {
      body = JSON.parse(event.body);
    } catch (err) {
      console.log("not parsed");
    }

    await telegram(JSON.stringify(body, null, 2));
  }

  let response = "OK";
  if (
    event.queryStringParameters &&
    event.queryStringParameters["hub.challenge"]
  ) {
    response = event.queryStringParameters["hub.challenge"];
  }

  return {
    statusCode: 200,
    body: response,
  };
}

module.exports = { webhookCenter };
