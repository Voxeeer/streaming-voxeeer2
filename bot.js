const Discord = require('discord.js'),
    bot = new Discord.Client({sisableEveryone: true})
    console.log("muuuuuuuuute,");
bot.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("515137948308471809");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(** .# Bienvenue Dans Darkness, :black_heart:  **), 4000)
}
});
bot.login("BOT_TOKEN")
