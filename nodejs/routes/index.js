var express = require('express');
var db = require('../db/basic');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    db(function(err,connenction){
        connenction.query('SELECT * FROM MEMBER', function(err, rows) {
          if (err) throw err;
          res.send(rows);
          connenction.release();
        })
    });
});

/* GET home page. */
router.post('/login', function(req, res, next) {
    console.log("SELECT * FROM MEMBER WHERE EMAIL = '"+ req.body.email+"' AND PASSWORD = '" + req.body.password+"'");
    db(function(err,connenction){
        connenction.query("SELECT * FROM MEMBER WHERE EMAIL = '"+ req.body.email+"' AND PASSWORD = '" + req.body.password+"'",
            function(err, rows) {
                if (err) throw err;
                res.send(rows);
                connenction.release();
        })
    });
});

module.exports = router;
