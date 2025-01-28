const { PermissionFlagsBits } = require('discord.js');

// 必要な権限を設定
const permissions = [
    PermissionFlagsBits.ViewChannel,          // チャンネルの表示
    PermissionFlagsBits.SendMessages,         // メッセージの送信
    PermissionFlagsBits.ReadMessageHistory,   // メッセージ履歴の閲覧
    PermissionFlagsBits.UseExternalEmojis,    // 外部の絵文字を使用
    PermissionFlagsBits.AddReactions,         // リアクションの追加
    PermissionFlagsBits.EmbedLinks            // 埋め込みリンク
];

// パーミッション番号のみを出力
console.log(permissions.reduce((a, b) => a | b, 0n).toString());