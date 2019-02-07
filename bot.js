const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("543088035860971560")
setInterval(function() {
channel.send(`NIGArlxHH`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
