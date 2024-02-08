const fs = require("fs");
module.exports.config = {
	name:"nayem",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "John Lester", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("🧻") || react.includes("🩲") || 
react.includes("mood off") || 
react.includes("কষ্ট") ||
react.includes("😉") ||
react.includes("🫠") ||
react.includes("💩") || 
react.includes("😫") || 
react.includes("😾") ||
react.includes("😿") ||        react.includes("😂") || 
react.includes("🤣") ||
react.includes("😅") ||
react.includes("🥲") || 
react.includes("😕") || 
react.includes("😳") ||
react.includes("😰") ||
react.includes("😥") ||
react.includes("😟") ||
react.includes("😩") || 
react.includes("🥺") ||
react.includes("😣") ||
react.includes("😔") ||
react.includes("🥹")) {
		var msg =   {
				body: "-😒😹 আহারে জানু কতো কষ্ট 😒💦"
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🤖", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }