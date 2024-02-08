const fs = require("fs");
module.exports.config = {
	name: "jummah mobarok",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Long LTD", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "Goodbye Grandpa",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("আজ শুক্রবার")==0 || (event.body.indexOf("জুম্মা মোবারক")==0 || (event.body.indexOf("jummmah mobarok")==0 || (event.body.indexOf("Jummah Mobarok")==0)))) {
		var msg = {
				body: `꧁𝐌𝐎𝐇𝐀𝐌𝐌𝐀𝐃 𝐈𝐌𝐑𝐀𝐍꧂\n\nশুক্রবার মানেই–
    
    গরিবের হজ্বের দিন 
    
জুমার দিন ফেরেশতাগণ
মসজিদের দরজায় দাঁড়িয়ে থাকেন ও
মুসল্লিদের নেকি লিখতে থাকেন

------------জুম্মা মোবারাক-----------`
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

    }