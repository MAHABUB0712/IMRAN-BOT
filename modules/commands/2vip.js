/** I am doing this coding with a lot of difficulty, please don't post it yourself¯\_(ツ)_/¯ **/
module.exports.config = {
  name: "vip",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "MR.NAYAN",
  description: "Shairi VEDIO",
  commandCategory: "Hình ảnh",
  usages: "topvip",
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
   var hi = ["~ 🖕 top vip ar mare cudi 🖕~"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
  "https://drive.google.com/uc?id=1T3E7-wYD7wxuOoXvvNTHngtW5E6MAATg",
    "https://drive.google.com/uc?id=1TKSZEEwj7a0NVth41cBhsgdcV99hn8C1",
    "https://drive.google.com/uc?id=1T8UvyIKIu3KTKf6jaeLiCwRbDAacf54K",
    "https://drive.google.com/uc?id=1SPgHW-8PmlTVuwzLyxMeOwRuhJy8k-mV",
    "https://drive.google.com/uc?id=1TbYgyEW1a8v6CTJK56jA9_DnZYaY8tSN",
    "https://drive.google.com/uc?id=1TdX-hn9FjrIT1nvk__zXyFKUsGqttmHM",
    "",
];
     var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());
   };