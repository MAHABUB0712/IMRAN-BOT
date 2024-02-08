module.exports.config = {
	name: "tikvideo",
	version: "1.0.0", 
	hasPermssion: 0,
	credits: "Nayan//api by Mohammad Rahad", 
	description: "tiktok Video download",
	commandCategory: "Download", 
	usages: "/tikvideo [video link]", 
	cooldowns: 0,
	dependencies: [] 
};

module.exports.run = async function({ api, event, args }) {
    const axios = require("axios")
    const request = require("request")
    const fs = require("fs-extra")
    const content = args.join(" ");
    const res = await axios.get(`https://tiktok-api.r4h4d-1.repl.co/tiktok?url=${content}`);
    var data = res.data.data;
    var msg = [];
    let img1 = `${res.data.url}`;
    let rahad =`${res.data.nickname}`;
    let rahad2 =`${res.data.unique_id}`;

    let imgs1 = (await axios.get(`${img1}`, {
        responseType: 'arraybuffer'
    })).data;
    fs.writeFileSync(__dirname + "/cache/img1.mp4", Buffer.from(imgs1, "utf-8"));
    var allimage = [];
    allimage.push(fs.createReadStream(__dirname + "/cache/img1.mp4"));
	
    {
        msg += `𝗧𝗶𝗸𝘁𝗼𝗸 𝗩𝗶𝗱𝗲𝗼 𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹✅\n\n𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱 𝗔𝗽𝗶 𝐌𝐨𝐡𝐚𝐦𝐦𝐚𝐝 𝐈𝐦𝐫𝐚𝐧`
      
    }
    
    return api.sendMessage({
        body: msg,
        attachment: allimage
    }, event.threadID, event.messageID);
      }