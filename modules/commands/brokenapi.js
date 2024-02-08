module.exports.config = {
	name: "broken",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "MR.NAYAN",
	description: "Random Short video",
	commandCategory: "media",
	usages: "",
	cooldowns: 5,
  dependencies: {
    "axios": "",
    "fs": ""
  }
};

const videoDATA = "https://videos-api--xaikoimran.repl.co/video/broken";

module.exports.onLoad = ({}) => {
  if (!global.nodemodule["fs"].existsSync(__dirname + '/imran')) {
    global.nodemodule["fs"].mkdirSync(__dirname + '/imran');
  }
  global.nodemodule["fs"].readdirSync(__dirname + '/imran').forEach(file => {
    global.nodemodule["fs"].unlinkSync(__dirname + `/imran/${file}`);
  })
}

module.exports.run = async ({ api, event }) => {
  global.nodemodule["axios"]
    .get(videoDATA)
    .then(res => {
      global.nodemodule["axios"]
        .get(encodeURI(res.data.data), { responseType: "arraybuffer" })
        .then(ress => {
          let path = __dirname + `/imran/${Date.now()}.mp4`;
          global.nodemodule["fs"].writeFileSync(path, Buffer.from(ress.data, 'utf-8'));
          api.sendMessage({
            body: "☆《BROKEN GIRLS》☆",
            attachment: global.nodemodule["fs"].createReadStream(path)
          }, event.threadID, () => global.nodemodule["fs"].unlinkSync(path), event.messageID);
          return;
        })
        .catch(e => {
          api.sendMessage("Something went wrong...", event.threadID, event.messageID);
          return;
        });
    })
  .catch(e => {
    api.sendMessage("Something went wrong...", event.threadID, event.messageID);
    return;
  });

  return;
}