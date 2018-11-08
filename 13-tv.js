
const fs = require('fs');
const request = require('request');


//let showInfo = "";

var TV = function () {
  this.findShow = function (show) {
    // The following URL can be used to search the TV Maze API for a given show
    var URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;
    console.log("URL", URL)

    request(URL, function (err, res, body) {
      if (err) throw err;
      //console.log('response', res, res.statusCode);
      let json = JSON.parse(body);
      //console.log(json);

      showInfo = `Here is the information for the show "${json.name}" :\n\nGenre: ${json.genres}\n\nAvg Rating: ${json.rating.average}\n\nNetwork: ${json.network.name}\n\nSummary: ${json.summary}\n\n\n`;

      console.log("showInfo", showInfo);

      fs.appendFile('log.txt', showInfo, function (err) {
        if (err) throw err;
        console.log('Log.txt was appended.');
      }); //close appendFile

    }); //close request

  }; //close .findShow

}; //close TV constructor

module.exports = TV;
