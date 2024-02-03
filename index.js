const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
  authStrategy: new LocalAuth()
});

client.on('qr', (qr) => {
  qrcode.generate(qr, { small: true });
  console.log('QR Code:', qr);
});

client.on('ready', () => {
  console.log('Cliente conectado!');
});

client.on('message_create', async (message) => {
  console.log("indexOf:", message.body.indexOf("ping"))
  if (message.body.indexOf("ping") !== -1) {
    await message.reply("pong")
  }
  console.log('Mensagem recebida:', message.body);
});

client.initialize();