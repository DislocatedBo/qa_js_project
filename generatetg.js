const fs = require('fs');

const alluretg = {
    "app": {
      "bot": {
        "token": process.env.TELEGRAM_TOKEN,
        "chat": process.env.TELEGRAM_CHANNEL,
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
