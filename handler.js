const line = require('@line/bot-sdk');
const client = new line.Client({ channelAccessToken: process.env.ACCESSTOKEN });
module.exports.bot = (event, context) => {
  const events = JSON.parse(event.body).events;
  events.forEach(async function (event) {
    if (event.message.text === 'おはよう') {
      client.replyMessage(event.replyToken, { 'type': 'text', 'text': 'おはよう！' })
        .then((response) => { context.succeed({ statusCode: 200, headers: { 'X-Line-Status': 'OK' }, body: '{"result":"completed"}' }) })
        .catch((err) => console.log(`${JSON.stringify(message)}\n\n\n${err}`));
    }
  });
};