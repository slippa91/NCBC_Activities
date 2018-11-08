var search = process.argv[2];
var term = process.argv.slice(3).join(" ");
console.log("search, ", search, "term, ", term);

var TV = require("./13-tv.js");

var tv = new TV();

function searchTerm() {
  if (!search) {
    search = "show";
  }
  console.log("il", search);

  if (!term) {
    term = "Andy Griffith";
  }
  console.log("il", term);

  lookUp(search, term);

}

function lookUp(search, term) {

  if (search === "show") {
    console.log(`Show: We are searching for the ${search} named ${term}.`)
    tv.findShow(term);
  } else {
    console.log(`Actor: We are searching for the ${search} named ${term}.`)
  }

}

searchTerm();