'user strict';

var sql = require('./db.js');

var Movie = function(movie){
    this.movie = movie.movie;
    this.Title = movie.title;
    this.Rating = movie.rating;
    this.Genre = movie.genre;
    this.ReleaseDate = movie.date;
    this.StarRating = movie.rating;
    this.MovieLanguage = movie.language;
};

Movie.getAllMovie = function getAllMovie(result) {
        sql.query("SELECT * from movieinfo", function (err, res) {
                if(err) {
                   console.log("error: ", err);
                   result(null, err);
                }
                else{
                   console.log('movie : ', res);
                   result(null, res);
                }
            }); 
Movie.getMovieById = function createUser(movieId, result) {
        sql.query("Select * from movieinfo where MovieId = ? ", movieId, function (err, res) {             
                if(err) {
                   console.log("error: ", err);
                   result(err, null);
                }
                else{
                   result(null, res);              
                }
            });  
module.exports = Movie;