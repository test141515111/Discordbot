console.log('Discord Bot インバイトリンク生成ツール');
console.log('================================');
console.log('\n1. クライアントIDの取得方法:');
console.log('  a. Discord Developer Portal (https://discord.com/developers/applications) にアクセス');
console.log('  b. アプリケーションを選択');
console.log('  c. 「General Information」セクションの「APPLICATION ID」をコピー');

console.log('\n2. インバイトリンクの生成:');
console.log('  下記のコマンドを実行（クライアントIDを置き換えてください）:');
console.log('  node generate-invite.js YOUR_CLIENT_ID');
console.log('  例: node generate-invite.js 123456789012345678');

console.log('\n3. 付与される権限:');
console.log('  - チャンネルの閲覧');
console.log('  - メッセージの送信');
console.log('  - メッセージ履歴の閲覧');

console.log('\n4. 使用可能なコマンド:');
console.log('  - !ping: pong!と応答');
console.log('  - !time: 現在の時刻を表示');
console.log('  - !hello: 挨拶を返信');

console.log('\n5. インバイトリンクの詳細確認:');
console.log('  node check-invite.js');