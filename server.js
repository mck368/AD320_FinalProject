// Initiallising node modules
const express = require('express');
const app = express();
const mc = require('./db');

// Movies Page API
app.get('/', function (req, res) {
    return res.send({ error: true, message: 'Hello, I Love Movies!!' })
});

app.get('/movies/api/all', function (req, res) {
    mc.query('SELECT * FROM movieinfo', function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'All list.' });
    });
});

app.get('/movies/api/:id', function (req, res) {
 
    let movie_id = req.params.id;
  
    mc.query('SELECT * FROM movieinfo WHERE MovieId=?', movie_id, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results[0], message: 'Movie list.' });
    }); 
});

app.get('/movies/search/:keyword', function (req, res) {
    
    let keyword = req.params.keyword;
    
    mc.query('SELECT * FROM movieinfo WHERE Title LIKE ?  limit 3', ['%' + keyword + '%'], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'Movie search list.' });
    });
});

app.post('/movies/add/:title', function (req, res) { 
    
    let title = req.params.title; 
    
    if (!title) {
        return res.status(400).send({ error:true, message: 'Please provide title' });
    } 

    mc.query('INSERT INTO movieinfo SET ? ', { title: title }, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'New movie has been created successfully.' });
    });
});

app.put('/movies/update/:id', function (req, res) { 

    let movie_id = req.params.id;
    let title = req.query.title;
 
    mc.query('UPDATE movieinfo SET Title = ? WHERE MovieID = ?', [ title, movie_id ], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'Movie has been updated successfully.' });
    });
}); 

app.delete('/movies/del/:id', function (req, res) {
 
    let movie_id = req.params.id;
 
    mc.query('DELETE FROM movieinfo WHERE MovieID = ?', [movie_id], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'Movie has been updated successfully.' });
    });
});

// Friends Page API
app.get('/friends/api/all', function (req, res) {
    mc.query('SELECT * FROM users', function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'All list.' });
    });
});

app.get('/friends/api/:name', function (req, res) {
 
    let user_name = req.params.name;
  
    mc.query('SELECT * FROM users WHERE userName=?', user_name, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results[0], message: 'Friends list.' });
    }); 
});

app.get('/friends/search/:keyword', function (req, res) {
    
    let keyword = req.params.keyword;
    
    mc.query('SELECT * FROM users WHERE userName LIKE ?', ['%' + keyword + '%'], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'Friends search list.' });
    });
});

app.post('/friends/add/:name', function (req, res) { 
    
    let user_name = req.params.name; 
    
    if (!user_name) {
        return res.status(400).send({ error:true, message: 'Please provide user name' });
    } 

    mc.query('INSERT INTO users SET ? ', { userName: user_name }, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'New user name has been created successfully.' });
    });
});

app.put('/friends/update/:name', function (req, res) { 

    let user_name = req.params.name;
    let email = req.query.email;
 
    mc.query('UPDATE users SET Email = ? WHERE userName = ?', [ email, user_name ], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'User name has been updated successfully.' });
    });
}); 

app.delete('/friends/del/:name', function (req, res) {
 
    let user_name = req.params.name;
 
    mc.query('DELETE FROM users WHERE userName = ?', [user_name], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'User name has been updated successfully.' });
    });
});

// Setting up server
app.listen(8080, function () {
    console.log('Node app is running on port 8080');
}); 

module.exports = app;