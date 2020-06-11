const search = require('../youtube')


module.exports = {
	name: 'future_funk',
	description: 'plays future funk live stream',
	execute(message, args){
        search.YTSearch(this.name.split('_').join(' '))
        .then(res => {
            message.channel.send(JSON.stringify(res[0].link.replace(/"/g, '')));
            // console.log(JSON.stringify(res[0].link))
        })
	},
};