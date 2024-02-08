/** I am doing this coding with a lot of difficulty, please don't post it yourself¯\_(ツ)_/¯ **/
module.exports.config = {
  name: "hatmari",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Md Nazrul Islam",
  description: "SEX VIDEO",
  commandCategory: "Hình ảnh",
  usages: "sex vedio",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["--SEX VIDEO💦--"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
   "https://drive.google.com/uc?id=1HfOfgfu2jZautFPLok-ZcoJHn54f95M0",
    "https://drive.google.com/uc?id=1HiqV-hRwEC9AO27ZTlPHMrUyZWzx8lAC",
    "https://drive.google.com/uc?id=1HtcFAZKz5YYg_ZOZbN9PrbJNvFiKQorA",
    "https://drive.google.com/uc?id=1HNtio0iYYrz58G3F707zhLsJntmNStdy",
    "https://drive.google.com/uc?id=1Hkt2PGRSY1qca_l8917T2iqbZVjtwZ_e",
    "https://drive.google.com/uc?id=1I7ILNuGW0gerLa3h-sOq4ik8toxtQEIh",
    "https://drive.google.com/uc?id=1HoBsLC28BGCNjJg6fdcOpHbUoN5d7WK2",
    "https://drive.google.com/uc?id=1HRwuU7sd7E4pV55lHW3ZlHr8IGqlFUpb"];
     var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());
   };