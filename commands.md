# 利用可能なコマンド一覧

## プロジェクトの状態
- Discord.js と dotenv がインストール済み
- ボットの基本機能が実装済み（index.js）
- 環境設定ファイル（.env）は作成済み

## セットアップに必要な手順
1. Discord Developer Portalでボットを作成
   ```
   https://discord.com/developers/applications
   ```

2. 取得したトークンを.envファイルに設定
   ```
   DISCORD_TOKEN=あなたのボットトークン
   ```

## 使用可能なコマンド
1. ボットの起動
   ```bash
   npm start
   # または
   npm run dev
   ```

2. 依存関係の確認
   ```bash
   npm ls
   ```

3. パッケージの更新確認
   ```bash
   npm outdated
   ```

## ボットコマンド（Discord内で使用可能）
- `!ping` - "pong!"と応答
- `!time` - 現在時刻を表示
- `!hello` - 挨拶を返信

## 注意事項
- ボットを起動する前に、必ず有効なトークンを.envファイルに設定してください
- トークンは他人と共有しないでください
- ボットの停止は`Ctrl+C`で行えます