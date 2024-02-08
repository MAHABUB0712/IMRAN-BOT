const fs = require("fs");
module.exports.config = {
	name: "Surjo",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "surjo",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Imran")==0 || event.body.indexOf("Rakib")==0 || event.body.indexOf("ইমরান")==0 || event.body.indexOf("রাকিব")==0) {
		var msg = {
				body: "ইৃঁমৃঁরাৃঁনৃঁ এৃঁখৃঁনৃঁ খু্ঁব্ঁ বি্ঁজি্ঁ 🥰❤️🥀",
				attachment: fs.createReadStream(__dirname + `/noprefix/imran1.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥰", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

      }