module.exports.config = {
  name: "sms",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Mr-Imran",
  description: "spam",
  commandCategory: "Too",
  usages: "/sms number text",
  cooldowns: 15,
  dependencies: {"axios" : ""}
};

module.exports.run = function ({ api, event, Users, args }) {
  const permission = ["100075122837809"];
   if (!permission.includes(event.senderID))
   return api.sendMessage("Only Bot Admin Can Use this command", event.threadID, event.messageID);
  if (args.length !== 2) {
    api.sendMessage(`Invalid number of arguments. Usage: ${global.config.PREFIX}spam [msg] [amount]`, event.threadID);
    return;
  }
  var { threadID, messageID } = event;
  var k = function (k) { api.sendMessage(k, threadID)};

  const msg = args[0];
  const count = args[1];

  //*vonglap

for (i = 0; i < `${count}`; i++) {
 k(`${msg}`);
}

}