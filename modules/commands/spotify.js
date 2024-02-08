module.exports.config = {
  name:"spotify",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Nayan",
  description: "song",
  commandCategory: "media",
  cooldowns: 3
};



module.exports.run = async function({ api, event, args }) {
    const axios = require("axios")
    const request = require("request")
    const fs = require("fs-extra")
  const { spotify} = require('nayan-server')
    const text = args.join(" ")

    const res = await spotify(`${text}`);
  console.log(res);
    var data = res.data;
    var msg = [];
    let img1 = `${res.data.audio}`;
    let cp = `${res.data.title}`

    let imgs1 = (await axios.get(`${img1}`, {
        responseType: 'arraybuffer'
    })).data;
    fs.writeFileSync(__dirname + "/cache/img1.mp3", Buffer.from(imgs1, "utf-8"));
    var allimage = [];
    allimage.push(fs.createReadStream(__dirname + "/cache/img1.mp3"));

    {
        msg += `${cp}`
    }

    return api.sendMessage({
        body: msg,
        attachment: allimage
    }, event.threadID, event.messageID);
}