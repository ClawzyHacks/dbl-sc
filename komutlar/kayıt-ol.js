const Discord = require('discord.js');
const db = require("quick.db")

exports.run = (client, message, args) => {
var kod = db.fetch(`kod_${message.author.id}`)
  if(args[0] !== kod) {
  message.reply("Hata! Kodunu Kontrol Et").then(msg => msg.delete(10000))
    message.delete()
     return
  } 
  else {
  message.delete()
  var alrol = message.guild.roles.get('489826982708903959');        
      
  message.member.addRole(alrol);  
    
   message.channel.send("Kayıt Oldun").then(msg => msg.delete(10000))
    
  db.delete(`kod_${message.author.id}`)
  }

}

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: [],
	permLevel: 0,
	kategori: 'genel'
}

exports.help = {
	name: 'kayıt-ol',
	description: 'Sistem hakkında bilgi gösterir.',
	usage: 'kayıt-ol'
}