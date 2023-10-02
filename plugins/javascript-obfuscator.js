const { Module, isPrivate } = require("../lib/");
const { getObfus } = require("../lib/javaobfuscate");

Module(
  {
    pattern: "enc",
    fromMe: isPrivate,
    desc: "It will convert your javascript code to encrypted code.",
    type: "converter",
  },
  async (message, match, m) => {
  if (!match) return await message.reply(`_Example : const { jslbuffer } = require("abu-bot")_`)
  let obfus = await getObfus(match);
  await message.reply(`${obfus.result}`);
  });