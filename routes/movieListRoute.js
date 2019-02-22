'use strict';
module.exports = function(app) {
  var movieList = require('../controllers/movieListController');

  app.route('/movies')
    .get(movieList.list_all_movies);
   
  app.route('/movies/:movieId')
    .get(movieList.read_a_movie);
    
  };