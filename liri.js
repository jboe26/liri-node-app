require("dotenv").config();

// Use node inquirer to get user input
// var inquirer = require('inquirer');
// Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)
var axios = require("axios");
// Includes the FS package for reading and writing packages
var fs = require("fs");
// require keys.js
var keys = require("./keys.js");
// require spotify-node-app
var Spotify = require('node-spotify-api');
// require OMDB
var omdb = require('omdb');


// // prompt the user to select an option from the list
// inquirer.prompt([

//     {
//         type: "list",
//         name: "commands",
//         message: "Make a selection for LIRI to do!",
//         choices: ["concert-this", "spotify-this-song", "movie-this", "do-what-it-says"]
//     },

//     {
//         type: "input",
//         name: "userInput",
//         message: "What artist/band would you like?"
//     }

// After the prompt, store the user's response in a variable called location.

// ])
// .then(function (inquirerResponse) {
//     console.log(inquirerResponse) 
// })

var command = process.argv[2];
var search = process.argv[3];

// make a decision based on the command
switch (command) {
  case "concert-this":
    concertThis(search);
    break;
  case "spotify-this":
    spotifyThisSong(search);
    break;
  case "movie-this":
    movieThis(search);
    break;
  case "do-what-it-says":
    doThis(search);
    break;
}


// Running the readFile module that's inside of fs.
// Stores the read information into the variable "data"
fs.readFile("random.txt", "utf8", function (err, data) {
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


function concertThis() {



  // Then run a request with axios to the OMDB API with the movie specified
  axios.get(("https://rest.bandsintown.com/artists/" + search + "/events?app_id=codingbootcamp"))
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

function spotifyThisSong() {

  var spotify = new Spotify(keys.spotify);
  console.log(spotify);

  var spotify = new Spotify({
    id: "4d227c9d03e444359cd1ae63898cb027",
    secret: "a20503eecb1741c3938ea49a95259f6e"
  });

  spotify.search({ type: 'track', query: 'The Sign' }, function (err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }

    console.log(data);
  });


  Spotify
    .request('https://api.spotify.com/v1/tracks/trilogy')
    .then(function (data) {
      console.log(data);
      console.log(spotify);
    })
    .catch(function (err) {
      console.error('Error occurred: ' + err);
    });

}


function movieThis() {

  // Then run a request with axios to the OMDB API with the movie specified
  axios.get("http://www.omdbapi.com/?t=" + search + "&y=&plot=short&apikey=trilogy")
    .then(
      function (response) {
        console.log("+++++++++++++++++++++++++++++++++++++++++++++++");
        console.log("Title: " + response.data.Title);
        console.log("Year: " + response.data.Year);
        console.log("IMDB Rating: " + response.data.imdbRating);
        console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1]);
        console.log("Country of origin: " + response.data.Country);
        console.log("Language: " + response.data.Language);
        console.log("Plot: " + response.data.Plot);
        console.log("Actors/Actresses: " + response.data.Actors);
        console.log("+++++++++++++++++++++++++++++++++++++++++++++++");
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

function doThis() {



}
