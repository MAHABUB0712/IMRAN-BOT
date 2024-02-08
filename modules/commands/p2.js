const fs = require("fs");
module.exports.config = {
	name: "npxsfuck",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Simanto", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "😱",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("💔")==0 || event.body.indexOf("Uff")==0 || event.body.indexOf("গরম")==0 || event.body.indexOf("gorom")==0) {
		var msg = {
				body: "- আমার বস Imran Ahmed আপনার জন্য এই গানটি রেখেছে😊",
				attachment: fs.createReadStream(__dirname + `/noprefix/gorom.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😽", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }