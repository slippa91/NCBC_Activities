var search = process.argv[2];
var term = process.argv.slice(3).join(" ");
//console.log("s", search, "t", term);

var TV = require("./14-sflTv.js");

var tv = new TV();

function sT() {
  if (!search) {
    search = "show";
  }
  //console.log("il", search);

  if (!term) {
    term = "Andy Griffith";
  }
  //console.log("il", term);

  lookUp(search, term);

}

function lookUp(search, term) {

  if (search === "show") {
    //console.log(`Show: We are searching for the ${search} named ${term}.`)
    tv.findShow(term);
  } else {
    //console.log(`Actor: We are searching for the ${search} named ${term}.`)
    tv.findActor(term);
  }

}

sT();