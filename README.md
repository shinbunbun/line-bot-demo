# line-bot-demo
[serverless framework](https://www.serverless.com/)を使ってAWSLambdaでLINEBotを構築するサンプルリポジトリです。

## 事前準備
AWSアカウントを作成し、コマンドラインで使用できるクレデンシャルを発行する

## LINEBotを作成する
[こちら](https://developers.line.biz/ja/)でBotアカウントを作成します。
チャンネルアクセストークンを取得しておきます。
挨拶メッセージや自動応答をオフにしておきます。

## デプロイ方法

- 検証環境
  - macOS Catalina 10.15.7
  - Node.js v15.8.0
  - npm v7.5.2

パッケージインストール

```terminal
npm i
```

クレデンシャルを登録する

```terminal
npx sls config credentials --provider aws --key XXXX --secret XXXX
```

環境変数のファイルを作成

```terminal
touch .env
```

.envに以下の行を追加
※XXXXにはLINE Developersから取得したアクセストークンが入ります

```terminal
ACCESSTOKEN=XXXX
```

awsへデプロイ

```terminal
npx sls deploy 
```

## 動作確認をする
デプロイした後、ターミナルに表示されたURLをLINEBotのWebhookURLに登録します。
LINE友達になって、「おはよう」と送信した時に返事があれば成功です。