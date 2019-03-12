var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const db = require('../db');

// Body Parser Middleware
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

//this needs to be replaced eventually with a direct connection to the database
var movieData = [{"MovieID":1,"Title":"Glass","Rating":"R","Genre":"Thriller","ReleaseDate":"2019-03-01T08:00:00.000Z","StarRating":4.5,"MovieLanguage":"English"},{"MovieID":2,"Title":"Matrix","Rating":"R","Genre":"Thriller","ReleaseDate":"2019-03-01T08:00:00.000Z","StarRating":3.1,"MovieLanguage":"English"},{"MovieID":3,"Title":"Lego Movie","Rating":"PG","Genre":"Comedy","ReleaseDate":"2019-03-01T08:00:00.000Z","StarRating":4.3,"MovieLanguage":"English"},{"MovieID":4,"Title":"Requiem for a Dream","Rating":"G","Genre":"Thriller","ReleaseDate":"2019-03-01T08:00:00.000Z","StarRating":2,"MovieLanguage":"English"},{"MovieID":5,"Title":"The Truman Show","Rating":"PG-13","Genre":"Thriller","ReleaseDate":"2019-03-01T08:00:00.000Z","StarRating":4.4,"MovieLanguage":"English"},{"MovieID":6,"Title":"Big Daddy","Rating":"R","Genre":"Comedy","ReleaseDate":"2019-03-01T08:00:00.000Z","StarRating":4.3,"MovieLanguage":"English"},{"MovieID":7,"Title":"Happy Gilmore","Rating":"R","Genre":"Comedy","ReleaseDate":"2019-03-01T08:00:00.000Z","StarRating":4.5,"MovieLanguage":"English"},{"MovieID":8,"Title":"Inception","Rating":"R","Genre":"Thriller","ReleaseDate":"2019-03-01T08:00:00.000Z","StarRating":4.5,"MovieLanguage":"English"},{"MovieID":9,"Title":"Murder By Numbers","Rating":"R","Genre":"Horror","ReleaseDate":"2019-03-01T08:00:00.000Z","StarRating":4.9,"MovieLanguage":"English"},{"MovieID":10,"Title":"Elf","Rating":"G","Genre":"Comedy","ReleaseDate":"2019-03-01T08:00:00.000Z","StarRating":4.2,"MovieLanguage":"English"},{"MovieID":11,"Title":"Ace Ventura","Rating":"PG","Genre":"Comedy","ReleaseDate":"2019-03-01T08:00:00.000Z","StarRating":4.4,"MovieLanguage":"English"},{"MovieID":12,"Title":"50 First Dates","Rating":"PG","Genre":"Comedy","ReleaseDate":"2019-03-01T08:00:00.000Z","StarRating":4.3,"MovieLanguage":"English"},{"MovieID":13,"Title":"Raiders of the Lost Arc","Rating":"PG","Genre":"Action","ReleaseDate":"1981-06-12T07:00:00.000Z","StarRating":8.5,"MovieLanguage":"English"},{"MovieID":14,"Title":"The Breakfast Club","Rating":"R","Genre":"Drama","ReleaseDate":"1989-02-15T08:00:00.000Z","StarRating":7.9,"MovieLanguage":"English"},{"MovieID":15,"Title":"Goonies","Rating":"PG","Genre":"Comedy","ReleaseDate":"1989-06-07T07:00:00.000Z","StarRating":7.8,"MovieLanguage":"English"},{"MovieID":16,"Title":"Alice In Wonderland","Rating":"PG","Genre":"Fantasy","ReleaseDate":"1999-02-28T08:00:00.000Z","StarRating":6.3,"MovieLanguage":"English"},{"MovieID":17,"Title":"Die Hard","Rating":"R","Genre":"Action","ReleaseDate":"1988-07-20T07:00:00.000Z","StarRating":8.2,"MovieLanguage":"English"},{"MovieID":18,"Title":"Home Alone","Rating":"PG","Genre":"Family","ReleaseDate":"1990-11-16T08:00:00.000Z","StarRating":7.5,"MovieLanguage":"English"},{"MovieID":19,"Title":"The Grudge","Rating":"PG-13","Genre":"Horror","ReleaseDate":"2004-10-22T07:00:00.000Z","StarRating":7.3,"MovieLanguage":"English"},{"MovieID":20,"Title":"Cinderella","Rating":"G","Genre":"Family","ReleaseDate":"1950-03-04T08:00:00.000Z","StarRating":7.8,"MovieLanguage":"English"},{"MovieID":21,"Title":"Kill Bill","Rating":"R","Genre":"Action","ReleaseDate":"2003-10-10T07:00:00.000Z","StarRating":8.1,"MovieLanguage":"English"},{"MovieID":22,"Title":"Chariots of Fire","Rating":"PG","Genre":"Sports","ReleaseDate":"1982-04-09T08:00:00.000Z","StarRating":7.2,"MovieLanguage":"English"},{"MovieID":23,"Title":"Planes, Trains, and Automobiles","Rating":"R","Genre":"Comedy","ReleaseDate":"1987-11-25T08:00:00.000Z","StarRating":7.6,"MovieLanguage":"English"},{"MovieID":24,"Title":"Anchorman","Rating":"PG-13","Genre":"Comedy","ReleaseDate":"2004-07-09T07:00:00.000Z","StarRating":7.2,"MovieLanguage":"English"},{"MovieID":25,"Title":"Halloween","Rating":"R","Genre":"Horror","ReleaseDate":"1978-10-27T07:00:00.000Z","StarRating":7.8,"MovieLanguage":"English"},{"MovieID":26,"Title":"Blair Witch Project","Rating":"R","Genre":"Horror","ReleaseDate":"1999-07-30T07:00:00.000Z","StarRating":6.4,"MovieLanguage":"English"}];

