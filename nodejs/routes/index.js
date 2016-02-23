var express = require('express');
var db = require('../db/basic');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    db(function(err,connenction){
/*        connenction.query('SELECT * FROM MEMBER', function(err, rows) {
          if (err) throw err;
          res.render('index', {rows : rows});
          connenction.release();
        })*/
    });
    res.render('index', {rows : rows});
});

module.exports = router;
