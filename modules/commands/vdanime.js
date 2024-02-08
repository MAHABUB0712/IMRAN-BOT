module.exports.config = {
 name:"vdanime",
  verison:"1.0.0",
  hasPremssion: 2,
  credit: "MR Imran",
  description: "random video",
  commandCategory: "public",
  usages: "video wibu",
  cooldowns: 0
};
module.exports.run = async ({ api, event }) => {
  const moment = require("moment-timezone");
 var gio = moment.tz("Asia/Dhaka").format("hh:mm:ss || D/MM/YYYY");
 var thu = moment.tz('Asia/Dhaka').format('dddd');
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  if (thu == 'Sunday') thu = '𝗦𝘂𝗻𝗱𝗮𝘆'
  if (thu == 'Monday') thu = '𝗠𝗼𝗻𝗱𝗮𝘆'
  if (thu == 'Tuesday') thu = '𝗧𝘂𝗲𝘀𝗱𝗮𝘆'
  if (thu == 'Wednesday') thu = '𝗪𝗲𝗱𝗻𝗲𝘀𝗱𝗮𝘆'
  if (thu == "Thursday") thu = '𝗧𝗵𝘂𝗿𝘀𝗱𝗮𝘆'
  if (thu == 'Friday') thu = '𝗙𝗿𝗶𝗱𝗮𝘆'
  if (thu == 'Saturday') thu = '𝗦𝗮𝘁𝘂𝗿𝗱𝗮𝘆'
  axios.get('https://videos-api--xaikoimran.repl.co/video/ai').then(res => {
    let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
  let callback = function () {
     let
  s = process.uptime(),u = [s/3600<<0, s/60%60<<0, s%60<<0].map(el => el < 10?'0'+el: el);
          api.sendMessage({
             body: `===== 『𝗔𝗡𝗜𝗠𝗘 𝐕𝐈𝐃𝐄𝐎』 =====\n◆━━━━━━━━━━━━━◆\n➢『⏰️』𝗧𝗼𝗱𝗮𝘆 𝗶𝘀 ${thu}\n➢『🌐』𝐔𝐩𝐭𝐢𝐦𝐞: ${u.join(':')}\n➢『⏳』 𝗡𝗼𝘄:\n⏰= [ ${moment().tz("Asia/Dhaka").format("hh:mm:ss || DD/MM/YYYY")} ] =⏰\n━━━━━━━━━━━━━━━━━\n`,
            attachment: fs.createReadStream(__dirname + `/cache/video.mp4`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/video.mp4`), event.messageID);
        };
        request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/video.mp4`)).on("close", callback);
      })
}
