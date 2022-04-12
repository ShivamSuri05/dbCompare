// fun(db1,db2,query) async function which will run simultaneously
// export output1 and output2

let config1 = require('./config/configDB1').Config
let config2 = require('./config/configDB2').Config
var mysql = require('mysql2');
const inputFolder = './input';
const fs = require('fs');

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
//hitquery();
}

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

// pick up queries from input folder
function readInputFolder(){
    fs.readdir(inputFolder, (err, files) => {
        if(err){
            console.log('Error Reading Input folder');
        }
    files.forEach(file => {
        //Read query from the file and log
        console.log(file);
        fs.readFile(process.cwd()+'//input//'+file, 'utf8', function(err, data) {
            if (err)
            console.log(err);
            const query = data;
            console.log(query);
          });
      });
    });
}

module.exports = {connection1,connection2}; //conn2 will be replaced by output file that we will write

(function() {
    connection1();
    connection2();
    readInputFolder();
    hitquery();
  })();