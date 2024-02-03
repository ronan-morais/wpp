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

client.on('message', (message) => {
  console.log('Mensagem recebida:', message);
});

client.initialize();