/*General page*/
router.get('/', function(req, res, next) {
  var data = {
    title: 'Movies',
    movies: movieData
  }
  res.render('Movies', data);
});


/*display all contents of movie table from database*/
router.get('/api/all', function(req, res, next) {
  db.query("SELECT * FROM movieinfo", function (err, result, fields) {
    if (err) {
      res.status(500).send(error);
    }
    res.send(result);
  });
});

router.get('/api/simple', function(req, res, next) {
  db.query("select title, rating, genre from movieinfo", (error, result, fields) => {
    if (error) {
      res.status(500).send(error);
    }
    res.send(result);
  });
});

router.get('/api/:id', function (req, res) {
 
    let movie_id = req.params.id;
  
    db.query('SELECT * FROM movieinfo WHERE MovieId=?', movie_id, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results[0], message: 'Movie list.' });
    }); 
});

router.get('/api/search/:keyword', function (req, res) {
    
    let keyword = req.params.keyword;
    
    db.query('SELECT * FROM movieinfo WHERE Title LIKE ? limit 3', ['%' + keyword + '%'], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'Movie search list.' });
    });
});

router.post('/api/add/:title', function (req, res) { 
    
    let title = req.params.title; 
    
    if (!title) {
        return res.status(400).send({ error:true, message: 'Please provide title' });
    } 

    db.query('INSERT INTO movieinfo SET ? ', { title: title }, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'New movie has been created successfully.' });
    });
});

router.put('/api/update/:id', function (req, res) { 

    let movie_id = req.params.id;
    let title = req.query.title;
 
    db.query('UPDATE movieinfo SET Title = ? WHERE MovieID = ?', [ title, movie_id ], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'Movie has been updated successfully.' });
    });
}); 

router.delete('/api/del/:id', function (req, res) {
 
    let movie_id = req.params.id;
 
    db.query('DELETE FROM movieinfo WHERE MovieID = ?', [movie_id], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'Movie has been updated successfully.' });
    });
});

module.exports = router;