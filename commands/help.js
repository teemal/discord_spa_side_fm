module.exports = {
	name: 'help',
	description: 'help command lets users know all other commands',
	execute(message, args) {
		message.channel.send(helpMsg);
	},
};

helpMsg = 'Hey there, \n\
          here\'s the list of available commands\n\
          command\t\t use\
          help:\t\t displays this dialogue\n\
          ping:\t\t responds with \'Pong!\'\n\
          '