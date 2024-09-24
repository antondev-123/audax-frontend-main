var express = require('express');
var router = express.Router();
var users = require('../module/user');
var q = require('q');

/* GET users listing. */
module.exports = (connection) => {
    router.get('/', function(req, res, next) {
        res.send('respond with a resource');
    });
    router.post('/new', function(req, res, next) {
        console.log();
        var sql = `INSERT INTO ${users.formulateInsertQuery(req.body, 'users')}`;
        connection.connect(function(error) {
            connection.query(sql, (err, result) => {
                if(result.insertId > 0) {
                    res.json("success")
                } else {
                    res.json("error")
                }
            })
        });
    });
    
    return router;
}
