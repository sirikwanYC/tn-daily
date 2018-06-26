var Botkit = require('botkit');

var controller = Botkit.slackbot({
    clientId: '357985038164.387457341573',
    clientSecret: '6a494793d71772fdd8e94402abba999c',
    scopes: ['bot']
})

var bot = controller.spawn({
  token: 'xoxb-388528669239-388106485861-C7HEMr8ckbiY7a0TTrBHRJnH'
});

bot.startRTM(function(err,bot,payload) {
});

// send webhooks
bot.configureIncomingWebhook({url: 'https://tn-daily.herokuapp.com/'});
bot.sendWebhook({
  text: 'Hey!',
  channel: '#test',
},function(err,res) {
});