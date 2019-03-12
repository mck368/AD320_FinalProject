// Initiallising node modules
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mc = require('./db');

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// GET API
app.get('/', function (req, res) {
    return res.send({ error: true, message: 'Hello, I Love Movies!!' })
});

app.get('/api/all', function (req, res) {
    mc.query('SELECT * FROM movieinfo', function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'All list.' });
    });
});

app.get('/api/:id', function (req, res) {
 
    let movie_id = req.params.id;
  
    mc.query('SELECT * FROM movieinfo WHERE MovieId=?', movie_id, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results[0], message: 'Movie list.' });
    }); 
});

app.get('/search/:keyword', function (req, res) {
    
    let keyword = req.params.keyword;
    
    mc.query('SELECT * FROM movieinfo WHERE Title LIKE ?  limit 3', ['%' + keyword + '%'], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'Movie search list.' });
    });
});

app.post('/add/:title', function (req, res) { 
    
    let title = req.params.title; 
    
    if (!title) {
        return res.status(400).send({ error:true, message: 'Please provide title' });
    } 

    mc.query('INSERT INTO movieinfo SET ? ', { title: title }, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'New movie has been created successfully.' });
    });
});

app.put('/update/:id', function (req, res) { 

    let movie_id = req.params.id;
    let title = req.query.title;
 
    mc.query('UPDATE movieinfo SET Title = ? WHERE MovieID = ?', [ title, movie_id ], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'Movie has been updated successfully.' });
    });
}); 

app.delete('/del/:id', function (req, res) {
 
    let movie_id = req.params.id;
 
    mc.query('DELETE FROM movieinfo WHERE MovieID = ?', [movie_id], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'Movie has been updated successfully.' });
    });
});

// Setting up server
app.listen(8080, function () {
    console.log('Node app is running on port 8080');
}); 

module.exports = app;