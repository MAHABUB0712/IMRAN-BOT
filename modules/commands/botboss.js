const fs = require("fs");
module.exports.config = {
	name: "h111",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "Rafin Chowdhury", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("আজকে কেউ নাই বলে") ||
     react.includes("আজকে কেউ নাই দেইক্কা ") || 
react.includes("ajka kaw nai bolay") || 
react.includes("ajka akta bf nai bolay") ||
react.includes("ajka akta nai") ||
react.includes("আজকে কেউ নাই দেইক্কা ") ||
react.includes("আজকে একজন নেই বলে") ||
react.includes("ajka ak jon nai bolay") ||
react.includes("আমার জামাই লাগবে") ||
react.includes("aaj kew nai bole") ||
react.includes("জামাই চাই") ||
react.includes("Single")) {
		var msg = {
				body: "- আরে আমার জান কলিজা তুমি এতো চিন্তা করো কেন তোমার জন্য আমার ইমরান বস আছে I Love You বলো 😘 ইমরান বস এর ইনবক্সে চলে যাও, এই নাও তার আইডি Facebook : https://www.facebook.com/Mohammad.Rakib240"
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😭", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

    }