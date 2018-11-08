const fs = require('fs');

// Write a function that logs a message, then executes
// a function argument.

function first(string, func) {
    console.log(string);
    func()
}

first("my message", function () {
    console.log("this is the function");
})


// Write a function that runs a function argument if
// its other argument is truthy.

function second(bool, func) {
    if (bool) {
        func();
    }
}

second(true, function () {
    console.log("TRUTH");
})

// Write a function that accepts a function argument and
// a value, and returns a function that returns the result
// of executing the function argument with the value.
// This isn't as hard as it sounds!

var third = function (func, value) {
    return function () {
        return func(value);
    }
}

var capMessage = third(function (string) {
    return string.toUpperCase();
}, "my message")()

console.log(capMessage);



var capFunction = third(function (string) {
    return string.toUpperCase();
}, "my message");

var capMessage = capFunction();

console.log(capMessage);



var lowerFunction = third(function (string) {
    return string.toLowerCase();
}, "I'm SHOUTING!");

var lowerMessage = lowerFunction();

console.log(lowerMessage);



// Use fs.writeFile to log a message to a file called
// log.txt.Are yo using callbacks anywhere ? Where ?


fs.writeFile("log.txt", "Log message!", function (err) {

    if (err) {
        console.log(err);
    }

    console.log("File saved!");

})










// var request = require("request");
// var needle = require("needle");

// var getInfo = function (apiCaller, url) {
//     return function (term) {
//         return apiCaller(url + term, function (err, response, body) {
//             console.log(response.body);
//         })
//     }
// }

// var getShowInfo = getInfo(request, "http://api.tvmaze.com/singlesearch/shows?q=");
// var getActorInfo = getInfo(needle.get, "http://api.tvmaze.com/search/people?q=");

// console.log(getShowInfo("Lost"));
// console.log(getActorInfo("Evangeline Lilly"));

