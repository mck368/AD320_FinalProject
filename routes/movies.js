var express = require('express');
var router = express.Router();
const db = require('../db');

/*General page*/
router.get('/', function(req, res, next) {
  var data = {
    title: 'Movies',
  }
  res.render('movies', data);
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