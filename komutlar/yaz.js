const Discord = require('discord.js');
const db = require('quick.db')
const request = require('request')

exports.run = async (client, message, args) => {
if(!message.member.hasPermission("BAN_MEMBERS")) return;
  
  message.delete()
message.channel.send(message.content)
  
  
  
};



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['search-bot', 'find-bot', 'botara'],
  permLevel: 0,
  kategori: 'genel'
};

exports.help = {
  name: 'yaz',
  description: 'DiscordBotsTR sistemindeki botları aramanızı sağlar.',
  usage: 'yaz <mesaj>'
};