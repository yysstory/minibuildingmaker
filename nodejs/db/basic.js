/**
 * Created by yongsik on 2016-02-12.
 */
var mysql      = require('mysql');
var pool = mysql.createPool({
    connectionLimit : 1000,
    host     : 'leafbudz.asuscomm.com',
    user     : 'yysstory',
    password : 'alwjr425',
    database    : 'minibuildingmaker'
});

var getConnection = function(callback){
    pool.getConnection(function(err,connection) {
        callback(err,connection);
    });
};
module.exports = getConnection;
