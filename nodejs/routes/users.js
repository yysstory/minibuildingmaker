var express = require('express');
var db = require('../db/basic');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    db(function(err,connenction){
      connenction.query('SELECT * FROM MEMBER', function(err, rows) {
        if (err) throw err;
        res.send(rows);
        connenction.release();
      })
    });
});

module.exports = router;
