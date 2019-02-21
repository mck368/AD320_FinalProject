'use strict';

var Movie = require('../models/movieListModel');

exports.list_all_movie = function(req, res) {
  Movie.find({}, function(err, movie) {
    if (err)
      res.send(err);
      res.json(movie);
  });
};

exports.read_a_movie = function(req, res) {
  Movie.findById(req.params.movieId, function(err, movie){
    if (err)
      res.send(err);
      res.json(movie);
  });
};