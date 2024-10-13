const fs = require("fs");
const chalk = require("chalk");
global.creAtor = "6285274292446@s.whatsapp.net";
global.owner = ["628126009123"];
global.ownerNumber = ["628126009123@s.whatsapp.net"];
global.nomerOwner = "628126009123";
global.namabotnya = "Ngising Bot";
global.namaownernya = "Double Impact, Ngising Bareng Nongkrong Bareng";

//Web Api
global.APIs = {
  betabotz: "https://tools.betabotz.eu.org/",
  ryzendesu: "https://api.ryzendesu.vip/",
};

global.APIKeys = {
  "https://api.openai.com/v1/chat/completions":"",
  "https://tools.betabotz.eu.org/": "", //your apikeyhere,
  "https://api.ryzendesu.vip/": "", //your apikeyhere,
};

// Sticker Creator
global.packname = "© Created By";
global.author = "AbotMD";

global.sessionName = "session";
global.group = "";
global.youtube = "";
global.website = "";
global.github = "";
global.keyopenai = "https://api.openai.com/v1/chat/completions";
global.keyopenai = "2d2703d1";
global.nomorowner = "https://wa.me/628126009123";

// Scrap Lib
global.scrap = new (require("../function/lib/lib.scrap.js"))();

global.region = "I`m From Indonesia";
global.prefa = ["", "!", ".", "#", "-", "•"];
global.thumb = fs.readFileSync("./function/image/thumb.jpg");
global.krmd = {
  success: "```Success✅```",
  admin: "```Fitur Khusus Admin Group!!!```",
  botAdmin: "```Bot Harus Menjadi Admin Terlebih Dahulu!!!```",
  owner: "```Fitur Khusus Owner Bot!!!```",
  group: "```Fitur Digunakan Hanya Untuk Group!!!```",
  private: "```Fitur Digunakan Hanya Untuk Private Chat!!!```",
  bot: "```Fitur Khusus Pengguna Nomor Bot!!!```",
  error:
    "```Mungkin Lagi Error Kak Harap Lapor Owner Biar Langsung Di Benerin🙏```",
  wait: "```Waittt...```",
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`));
  delete require.cache[file];
  require(file);
});
