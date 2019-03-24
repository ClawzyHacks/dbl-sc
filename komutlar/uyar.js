const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
if(!message.member.hasPermission("BAN_MEMBERS")) return;
  		  let uyarı1 = "546036231528513546"
  let uyarı2 = "546036407706320896"
  let uyarı3 = "546036532319092737"
  let uyarı4 = "546036601986220033"
    let reason = args.slice(1).join(' ');
    let user = message.mentions.users.first();
      if (!user) return message.channel.send("uyarılacak kişiyi belirt")
    if (!reason) return message.channel.send("sebebini gir")
    var embed = new Discord.RichEmbed()
      .setColor("#f558c9")
      .setAuthor(user.tag + " | " + user.id + " | BIR UYARI ALDI")
    .addField("Yetkili", `${message.author}(${message.author.id})`)
    .addField("Kullanıcı", `${user.tag}(${user.id})`)
    .addField("**Sebep:** ", reason)
      .setTimestamp()
    client.channels.get("546047461572083732").send(embed)
	
	      if(!message.guild.member(user).roles.has(uyarı1)) {
	  message.guild.member(user).addRole(uyarı1);
	  user.send("1. Uyarı!")
	  } else if(!message.guild.member(user).roles.has(uyarı2)) {
	message.guild.member(user).addRole(uyarı2);
	user.send("2. Uyarı!")
	} else if(!message.guild.member(user).roles.has(uyarı3)) {
	message.guild.member(user).addRole(uyarı3);
	user.send("3. Uyarı!")
	} else if(!message.guild.member(user).roles.has(uyarı4)) {
	message.guild.member(user).addRole(uyarı4);
	user.send("Karantinaya alındın!")
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
	name: 'uyar',
	description: 'Sistem hakkında bilgi gösterir.',
	usage: 'uyar <kişi> <sebep>'
}