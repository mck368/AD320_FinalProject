var express = require('express');
var router = express.Router();
const db = require('../db');

/* GET friends page. */
router.get('/', function(req, res, next) {
  
  const data = {
    title: 'Friends Page'
  }

  res.render('friends', data);
});

/*display all contents of movie table from database*/
router.get('/api/all', function(req, res, next) {
  db.query("SELECT * FROM users", function (err, result, fields) {
    if (err) {
      res.status(500).send(error);
    }
    res.send(result);
  });
});

router.get('/api/:name', function (req, res) {
 
    let user_name = req.params.name;
  
    db.query('SELECT * FROM users WHERE userName=?', user_name, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results[0], message: 'Friends list.' });
    }); 
});

router.get('/api/search/:keyword', function (req, res) {
    
    let keyword = req.params.keyword;
    
    db.query('SELECT * FROM users WHERE userName LIKE ?', ['%' + keyword + '%'], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'Friends search list.' });
    });
});

router.post('/api/add/:name', function (req, res) { 
    
    let user_name = req.params.name; 
    
    if (!user_name) {
        return res.status(400).send({ error:true, message: 'Please provide user name' });
    } 

    db.query('INSERT INTO users SET ? ', { userName: user_name }, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'New user name has been created successfully.' });
    });
});

router.put('/api/update/:name', function (req, res) { 

    let user_name = req.params.name;
    let email = req.query.email;
 
    db.query('UPDATE users SET Email = ? WHERE userName = ?', [ email, user_name ], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'User name has been updated successfully.' });
    });
}); 

router.delete('/api/del/:name', function (req, res) {
 
    let user_name = req.params.name;
 
    db.query('DELETE FROM users WHERE userName = ?', [user_name], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'User name has been updated successfully.' });
    });
});

module.exports = router;