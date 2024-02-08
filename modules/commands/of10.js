const fs = require("fs");
module.exports.config = {
	name: "tom5",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "Junior Simanto", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("i love you") ||
     react.includes("i love u") || 
react.includes("love you") || 
react.includes("love u") ||
react.includes("nayem i love you")) {
		var msg = {
				body:"𝐈 𝐥𝐨𝐯𝐞 𝐲𝐨𝐮 𝐭𝐨𝐨 🥺! মনে লাগে ঢেউ ভালোবাসে না কেউ....💦💔"
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😔", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

                           }