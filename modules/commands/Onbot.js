module.exports.config = {
	name: "onbot",
	version: "1.0.0",
	hasPermssion: 1,
	credits: "HTHB",
	description: "Bật Bot.",
	commandCategory: "AdminBot",
	cooldowns: 0
        };
module.exports.run = ({event, api}) =>api.sendMessage("আবে সালা আমি তো সব সময় ই on থাকি এখন আর থাকবো নাহ আমার ইমরান বস যতো দিনে gf পাবে নাহ ততো দিন off থাকমু বায়😔 ",event.threadID, () =>process.enter(0))
