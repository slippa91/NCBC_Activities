const fs = require('fs');
const request = require('request');
const moment = require('moment');


//let showInfo = "";

var TV = function () {
  this.findShow = function (show) {
    // The following URL can be used to search the TV Maze API for a given show
    var URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;
    //console.log("URL", URL)

    request(URL, function (err, res, body) {
      if (err) throw err;
      //console.log('response', res, res.statusCode);
      let json = JSON.parse(body);
      //console.log(json);

      showInfo = `Here is the information for the show "${json.name}" :\n\nGenre: ${json.genres}\n\nAvg Rating: ${json.rating.average}\n\nNetwork: ${json.network.name}\n\nSummary: ${json.summary}\n\n\n`;

      console.log("showInfo", showInfo);

      fs.appendFile('logShow.txt', showInfo, function (err) {
        if (err) throw err;
        console.log('logShow.txt was appended.');
      }); //close appendFile

    }); //close request

  }; //close .findShow

  this.findActor = function (actor) {
    // The following URL can be used to search the TV Maze API for a given show
    var URL = "http://api.tvmaze.com/search/people?q=" + actor;
    //console.log("URL", URL)

    request(URL, function (err, res, body) {
      if (err) throw err;
      //console.log('response', res, res.statusCode);
      let json = JSON.parse(body);
      let person = json[0].person;
      //console.log(json);

      actorInfo = `Here is the information for the actor "${person.name}" :\n\nGender: ${person.gender}\n\nBirthday: ${moment(person.birthday).format("MM/DD/YYYY")}\n\nCountry: ${person.country.name}\n\nURL: ${person.url}\n\n\n`;

      console.log("actorInfo", actorInfo);

      fs.appendFile('logActor.txt', actorInfo, function (err) {
        if (err) throw err;
        console.log('logActor.txt was appended.');
      }); //close appendFile

    }); //close request

  }; //close .findActor



}; //close TV constructor

module.exports = TV;
