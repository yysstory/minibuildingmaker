var express = require('express');
var db = require('../db/basic');
var router = express.Router();

/*로그인*/
router.post('/login', function(req, res, next) {
    console.log("SELECT * FROM MEMBER WHERE EMAIL = '"+ req.body.email+"' AND PASSWORD = '" + req.body.password+"'");
    db(function(err,connenction){
        connenction.query("SELECT * FROM MEMBER WHERE EMAIL = '"+ req.body.email+"' AND PASSWORD = '" + req.body.password+"'",
            function(err, rows) {
                if (err)
                    throw err;
                res.send(rows);
                connenction.release();
            })
    });
});


router.post('/withdrawal', function(req, res, next) {
    console.log("DELETE FROM MEMBER WHERE EMAIL = '"+ req.body.email+"' AND PASSWORD = '" + req.body.password+"'");
    db(function(err,connenction){
        connenction.query("DELETE FROM MEMBER WHERE EMAIL = '"+ req.body.email+"' AND PASSWORD = '" + req.body.password+"'",
            function(err, rows) {
                if (err)
                    throw err;
                res.send(rows);
                connenction.release();
            })
    });
});

router.post('/join', function(req, res, next) {
    console.log("INSERT INTO MEMBER (NAME,EMAIL,PASSWORD) VALUES ('" +req.body.name+"','"+req.body.email+"','" +req.body.password+"')");
    db(function(err,connenction){
        connenction.query("INSERT INTO MEMBER (NAME,EMAIL,PASSWORD) VALUES ('" +req.body.name+"','"+req.body.email+"','" +req.body.password+"')",
            function(err, rows) {
                if (err)
                    throw err;
                res.send(rows);
                connenction.release();
            })
    });
});

module.exports = router;
