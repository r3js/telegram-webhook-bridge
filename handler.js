'use strict';

const telegram = require("./telegram")

async function sendReminder(event) {
  await telegram()
  return {
    statusCode: 200,
    body: ""
  };
};


module.exports = { sendReminder }
