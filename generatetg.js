const fs = require('fs');

const botToken = process.env.BOT_TOKEN;
const chatId = process.env.CHAT_ID;

const alluretg = {
    "app": {
      "bot": {
        "token": botToken,
        "chat": chatId,
        "replyTo": ""
      },
      "base": {
        "lang": "en",
        "messenger": "telegram",
        "allureFolder": "./allure-reports/",
        "allureLinkPath": "",
        "chart": true,
        "chartName": "",
        "project": ""
      },
      "mail": {
        "host": "",
        "port": "",
        "username": "",
        "password": "",
        "enableSSL": false,
        "from": "",
        "recipient": ""
      },
      "mattermost": {
        "url": ""
      },
      "proxy": {
        "host": "",
        "port": 0,
        "username": "",
        "password": ""
      },
      "skype": {
        "appId": "",
        "appSecret": "",
        "serviceUrl": "",
        "conversationId": "",
        "botId": "",
        "botName": ""
      }
    }
  };

const jsonString = JSON.stringify(alluretg, null, 2);

const filePath = './allure-notifications.json';

fs.writeFileSync(filePath, jsonString, 'utf-8');
