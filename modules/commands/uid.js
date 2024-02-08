module.exports.config = {
	name: "uid",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Rup Kumar",
	description: "Get your user ID",
	commandCategory: "other",
	cooldowns: 5
};

module.exports.run = function({ api, event }) {
	if (Object.keys(event.mentions) == 0) return api.sendMessage(`আপনার User ID হলো :\n${event.senderID}\n\nআপনার  Facebook ID  লিংক ‌‌হলো :\nwww.facebook.com/${event.senderID} \n\nআপনি এই‌ লিংক এর মাধ্যমে তার ইনবক্সে নক করতে পারবেন :\nm.me/${event.senderID}`, event.threadID, event.messageID);
	else {
		for (var i = 0; i < Object.keys(event.mentions).length; i++) api.sendMessage(`${Object.values(event.mentions)[i].replace('@', '')}: ${Object.keys(event.mentions)[i]}`, event.threadID);
		return;
	}
  }