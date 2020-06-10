const Discord = require('discord.js'); 
const client = new Discord.Client();
require('dotenv').config()

client.on('ready', () => {   
    console.log(`Logged in as ${client.user.tag}!`); 
});
client.on('message', msg => {  
    // if(message.author.bot) return;
    message = msg.content.split('!')
    console.log(message)
    if(message[0] === ''){
        if(message[1] === 'ping'){     
            msg.reply('Pong!');   
        }
        if(message[1] === 'help'){     
            msg.reply('sliding into your DM\'s :sunglasses: \n');
            msg.author.send('test')
        }
    }
});
client.login(process.env.TOKEN);