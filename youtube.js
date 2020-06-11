var search = require('youtube-search');
 
var opts = {
  maxResults: 1,
  key: process.env.YT_KEY,
  eventType: "live",
  type: "video"
};

const YTSearch = async (val) => {
    let promise = await new  Promise((resolve, reject) => {
        search(val, opts, function(err, results) {
            if(err) return console.log(err);
            resolve(results);
          });
    })
    .catch(err => {throw err});

    return promise;
}

exports.YTSearch  = YTSearch;

