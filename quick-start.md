# Discord Bot クイックスタートガイド

## 1. Discord Developer Portal での設定（所要時間：約3分）

1. ブラウザで開く：
```
https://discord.com/developers/applications
```

2. 右上の「New Application」ボタンをクリック
   - 名前を入力（例：`TestBot`）
   - 「Create」をクリック

3. 左メニューの「Bot」をクリック
   - 「Add Bot」→「Yes, do it!」をクリック
   - 「Message Content Intent」をONにする
   - 「Save Changes」をクリック

4. トークンの取得
   - 「Reset Token」→「Yes, do it!」をクリック
   - 表示されたトークンをコピー

## 2. トークンの設定（所要時間：約1分）

1. プロジェクトフォルダの`.env`ファイルを開く
2. 以下のように設定：
```
DISCORD_TOKEN=コピーしたトークンを貼り付け
```

## 3. ボットの招待（所要時間：約2分）

1. Developer Portalの「OAuth2」→「URL Generator」を開く
2. 以下にチェック：
   - Scopes: `bot`
   - Bot Permissions:
     - Read Messages/View Channels
     - Send Messages
     - Read Message History
3. 生成されたURLをブラウザで開く
4. サーバーを選択して招待

## 4. ボットの起動（所要時間：約1分）

```bash
npm start
```

## 5. 動作確認（所要時間：約1分）

Discordサーバーで以下のコマンドをテスト：
```
!ping
!time
!hello
```

## トラブルシューティング

エラー：`Error [TokenInvalid]: An invalid token was provided`
→ .envファイルのトークンが正しく設定されているか確認

エラー：`DiscordAPIError: Missing Access`
→ ボットが正しく招待されているか確認