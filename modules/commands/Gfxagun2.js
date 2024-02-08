const API = "https://api.mohammadnayan07.repl.co/api/textpro?number=145&text="
module.exports.config = {
	name: "pic25",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Mohammad Nayan",
	description: "logo",
	commandCategory: "text maker",
	usages: "blood<text>",
	cooldowns: 10
};
module.exports.run = async function ({ api, event, args,}) {
    const axios = require("axios");
    const fs = require("fs-extra");
    const qs = require("querystring");
    tukhoa = args.join(" ");
    (event.type == "message_reply") ? tukhoa = event.messageReply.attachments[0].url: tukhoa = args.join(" ");
    const pathsave = __dirname + `/cache/banner.png`;
    let imageBuffer;
    api.sendMessage(`𝐘𝐨𝐮𝐫 𝐥𝐨𝐠𝐨 𝐢𝐬 𝐛𝐞𝐢𝐧𝐠 𝐜𝐫𝐞𝐚𝐭𝐞𝐝🥀\n𝐏𝐥𝐞𝐚𝐬𝐞 𝐖𝐚𝐢𝐭🫂`, event.threadID, (err, info) => setTimeout(() => { api.unsendMessage(info.messageID) }, 3000));
    axios.get(`${API}${encodeURI(tukhoa)}`, {responseType: "arraybuffer"}) .then(data => {const imageBuffer = data.data;
    fs.writeFileSync(pathsave, Buffer.from(imageBuffer));
    api.sendMessage({body: `Credit👉👅it'Z SURJO😋❤️‍🔥`, attachment: fs.createReadStream(pathsave)}, event.threadID, () => fs.unlinkSync(pathsave), event.messageID);}).catch(error => {

          
            let err;
            if (error.response) err = JSON.parse(error.response.data.toString());
            else err = error;
            return api.sendMessage(` xy ra li ${err.error} ${err.message}`, event.threadID, event.messageID);
ÿÿÿÿÿÿÿÿ})
};