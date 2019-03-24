const Discord = require('discord.js');
const db = require('quick.db')

const hrfler = ["ar","bt","sc","dg","he","ef","hg","5i","wh","4j","tk","5k","3l","5m","jn","go","np","ds","rt","lu","yv","7y","fz","q1","q2","33","74","f5","56","k7","8g","h9","r0","gA","hC","tB","5D","fE","gF","Gh","jM","fH","gI","fJ","rK","şL","iN","Oş","lP","ıS","uT","jU","oV","uY","dZ"]
const hrfler2 = ["ar","bt","sc","dg","he","ef","hg","5i","wh","4j","tk","5k","3l","5m","jn","go","np","ds","rt","lu","yv","7y","fz","q1","q2","33","74","f5","56","k7","8g","h9","r0","gA","hC","tB","5D","fE","gF","Gh","jM","fH","gI","fJ","rK","şL","iN","Oş","lP","ıS","uT","jU","oV","uY","dZ"]
const hrfler3 = ["ar","bt","sc","dg","he","ef","hg","5i","wh","4j","tk","5k","3l","5m","jn","go","np","ds","rt","lu","yv","7y","fz","q1","q2","33","74","f5","56","k7","8g","h9","r0","gA","hC","tB","5D","fE","gF","Gh","jM","fH","gI","fJ","rK","şL","iN","Oş","lP","ıS","uT","jU","oV","uY","dZ"]
const hrfler4 = ["ar","bt","sc","dg","he","ef","hg","5i","wh","4j","tk","5k","3l","5m","jn","go","np","ds","rt","lu","yv","7y","fz","q1","q2","33","74","f5","56","k7","8g","h9","r0","gA","hC","tB","5D","fE","gF","Gh","jM","fH","gI","fJ","rK","şL","iN","Oş","lP","ıS","uT","jU","oV","uY","dZ"]

exports.run = (client, message, params) => {
//  db.fetch(`kayitkanali_${message.guild.id}`).then(kk => {
 //   if(message.channel.id !== kk) return;
  
  var random = Math.floor(Math.random()*(hrfler.length-0+1)+0);
  var random2 = Math.floor(Math.random()*(hrfler2.length-0+1)+0);
  var random3 = Math.floor(Math.random()*(hrfler3.length-0+1)+0);
  var random4 = Math.floor(Math.random()*(hrfler4.length-0+1)+0);

    
  var h1 = hrfler[random]
  var h2 = hrfler2[random2]
  var h3 = hrfler3[random3]
  var h4 = hrfler4[random4]

  
  var hpsi = h1 + h2 + h3 + h4 
  db.set(`kod_${message.author.id}`, hpsi)
  message.delete()
  message.author.send(hpsi)
  message.reply("Dmden Gelen Kodu !kayıtol <kod> şeklinde yazın").then(msg => msg.delete(10000))
}//)}

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: [],
	permLevel: 0,
	kategori: 'genel'
}

exports.help = {
	name: 'kod',
	description: 'Sistem hakkında bilgi gösterir.',
	usage: 'kod'
}