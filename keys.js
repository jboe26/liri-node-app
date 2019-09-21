console.log('this is loaded');

exports.spotify = {
  id: process.env.id,
  secret: process.env.secret
};

var keys = require("./keys.js");

// var spotify = new Spotify(keys.spotify);

var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: "4d227c9d03e444359cd1ae63898cb027",
  secret: "a20503eecb1741c3938ea49a95259f6e"
});
 
spotify.search({ type: 'track', query: 'spotify-this-song' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});


spotify
  .request('https://api.spotify.com/v1/tracks/trilogy')
  .then(function(data) {
    console.log(data); 
  })
  .catch(function(err) {
    console.error('Error occurred: ' + err); 
  });