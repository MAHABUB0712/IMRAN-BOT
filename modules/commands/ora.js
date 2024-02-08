const fs = require("fs");
module.exports.config = {
	name: "hasi8",
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
	if(react.includes("😂") ||
     react.includes("😆") || 
react.includes("😁") || 
react.includes("😆") ||
react.includes("🤣") ||
react.includes("😁") ||
react.includes("😛") ||
react.includes("😹") ||
react.includes("🤓") ||
react.includes("😂") ||
react.includes("😹") ||
react.includes("😛")) {
		var msg = {
				body: "-ওরে কি সুন্দর হাসিরে পাগলের মতো_!!🌚!!"
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🔨", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }