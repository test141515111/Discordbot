# Discord Bot

シンプルなDiscordボットのテスト実装です。

## 機能

- `!ping` - 動作確認用のコマンド
- `!time` - 現在の日本時間を表示
- `!hello` - 挨拶を返信

## ローカルでの実行方法

1. 依存パッケージのインストール
```bash
npm install
```

2. 環境変数の設定
`.env`ファイルを作成し、以下の内容を設定：
```
DISCORD_TOKEN=your_discord_bot_token_here
```

3. ボットの起動
```bash
npm start
```

## Herokuへのデプロイ手順

1. Herokuアカウントの作成
   - [Heroku](https://signup.heroku.com/) でアカウントを作成

2. Heroku CLIのインストール
```bash
brew install heroku/brew/heroku  # macOS
```

3. Herokuにログイン
```bash
heroku login
```

4. Herokuアプリの作成
```bash
heroku create your-app-name
```

5. 環境変数の設定
```bash
heroku config:set DISCORD_TOKEN=your_discord_bot_token
```

6. デプロイ
```bash
git init
git add .
git commit -m "Initial commit"
git push heroku main
```

7. ワーカーの起動
```bash
heroku ps:scale worker=1
```

8. ログの確認
```bash
heroku logs --tail
```

## 注意事項

- `.env`ファイルはGitにコミットしないでください
- Herokuの無料プランは終了しているため、有料プランの使用が必要です
- ボットトークンは漏洩しないように注意してください

## 必要な権限

現在のボットには以下の権限が設定されています：
- ViewChannel (1024) - チャンネルの閲覧
- SendMessages (2048) - メッセージの送信
- ReadMessageHistory (65536) - メッセージ履歴の閲覧

合計パーミッション値：68608