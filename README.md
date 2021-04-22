# line-bot-demo

## デプロイ方法

※事前にAWSアカウントを作成し、コマンドラインで使用できるクレデンシャルを発行している必要があります。

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