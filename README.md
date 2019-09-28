# liri-node-app
Welcome to LIRI, an app similar to SIRI, however instead of being a Speech Interpretation and Recongnition Interface liri is a Language Interpretation and Recongmition Interface.  Liri is also a command line node app that takes the below commands to return data to you.
### Commands for liri
* concert-this
* spotify-this-song
* movie-this
* do-what-it-says
### What each command does
For the node liri.js cocert-this <band/artist> command it will take whatever band or artist that the user puts in and surches the Bands in Town API and show where they are playing, and when using moments "MM/DD/YYYY" format.
For the node liri.js spotify-this-song <song name> it will surch Spotify and show who the artist(s) the song name a link to preview the song and what album its from. If there is nothing given then it will surch "The Sign" by Ace of Base.
For the node liri.js movie-this <movie name> it will look though the OMDB API and show the the title of the movie, the year it came out, the rating form IMDB, the Rotten Tomatoes rating, the country the movie was made in, the language, and the list of actors who play in it. If there's nothing surched it will defult to the movie "Mr. Nobody".
For the node liri.js do-what-it-says command it will take information for the random.txt file and run the whatever command is in there at the time.
### Screenshots
