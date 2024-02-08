module.exports.config = {
  name: "pornhub",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Nayan",
  description: "magic",
  commandCategory: "moja",
  usages: "pornhub",
  cooldowns: 10,
  dependencies: {
    "request":"",
     "axios":"",
     "fs-extra":""
  }
};

module.exports.run = async function({ api, event, args }) {
    const axios = require("axios")
    const request = require("request")
    const fs = require("fs-extra")
    const { messageID, threadID } = event;



    let np = args.join(" ");
  var query = args.join(" ");
  api.sendMessage(`searching for ${query} porn video`, event.threadID, event.messageID);

 try {
    const res = await axios.get(`https://main.n4y4n-server.repl.co/nayan/pornhub?name=${np}`);
    var data = res.data.data;
    var msg = [];
    let img1 = `${res.data.normal}`;
   //hd: res.data.best
   //normal: res.data.normal

    let imgs1 = (await axios.get(`${img1}`, {
        responseType: 'arraybuffer'
    })).data;
    fs.writeFileSync(__dirname + "/cache/xnxx.mp4", Buffer.from(imgs1, "utf-8"));
    var allimage = [];
    allimage.push(fs.createReadStream(__dirname + "/cache/xnxx.mp4"));

    {
        msg += `✅YOUR PORN VIDEO COLLECTED SUCCESSFULL\
    }

    return api.sendMessage({
        body: msg,
        attachment: allimage
    }, event.threadID, event.messageID);
} catch (err) {
    api.sendMessage(`error`, event.threadID, event.messageID);  
   }
};