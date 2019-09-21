// require("dotenv").config();

// Use node inquirer to get user input
var inquirer = require('inquirer');
// Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)
var axios = require("axios");
// Includes the FS package for reading and writing packages
var fs = require("fs");

// Running the readFile module that's inside of fs.
// Stores the read information into the variable "data"
fs.readFile("random.txt", "utf8", function(err, data) {
  if (err) {
    return console.log(err);
  }

  // Break the string down by comma separation and store the contents into the output array.
  var output = data.split(",");

  // Loop Through the newly created output array
  for (var i = 0; i < output.length; i++) {

    // Print each element (item) of the array/
    console.log(output[i]);
  }
});

// prompt the user to select an option from the list
inquirer.prompt([

    {
        type: "list",
        name: "commands",
        message: "Make a selection for LIRI to do!",
        choices: ["concert-this", "spotify-this-song", "movie-this", "do-what-it-says"]
    },

    {
        type: "input",
        name: "userInput",
        message: "What artist/band would you like?"
    }

    // After the prompt, store the user's response in a variable called location.

])
    .then(function (inquirerResponse) {
        console.log(inquirerResponse) 
    })

function userPrompt(command, userSearch) {
    // make a decision based on the command
    switch (command) {
        case "concert-this":
            concertThis();
            break;
        case "spotify-this":
            spotifyThisSong();
            break;
        case "movie-this":
            movieThis();
            break;
        case "do-what-it-says":
            doThis();
            break;
    }
}

function concertThis() {

    var artist = 


    // Then run a request with axios to the OMDB API with the movie specified
    axios.get(("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"))
        .then(
            function (response) {
                console.log(response.data);
            }
        )
        .catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log("---------------Data---------------");
                console.log(error.response.data);
                console.log("---------------Status---------------");
                console.log(error.response.status);
                console.log("---------------Status---------------");
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an object that comes back with details pertaining to the error that occurred.
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log("Error", error.message);
            }
            console.log(error.config);
        });

}