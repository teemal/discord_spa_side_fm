module.exports = {
	name: 'help',
	description: 'help command lets users know all other commands',
	execute(message, args) {
        message.channel.send('sliding into your DM\'s :sunglasses:');
        message.author.send(helpMsg);
	},
};

helpMsg = 'Hey there, \n\
          here\'s the list of available commands\n\
          command\t\t\t\t use\n\
          help:\t\t\t\t displays this dialogue\n\
          ping:\t\t\t\t responds with \'Pong!\'\n\
          '