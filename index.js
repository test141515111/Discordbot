require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async message => {
    // ボット自身のメッセージは無視
    if (message.author.bot) return;

    // コマンドの処理
    if (message.content.startsWith('!')) {
        const command = message.content.toLowerCase();

        switch (command) {
            case '!ping':
                await message.reply('pong!');
                break;
            
            case '!time':
                const now = new Date();
                const timeString = now.toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' });
                await message.reply(`現在の時刻は ${timeString} です。`);
                break;
            
            case '!hello':
                await message.reply('こんにちは！');
                break;
        }
    }
});

// ボットのログイン
client.login(process.env.DISCORD_TOKEN)
    .catch(error => {
        console.error('ボットの起動に失敗しました:', error);
    });