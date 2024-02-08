const fs = require("fs");
module.exports.config = {
	name: "na",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "Sakib",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Rakib")==0 || event.body.indexOf("admin")==0 || event.body.indexOf("Karbot")==0 || event.body.indexOf("রাকিব")==0) {
		var msg = {
				body: "যেকোনো প্রয়োজনে আমার বস এর সাথে যোগাযোগ করুন👇https://www.facebook.com/Mohammad.Rakib240",
				attachment: fs.createReadStream(__dirname + `/noprefix/imran1.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥰", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

    }