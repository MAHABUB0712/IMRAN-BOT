const fs = require("fs");
module.exports.config = {
	name: "😪",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "nayem",
	usages: "😪",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("🥺")==0 || 
event.body.indexOf("🥺")==0 ||  
event.body.indexOf("😿")==0 || event.body.indexOf("😭")==0 || event.body.indexOf("😥")==0) {
		var msg = {
				body: "কাঁন্নাঁ কিঁরেঁ লাঁভঁ নাঁইঁ\nএঁঁইঁ নিঁষ্ঠুঁরঁ দুঁনিঁয়াঁ তোঁমাঁরঁ কাঁন্নাঁরঁ দাঁমঁ দিঁবেঁ নাঁ😥😅",
				attachment: fs.createReadStream(__dirname + `/nayan/p.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😭", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }