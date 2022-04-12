// fun(db1,db2,query) async function which will run simultaneously
// export output1 and output2
const config = require('./config/configDB2').Config
const inputFolder = './input';
const fs = require('fs');

// make connection to both dbs

function conn1(){
    console.log('Connection here to db 1');
}

function conn2(){
    console.log('Connection here to db 2')
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

module.exports = conn2; //conn2 will be replaced by output file that we will write

(function() {
    conn1();
    conn2();
    readInputFolder();
  })();