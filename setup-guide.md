# Discord Bot セットアップ詳細ガイド

## 1. Discord Developer Portal での設定

### 1.1 アプリケーションの作成
1. ブラウザで [Discord Developer Portal](https://discord.com/developers/applications) を開く
2. 右上の「New Application」ボタンをクリック
3. アプリケーション名を入力（例：「TestBot」）
4. 「Create」をクリック

### 1.2 Botの作成
1. 左側メニューから「Bot」を選択
2. 「Add Bot」ボタンをクリック
3. 確認ダイアログが表示されたら「Yes, do it!」をクリック

### 1.3 Botの権限設定
1. 「Bot」ページで以下の設定を行う：
   - 「Message Content Intent」をONにする
   - 「Presence Intent」をONにする
   - 「Server Members Intent」をONにする
2. 「Save Changes」をクリック

### 1.4 トークンの取得
1. 「Bot」ページの「Token」セクションで「Reset Token」をクリック
2. 確認ダイアログが表示されたら「Yes, do it!」をクリック
3. 表示されたトークンを安全な場所にコピー

### 1.5 ボットの招待URL生成
1. 左側メニューから「OAuth2」→「URL Generator」を選択
2. 「Scopes」で以下にチェック：
   - `bot`
   - `applications.commands`
3. 「Bot Permissions」で以下にチェック：
   - `Read Messages/View Channels`
   - `Send Messages`
   - `Read Message History`
4. 下部に生成されたURLをコピー

## 2. ボットのサーバーへの招待

1. 1.5でコピーしたURLをブラウザで開く
2. 招待したいDiscordサーバーを選択
3. 「認証」をクリック
4. 権限を確認して「はい」をクリック

## 3. 環境設定

### 3.1 .envファイルの設定
1. プロジェクトフォルダ内の`.env`ファイルを開く
2. 以下の形式でトークンを設定：
```
DISCORD_TOKEN=あなたのボットトークン
```
※ トークンは1.4でコピーしたものを使用

## 4. ボットの起動と操作

### 4.1 ボットの起動
1. ターミナルを開く
2. プロジェクトフォルダに移動
3. 以下のコマンドを実行：
```bash
node index.js
```
4. 「Logged in as (ボット名)!」と表示されれば成功

### 4.2 使用可能なコマンド
Discordサーバー内で以下のコマンドが使用可能：

- `!ping`
  - 使用方法：チャットで`!ping`と入力
  - 応答：「pong!」と返信

- `!time`
  - 使用方法：チャットで`!time`と入力
  - 応答：現在の時刻を日本時間で返信

- `!hello`
  - 使用方法：チャットで`!hello`と入力
  - 応答：「こんにちは！」と返信

### 4.3 ボットの停止
1. ターミナルで`Ctrl + C`を押す
2. ボットが停止する

## 5. トラブルシューティング

### 5.1 ボットが応答しない場合
- トークンが正しく設定されているか確認
- ボットに必要な権限が付与されているか確認
- Intentが正しく設定されているか確認

### 5.2 トークンエラーが出る場合
- .envファイルが正しい場所にあるか確認
- トークンが正しくコピーされているか確認
- スペースや改行が入っていないか確認

### 5.3 権限エラーが出る場合
- Discord Developer Portalでボットの権限設定を確認
- サーバーでボットの役割（Role）権限を確認

## 6. セキュリティ注意事項

- ボットトークンは絶対に公開しない
- .envファイルをGitにコミットしない
- トークンが漏洩した場合は即座にリセット