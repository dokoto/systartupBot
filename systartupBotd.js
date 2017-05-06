#!/usr/bin/env node

'use strict';

const TelegramBot = require('node-telegram-bot');
const os = require('os');


const TELEGRAM_TOKEN = '327210716:AAEna-nxbWygqA6HgH6uLWr1YRjBXHB00I4';
const DOKOTO_TELEGRAM_ID = '202961985';

let telegramBot = new TelegramBot({
    token: TELEGRAM_TOKEN
}).start();

if (process.argv.indexOf('--daemon') !== -1) {
    telegramBot.on('message', message => {
        console.log(`${ JSON.stringify(message) }`);
    });
    console.log('Sercivio esperando mensaje...');
} else {
    telegramBot.sendMessage({
        chat_id: DOKOTO_TELEGRAM_ID,
        text: `El servidor ${ os.hostname() } esta arriba y listo para trabajar`
    }, () => {
        console.log('Mensaje enviado');
        process.exit(-1);
    });
}
