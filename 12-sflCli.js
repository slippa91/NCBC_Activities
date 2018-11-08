// Write code here to parse command line arguments and store them into variables
// Add code to print whether the user is searching for an actor or tv show, along with the name of the actor or tv show they are searching for

var search = process.argv[2];
var term = process.argv.slice(3).join(" ");
console.log("s", search, "t", term);


function lookUp(search, term) {
  if (search === "show") {
    console.log(`Show: We are searching for the ${search} named ${term}.`)
  } else {
    console.log(`Actor: We are searching for the ${search} named ${term}.`)
  }
}

lookUp(search, term);