module.exports.config = {
  'name': "uptime",
  'version': "1.0.0",
  'hasPermssion': 0x0,
  'credits': "MR-IMRAN",
  'hide': true,
  'description': "Random images by api - uptime",
  'commandCategory': "administrators",
  'cooldowns': 0x2,
  'dependencies': {
    'pidusage': ''
  }
};
function byte2mb(_0x58e603) {
  const _0x3b8961 = ["Bytes", 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  let _0x4c3cd2 = 0;
  let _0x1a38e8 = parseInt(_0x58e603, 10) || 0;
  while (_0x1a38e8 >= 1024 && ++_0x4c3cd2) {
    _0x1a38e8 = _0x1a38e8 / 1024;
  }
  return _0x1a38e8.toFixed(_0x1a38e8 < 10 && _0x4c3cd2 > 0 ? 1 : 0) + " " + _0x3b8961[_0x4c3cd2];
}
module.exports.run = async ({
  api: _0x42340f,
  event: _0x15d3ac,
  args: _0x476910,
  Threads: _0x2f183a
}) => {
  var _0x24d4f0 = process.env.REPL_OWNER;
  if (_0x24d4f0 !== undefined) {}
  var _0x2c2918 = require('os');
  var _0x12230c = _0x2c2918.cpus();
  var _0x48d043;
  for (var _0x238c56 of _0x12230c) {
    _0x48d043 = _0x238c56.model;
    speed = _0x238c56.speed;
  }
  if (_0x12230c == undefined) {
    ;
  }
  var _0x37fe42 = process.uptime();
  var _0x4b2694 = Math.floor(_0x37fe42 / 3600);
  var _0x9858db = Math.floor(_0x37fe42 % 3600 / 60);
  var _0x3a19aa = Math.floor(_0x37fe42 % 60);
  var _0xc342db = _0x4b2694 < 10 ? '0' + _0x4b2694 : _0x4b2694;
  var _0x393eb9 = _0x9858db < 10 ? '0' + _0x9858db : _0x9858db;
  var _0x4ae115 = _0x3a19aa < 10 ? '0' + _0x3a19aa : _0x3a19aa;
  const _0x2f0502 = require("axios");
  const _0x209737 = await global.nodemodule.pidusage(process.pid);
  const _0x3aa817 = Date.now();
  const _0x3e6dda = require("fs-extra");
  if (!_0x3e6dda.existsSync(__dirname + "/cache/UTM-Avo.ttf")) {
    let _0x143a77 = (await _0x2f0502.get("https://github.com/quyenkaneki/data/blob/main/UTM-Avo.ttf?raw=true", {
      'responseType': "arraybuffer"
    })).data;
    _0x3e6dda.writeFileSync(__dirname + "/cache/UTM-Avo.ttf", Buffer.from(_0x143a77, "utf-8"));
  }
  if (!_0x3e6dda.existsSync(__dirname + "/cache/phenomicon.ttf")) {
    let _0x57a629 = (await _0x2f0502.get("https://github.com/quyenkaneki/data/blob/main/phenomicon.ttf?raw=true", {
      'responseType': "arraybuffer"
    })).data;
    _0x3e6dda.writeFileSync(__dirname + "/cache/phenomicon.ttf", Buffer.from(_0x57a629, "utf-8"));
  }
  ;
  if (!_0x3e6dda.existsSync(__dirname + "/cache/CaviarDreams.ttf")) {
    let _0x591e13 = (await _0x2f0502.get("https://github.com/quyenkaneki/data/blob/main/CaviarDreams.ttf?raw=true", {
      'responseType': "arraybuffer"
    })).data;
    _0x3e6dda.writeFileSync(__dirname + "/cache/CaviarDreams.ttf", Buffer.from(_0x591e13, "utf-8"));
  }
  ;
  const {
    loadImage: _0x45992c,
    createCanvas: _0x1d031c,
    registerFont: _0x4f35c2
  } = require("canvas");
  let _0x21559a = _0x476910[0];
  if (_0x476910[0] == "list") {
    const _0x76463c = (await _0x2f0502.get("https://raw.githubusercontent.com/quyenkaneki/data/main/dataanime.json")).data;
    var _0x5dbcf7 = _0x76463c.listAnime.length;
    var _0x4fe00b = _0x76463c.listAnime;
    var _0x8fd343 = 1;
    _0x8fd343 = parseInt(_0x476910[1]) || 1;
    if (_0x8fd343 < -1) {
      _0x8fd343 = 1;
    } else {
      '';
    }
    var _0x480dc2 = Math.ceil(_0x5dbcf7 / 20);
    var _0x218039 = '';
    for (var _0x238c56 = 20 * (_0x8fd343 - 1); _0x238c56 < 20 * (_0x8fd343 - 1) + 20; _0x238c56++) {
      if (_0x238c56 >= _0x5dbcf7) {
        break;
      }
      _0x218039 += "[ " + (_0x238c56 + 1) + " ] - " + _0x4fe00b[_0x238c56].ID + " | " + _0x4fe00b[_0x238c56].name + "\n";
    }
    _0x218039 += "Trang (" + _0x8fd343 + '/' + _0x480dc2 + ")\nDùng " + global.config.PREFIX + this.config.name + " list <số trang>";
    return _0x42340f.sendMessage(_0x218039, _0x15d3ac.threadID, _0x15d3ac.messageID);
  }
  if (!_0x21559a) {
    var _0x1f0311 = Math.floor(Math.random() * 848) + 1;
  } else {
    var _0x1f0311 = _0x21559a;
  }
  const _0x18b792 = (await _0x2f0502.get("https://raw.githubusercontent.com/quyenkaneki/data/main/dataimganime.json")).data;
  console.log(_0x18b792.length);
  let _0x4cbadd = __dirname + ("/cache/" + _0x1f0311 + ".png");
  let _0x2e96ac = __dirname + ("/cache/" + _0x15d3ac.senderID + ".png");
  let _0x51ab9f = (await _0x2f0502.get(encodeURI("https://imgur.com/x5JpRYu.png"), {
    'responseType': "arraybuffer"
  })).data;
  _0x3e6dda.writeFileSync(_0x4cbadd, Buffer.from(_0x51ab9f, "utf-8"));
  let _0x2aeeed = (await _0x2f0502.get(encodeURI('' + _0x18b792[_0x1f0311].imgAnime), {
    'responseType': "arraybuffer"
  })).data;
  _0x3e6dda.writeFileSync(_0x2e96ac, Buffer.from(_0x2aeeed, "utf-8"));
  let _0x585800 = await _0x45992c(_0x2e96ac);
  let _0x2b57c1 = await _0x45992c(_0x4cbadd);
  let _0x6c1b48 = _0x1d031c(_0x2b57c1.width, _0x2b57c1.height);
  var _0x5ea4a2 = _0x6c1b48.getContext('2d');
  _0x5ea4a2.fillStyle = _0x18b792[_0x1f0311].colorBg;
  _0x5ea4a2.fillRect(0, 0, _0x6c1b48.width, _0x6c1b48.height);
  _0x5ea4a2.drawImage(_0x585800, -200, -200, 1200, 1200);
  _0x5ea4a2.drawImage(_0x2b57c1, 0, 0, _0x6c1b48.width, _0x6c1b48.height);
  _0x4f35c2(__dirname + "/cache/phenomicon.ttf", {
    'family': "phenomicon"
  });
  _0x5ea4a2.textAlign = "start";
  _0x5ea4a2.strokeStyle = _0x18b792[_0x1f0311].colorBg;
  _0x5ea4a2.filter = "brightness(90%) contrast(110%)";
  _0x5ea4a2.font = "130px phenomicon";
  _0x5ea4a2.fillStyle = _0x18b792[_0x1f0311].colorBg;
  _0x5ea4a2.fillText(global.config.BOTNAME, 835, 340);
  _0x5ea4a2.beginPath();
  _0x4f35c2(__dirname + "/cache/UTM-Avo.ttf", {
    'family': "UTM"
  });
  _0x5ea4a2.textAlign = "start";
  _0x5ea4a2.font = "70px UTM";
  _0x5ea4a2.fillStyle = "#000000";
  _0x5ea4a2.fillText(_0xc342db + " : " + _0x393eb9 + " : " + _0x4ae115 + " ", 980, 440);
  _0x5ea4a2.restore();
  _0x5ea4a2.save();
  _0x4f35c2(__dirname + "/cache/CaviarDreams.ttf", {
    'family': "time"
  });
  _0x5ea4a2.textAlign = "start";
  _0x5ea4a2.font = "55px time";
  _0x5ea4a2.fillText("imranahmed376", 930, 540);
  _0x5ea4a2.fillText("MR-IMRAN-60", 930, 610);
  _0x5ea4a2.fillText("Imran.Ahmed099", 930, 690);
  _0x5ea4a2.restore();
  _0x5ea4a2.save();
  _0x5ea4a2.beginPath();
  const _0x14487d = _0x6c1b48.toBuffer();
  _0x3e6dda.writeFileSync(_0x4cbadd, _0x14487d);
  return _0x42340f.sendMessage({
    'body': "Server Information\n\nChip: " + _0x48d043 + ".\nProcessing Speed: " + speed + "MHz.\n\nTotal Memory: " + byte2mb(_0x2c2918.totalmem()) + ".\nUsed: " + byte2mb(_0x2c2918.freemem()) + " (" + (_0x2c2918.freemem() * 100 / _0x2c2918.totalmem()).toFixed() + "%).\n\nBot is running up " + _0x4b2694 + " hours " + _0x9858db + " minute " + _0x3a19aa + " seconds.\n\n❯ Total users: " + global.data.allUserID.length + "\n❯ Total Group: " + global.data.allThreadID.length + "\n❯ CPU in use: " + _0x209737.cpu.toFixed(1) + "%\n❯ Ram in use: " + byte2mb(_0x209737.memory) + "\n❯ Ping: " + (Date.now() - _0x3aa817) + "ms\n❯ Character ID: " + _0x1f0311 + "\n❯ Admin Faceboook:\n https://www.facebook.com/Imran.Ahmed099",
    'attachment': _0x3e6dda.createReadStream(_0x4cbadd)
  }, _0x15d3ac.threadID, () => _0x3e6dda.unlinkSync(_0x4cbadd), _0x3e6dda.unlinkSync(_0x2e96ac), _0x15d3ac.messageID);
};