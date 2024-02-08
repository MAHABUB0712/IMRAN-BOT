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
	if(react.includes("ইমরান") ||
     react.includes("imran") || 
react.includes("রাকিব") || 
react.includes("@Mohamad Rakib") ||
react.includes("imran i love you")) {
		var msg = {
				body:"ও আচ্ছা এই হলো সেই 😹😹 ওর কথা না বললে ই চলে ওই সালায় তো একটা লুচ্চা সবার বউ পটাতে বেস্ত থাকে সালা লুচ্চা😌😌😹😹"
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😩", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

                           }