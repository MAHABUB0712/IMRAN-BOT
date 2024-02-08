/** Đổi Credit ? Bọn t đã không mã hóa cho mà edit rồi thì tôn trọng nhau tý đi ¯\_(ツ)_/¯ **/
module.exports.config = {
  name: "সখ",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Junior Simanto",
  description: "Random ảnh gái khi dùng dấu lệnh",
  commandCategory: "Hình ảnh",
  usages: "ig",
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
   var hi = ["//.𝐌𝐨𝐡𝐚𝐦𝐦𝐚𝐝 𝐈𝐦𝐫𝐚𝐧.// ♦️✨"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
    
"https://i.postimg.cc/K89R7DR1/inbound1994714298178274349.jpg",
    
"https://i.postimg.cc/MHynykQw/inbound4897560235119788316.jpg",

"https://i.postimg.cc/Pxvp5vfP/inbound209528256407421158.jpg",

"https://i.postimg.cc/CK1n96WC/inbound3937275682276476200.jpg",
    
"https://i.postimg.cc/TYVbbbVb/inbound2934522012691745436.jpg",

"https://i.postimg.cc/Y2mYpZjb/inbound7555411652939212181.webp",

"https://i.postimg.cc/7LwHyjQK/inbound6657696684115980515.jpg",

"https://i.postimg.cc/zvCNMjSs/inbound5999844863507912725.jpg",

"https://i.postimg.cc/65x507fs/inbound1421415056581765837.jpg",

"https://i.postimg.cc/grb9H6Cg/inbound7991164462344816679.jpg",

"https://i.postimg.cc/8PfPdR6m/inbound7413792655279804383.jpg",

"https://i.postimg.cc/9XnQq8rf/inbound222355433488026917.jpg",

"https://i.postimg.cc/3wTRxkWC/inbound3469100942669036127.jpg",

"https://i.postimg.cc/m2PhXx0M/inbound7281146455319276231.jpg",

"https://i.postimg.cc/d1JL4hYt/inbound2042981334251364904.jpg",

"https://i.postimg.cc/QtDWw6pD/inbound7213524848810705429.jpg",

"https://i.postimg.cc/vZjLBFVt/inbound5752747120063915514.jpg",

"https://i.postimg.cc/BbgBQjTj/inbound6515797295029409847.png",

"https://i.postimg.cc/Gt1Xp065/inbound6235888899572731607.jpg",











    
];
	 var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };