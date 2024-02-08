const fs = require('fs-extra');
const pathFile = __dirname + '/cache/autoseen.txt';
if (!fs.existsSync(pathFile))
  fs.writeFileSync(pathFile, 'false');

module.exports.config = {
  name: "autoseen",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "NTKhang",
  description: "Bật/tắt tự động seen khi có tin nhắn mới",
  commandCategory: "Hệ thống support-bot",
  usages: "on/off",
  cooldowns: 5
};

module.exports.handleEvent = async ({ api, event, args }) => {
  const isEnable = fs.readFileSync(pathFile, 'utf-8');
  if (isEnable == 'true')
    api.markAsReadAll(() => {});
};

module.exports. run = async ({ api, event, args }) => {
  try {
  const fs = require('fs-extra');
const pathFile = __dirname + '/cache/autoseen.txt';
if (!fs.existsSync(pathFile))
  fs.writeFileSync(pathFile, 'false');


module.exports.config = {
  name: "autoseen",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "NTKhang",// mod mr imran 
  description: "Bật/tắt tự động seen khi có tin nhắn mới",
  commandCategory: "ADMIN",
  usages: "on/off",
  cooldowns: 5
};

module.exports.handleEvent = async ({ api, event, args }) => {
  const isEnable = fs.readFileSync(pathFile, 'utf-8');
  if (isEnable == 'true')
    api.markAsReadAll(() => {});
};
module.exports. run = async ({ api, event, args }) => {
   const moment = require("moment-timezone");
 var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
  const permission = ["100075122837809",""];
  if (!permission.includes(event.senderID)) return api.sendMessage("𝗔𝗻𝗶𝗺𝗮𝗹𝘀 𝘁𝗵𝗮𝘁 𝗮𝗹𝘀𝗼 𝗰𝗹𝗮𝗶𝗺 𝘁𝗼 𝘂𝘀𝗲", event.threadID, event.messageID);
  const hieusimprin = process.uptime();
  var hieu = Math.floor(hieusimprin / (60 * 60));
  var simp = Math.floor((hieusimprin % (60 * 60)) / 60);
  var rin = Math.floor(hieusimprin % 60);
  try {
  if (args[0] == 'on') {
    fs.writeFileSync(pathFile, 'true');
  const res = await
axios.get(`https://scrapi.apibot.repl.co/thinh`);
var thinh = res.data.url;
  let ext = res.data.data.substring(res.data.url.lastIndexOf(".") + 1);
    return api.sendMessage({body:`=====『 𝗔𝗨𝗧𝗢𝗦𝗘𝗘𝗡 』=====\n━━━━━━━━━━━━━━━━━━━\n[✅] → 𝗔𝘂𝘁𝗼-𝘀𝗲𝗲𝗻 𝗺𝗼𝗱𝗲 𝗲𝗻𝗮𝗯𝗹𝗲𝗱 𝘄𝗵𝗲𝗻 𝗻𝗲𝘄 𝗺𝗲𝘀𝘀𝗮𝗴𝗲𝘀 𝗰𝗼𝗺𝗲 𝗶𝗻\n[💕] → 𝗞𝗲𝗲𝗻: ${thinh}\n[⌛] → 𝗢𝗻𝗹𝗶𝗻𝗲 𝗕𝗼𝘁 𝗧𝗶𝗺𝗲: ${hieu} 𝗛𝗼𝘂𝗿 ${simp} 𝗠𝗶𝗻𝘂𝘁𝗲 ${rin} 𝗦𝗲𝗰𝗼𝗻𝗱\n━━━━━━━━━━━━━━━━━━━\n[⏰] → 𝗡𝗼𝘄: ${moment().tz("Asia/Dhaka").format("HH:mm:ss || DD/MM/YYYY")} \n`,attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api-anh.vtuann.repl.co/gai')).data.data,
method: "GET",
responseType: "stream"
})).data
}, event.threadID, event.messageID);
  }
  else if (args[0] == 'off') {
    fs.writeFileSync(pathFile, 'false');
    return api.sendMessage({body:`=====『 𝗔𝗨𝗧𝗢𝗦𝗘𝗘𝗡 』=====\n━━━━━━━━━━━━━━━━━━━\n[❎] → 𝗔𝘂𝘁𝗼-𝘀𝗲𝗲𝗻 𝗺𝗼𝗱𝗲 𝗱𝗶𝘀𝗮𝗯𝗹𝗲𝗱 𝘄𝗵𝗲𝗻 𝗻𝗲𝘄 𝗺𝗲𝘀𝘀𝗮𝗴𝗲𝘀 𝗰𝗼𝗺𝗲 𝗶𝗻 \n[💕] → 𝗞𝗲𝗲𝗻: ${thinh}\n[⌛] → 𝗢𝗻𝗹𝗶𝗻𝗲 𝗕𝗼𝘁 𝗧𝗶𝗺𝗲: ${hieu} 𝗛𝗼𝘂𝗿 ${simp} 𝗠𝗶𝗻𝘂𝘁𝗲 ${rin} 𝗦𝗲𝗰𝗼𝗻𝗱\n━━━━━━━━━━━━━━━━━━━\n[⏰] → 𝗡𝗼𝘄:  ${moment().tz("Asia/Dhaka").format("HH:mm:ss || DD/MM/YYYY")}\n`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api-anh.vtuann.repl.co/gai')).data.data,
method: "GET",
responseType: "stream"
})).data
}, event.threadID, event.messageID);
  }
  else {
    return api.sendMessage({body:`🌟 ====『 𝗛𝗗𝗦𝗗 』==== 🌟\n━━━━━━━━━━━━━━━━━━━\n[✌️] → 𝗬𝗼𝘂 𝗰𝗮𝗻 𝘂𝘀𝗲 𝗮𝘂𝘁𝗼𝘀𝗲𝗲𝗻 𝗼𝗻 𝗼𝗿 𝗮𝘂𝘁𝗼𝘀𝗲𝗲𝗻 𝗼𝗳𝗳\n[🧠] → 𝗛𝗲 𝗶𝗻𝘀𝘁𝗿𝘂𝗰𝘁𝗲𝗱 𝘁𝗵𝗮𝘁 𝗶𝗳 𝗵𝗲 𝗱𝗶𝗱𝗻'𝘁 𝗸𝗻𝗼𝘄 𝗵𝗼𝘄 𝘁𝗼 𝘂𝘀𝗲 𝗶𝘁, 𝗵𝗲 𝘄𝗼𝘂𝗹𝗱 𝗱𝗶𝗲 😏\n[⌛] → 𝗢𝗻𝗹𝗶𝗻𝗲 𝗕𝗼𝘁 𝗧𝗶𝗺𝗲: ${hieu} 𝗛𝗼𝘂𝗿 ${simp} 𝗠𝗶𝗻𝘂𝘁𝗲 ${rin} 𝗦𝗲𝗰𝗼𝗻𝗱\n[⏰] → 𝗡𝗼𝘄:  ${moment().tz("Asia/Dhaka").format("HH:mm:ss || DD/MM/YYYY")} \n━━━━━━━━━━━━━━━━━━━\n`,attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api-anh.vtuann.repl.co/gai')).data.data,
method: "GET",
responseType: "stream"
})).data
}, event.threadID, event.messageID);
  }
  }
  catch(e) {
    console.log(e);
  }
};
  }
  catch(e) {
    console.log(e);
  }
};