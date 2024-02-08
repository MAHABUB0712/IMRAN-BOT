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
	if(react.includes("i miss you") ||
     react.includes("I miss u") || 
react.includes("I miss you") || 
react.includes("miss you") ||
react.includes("miss u")) {
		var msg = {
				body:"𝐈 𝐦𝐢𝐬𝐬 𝐲𝐨𝐮 𝐭𝐨 𝐛𝐚𝐛𝐲 তুমি আমাকে এতো মিছ করো জানু🥺"
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😔", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

                           }