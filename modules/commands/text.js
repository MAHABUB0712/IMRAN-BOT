module.exports.config = {
  name: "keya",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Nayan",
  description: "image to text",
  commandCategory: "link",
  usages: "user",
  cooldowns: 5,
  dependencies: {
    "nayan-server": ''
  }
  };

module.exports.run = async function({ nayan, events, args }) {
  const linkanh = events.messageReply.attachments[0].url || args.join(" ");
    const axios = require("axios")
    const request = require("request")
    const fs = require("fs-extra")
const { img2text} = require('nayan-server')
    const data = await img2text(`${linkanh}`);
  console.log(data);
        var msg = [];
  const text = data.text
        {
            msg += `${text}`
        }
    return nayan.reply({
        body: msg

    }, events.threadID, events.messageID);
  }
};