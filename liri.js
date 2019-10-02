require("dotenv").config();

// Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)
var axios = require("axios");
// Includes the FS package for reading and writing packages
var fs = require("fs");
// require keys.js
var keys = require("./keys.js");
// require spotify-node-app
var Spotify = require('node-spotify-api');


var command = process.argv[2];
var search = process.argv.slice(3).join(" ");
getCommand(command, search);

// make a decision based on the command
function getCommand(command, search) {

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
    case "do-this":
      doThis();
      break;

    default:
      console.log("Please enter something");
      break;
  }
}
function concertThis() {



  // Then run a request with axios to the OMDB API with the movie specified
  axios.get(("https://rest.bandsintown.com/artists/" + search + "/events?app_id=codingbootcamp"))
    .then(
      function (response) {
        for (var i = 0; i < response.data.length; i++) {
          console.log("+++++++++++++++++++++++++++++++++++++++");
          console.log("Venue name: ", response.data[i].venue.name);
          console.log("Location: ", response.data[i].venue.city);
          console.log("Date of the event: ", response.data[i].datetime);
        }
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

function spotifyThisSong(search) {

  var spotify = new Spotify(keys.spotify);
  console.log(spotify);

  spotify.search({ type: 'track', query: search }, function (err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }

    // console.log(data.tracks.items);
   // artist 
   console.log(data.artists);
    // song name
    console.log(data.name);
    // preview link
    console.log(data.preview_url);
    // album
    console.log(data.album.name);
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
        console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
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

  // Running the readFile module that's inside of fs.
  // Stores the read information into the variable "data"
  fs.readFile("random.txt", "utf8", function (error, data) {
    if (error) {
      return console.log(red("ERROR" + error));
    } else {
      // Break the string down by comma separation and store the contents into the output array.
      var output = data.split(",");
      console.log(output)

      command = output[0];
      search = output[1];
      getCommand(command, search);
    }

  });


}
