// fun(db1,db2,query) async function which will run simultaneously
// export output1 and output2
const config = require('./config/configDB2').Config
const inputFolder = './input';
const fs = require('fs');

let config1 = require('./database1/config').Config
let config2 = require('./database2/config').Config
var mysql = require('mysql2');
// make connection to both dbs

let con1,con2;
function connection1(){
    console.log('In query',config1);
    con1 = mysql.createConnection({
    host: config1.host,
    user: config1.user,
    password: config1.password,
    database: config1.database
  });
}
function connection2(){
    console.log('In query',config2);
    con2 = mysql.createConnection({
    host: config2.host,
    user: config2.user,
    password: config2.password,
    database: config2.database
});
hitquery();
}
// node app.js '{"host":"localhost","user":"shivam","password":"qwerty777","database":"oldDatabase"}' '{"host":"localhost","user":"shivam","password":"qwerty777","database":"newDatabase"}'
function hitquery(){
    con1.connect(function(err) {
        if (err) throw err;
        con1.query("SELECT * FROM employee", function (err, result, fields) {
          if (err) throw err;
          console.log('From DB1')
          console.log(result);
        });
    });
    con2.connect(function(err) {
        if (err) throw err;
        con2.query("SELECT * FROM employee", function (err, result, fields) {
          if (err) throw err;
          console.log('From DB2')
          console.log(result);
        });
    });
}

module.exports = {connection1,connection2};
