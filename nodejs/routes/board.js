
var express = require('express');
var db = require('../db/basic');
var router = express.Router();


router.post('/create', function(req, res, next) {
    console.log("INSERT INTO BOARD (MEM_NO,TITLE,CONTENT,REG_DATE) VALUES ('" +req.body.memNo+"','"+req.body.title+"','"+req.body.content+"','" +"',CURDATE())");
    db(function(err,connenction){
        connenction.query("INSERT INTO BOARD (MEM_NO,TITLE,CONTENT,REG_DATE) VALUES ('" +req.body.memNo+"','"+req.body.title+"','"+req.body.content+"','" +"',CURDATE())",
            function(err, rows) {
                if (err)
                    throw err;
                res.send(rows);
                connenction.release();
            })
    });
});

/*router.post('/read', function(req, res, next) {
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

router.post('/delete', function(req, res, next) {
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
});*/

module.exports = router;
