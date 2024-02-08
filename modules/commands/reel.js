module.exports.config = {
  name: "reel",
  version: "1.0.3",
  hasPermssion: 0,
  credits: "MR-IMRAN",
  description: "short reels",
  commandCategory: "short",
  cooldowns: 5,
  dependencies: {
    axios: ""
  }
}, module.exports.run = async function({
  event: e,
  api: a,
  args: n
}) {
  if (!n[0]) return a.sendMessage("====「 𝐕𝐈𝐃𝐄𝐎 」====\n━━━━━━━━━━━━━\n𝟙.╰┈➤ 𝐀𝐋𝐎𝐍 𝐕𝐈𝐃𝐄𝐎💔 \n𝟚.╰┈➤ 𝐀𝐍𝐈𝐌𝐄 𝐕𝐈𝐃𝐄𝐎😻 \n𝟛.╰┈➤ 𝐁𝐀𝐁𝐘 𝐕𝐈𝐃𝐄𝐎🥰 \n𝟜 ╰┈➤ 𝐂𝐑𝐔𝐒𝐇 𝐕𝐈𝐃𝐄𝐎😍 \n𝟝.╰┈➤ 𝐈𝐒𝐋𝐀𝐌𝐈𝐂 𝐕𝐈𝐃𝐄𝐎🕋 \n𝟞.╰┈➤ 𝐒𝐀𝐃 𝐕𝐈𝐃𝐄𝐎😔 \n𝟟.╰┈➤ 𝐒𝐔𝐑𝐀 𝐕𝐈𝐃𝐄𝐎🤲 \n𝟠.╰┈➤ 𝐋𝐎𝐕𝐄 𝐕𝐈𝐃𝐄𝐎💝 \n𝟡.╰┈➤ 𝐍𝐀𝐓𝐔𝐑𝐀𝐋 𝐕𝐈𝐃𝐄𝐎🌿🕊️\n\n===「 𝟏𝟖+ 𝐕𝐈𝐃𝐄𝐎 」===\n━━━━━━━━━━━━━\n𝟙𝟘.╰┈➤ 𝐇𝐎𝐑𝐍𝐘 𝐕𝐈𝐃𝐄𝐎🔥 \n𝟙𝟙.╰┈➤ 𝐇𝐎𝐓 𝐕𝐈𝐃𝐄𝐎🥵 \n𝟙𝟚.╰┈➤𝐈𝐓𝐄𝐌 𝐕𝐈𝐃𝐄𝐎🔞\n\nTell me how many video numbers you want to see by replaying this message", e.threadID, ((a, n) => {
    global.client.handleReply.push({
      name: this.config.name,
      messageID: n.messageID,
      author: e.senderID,
      type: "create"
    })
  }), e.messageID)
}, module.exports.handleReply = async ({
  api: e,
  event: a,
  client: n,
  handleReply: t,
  Currencies: s,
  Users: i,
  Threads: o
}) => {
  var { p, h } = linkanh();

  if ("create" === t.type) {
    const n = (await p.get(h)).data.data;
    const imran = (await p.get(h)).data.author.title;
    let t = (await p.get(n, {
      responseType: "stream"
    })).data;
    return e.sendMessage({
      body: `${imran}`,
      attachment: t
    }, a.threadID, a.messageID)
  }

    function linkanh() {
        const p = require("axios");
        if ("1" == a.body)
            var h = "https://dpc83s-3000.csb.app/status";
        else if ("2" == a.body)
         var   h = "https://xrpff5-3000.csb.app/status";
        else if ("3" == a.body)
         var   h = "https://3g74xr-3000.csb.app/status";
        else if ("4" == a.body)
          var  h = "https://rmp73n-3000.csb.app/status";
        else if ("5" == a.body)
          var  h = "https://x43md7-3000.csb.app/status";
        else if ("6" == a.body)
         var  h = "https://gpk4cg-3000.csb.app/status";
         else if ("7" == a.body)
         var  h = "https://2sy5nh-3000.csb.app/status";
        else if ("8" == a.body)
         var  h = "https://v58s9f-3000.csb.app/status";
          else if ("9" == a.body)
         var  h = "https://5ft8gc-3000.csb.app/status";
         else if ("10" == a.body)
         var  h = "https://4zm558-3000.csb.app/status";
         else if ("11" == a.body)
         var  h = "https://4qx27l-3000.csb.app/status";
          else if ("12" == a.body)
         var  h = "https://5w8qs3-3000.csb.app/status";
        return { p, h };
    }
};