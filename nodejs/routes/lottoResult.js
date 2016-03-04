
var express = require('express');
var db = require('../db/basic');
var router = express.Router();

/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!작성중!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
router.post('/create', function(req, res, next) {
    console.log("INSERT INTO LOTTO_NUMBER (MEM_NO,NUM1,NUM2,NUM3,NUM4,NUM5,NUM6,ROUND,REG_DATE) " +
        "VALUES ('" +req.body.memNo+"','"+req.body.num1+"','"+req.body.num2+"','"+req.body.num3+"','"+req.body.num4+"','"+req.body.num5+"','"+req.body.num6+"','"+req.body.round+"',CURDATE())");
    db(function(err,connenction){
        connenction.query("INSERT INTO LOTTO_NUMBER (MEM_NO,NUM1,NUM2,NUM3,NUM4,NUM5,NUM6,ROUND,REG_DATE) " +
            "VALUES ('" +req.body.memNo+"','"+req.body.num1+"','"+req.body.num2+"','"+req.body.num3+"','"+req.body.num4+"','"+req.body.num5+"','"+req.body.num6+"','"+req.body.round+"',CURDATE())",
            function(err, rows) {
                if (err)
                    throw err;
                res.send(rows);
                connenction.release();
            })
    });
});

router.post('/read', function(req, res, next) {
    console.log("SELECT * FROM LOTTO_NUMBER WHERE MEM_NO ="+req.body.memNo);
    db(function(err,connenction){
        connenction.query("SELECT * FROM LOTTO_NUMBER WHERE MEM_NO ="+req.body.memNo,
            function(err, rows) {
                if (err)
                    throw err;
                res.send(rows);
                connenction.release();
            })
    });
});
router.post('/delete', function(req, res, next) {
    console.log("DELETE FROM LOTTO_NUMBER WHERE LOTTO_NO ="+req.body.lottoNo);
    db(function(err,connenction){
        connenction.query("DELETE FROM LOTTO_NUMBER WHERE LOTTO_NO ="+req.body.lottoNo,
            function(err, rows) {
                if (err)
                    throw err;
                res.send(rows);
                connenction.release();
            })
    });
});


/*
router.post('/update', function(req, res, next) {
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
*/

module.exports = router;
