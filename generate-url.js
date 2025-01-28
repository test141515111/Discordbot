const { PermissionFlagsBits } = require('discord.js');

// 最小限の権限のみを設定
const permissions = [
    PermissionFlagsBits.ViewChannel,        // 1024
    PermissionFlagsBits.SendMessages,       // 2048
    PermissionFlagsBits.ReadMessageHistory  // 65536
];

const permissionNumber = permissions.reduce((a, b) => a | b, 0n);
console.log(`https://discord.com/api/oauth2/authorize?client_id=1333795221401632858&permissions=68608&scope=bot`);