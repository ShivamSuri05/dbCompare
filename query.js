
// pick up queries from input folder
// fun(db1,db2,query) async function which will run simultaneously
// export output1 and output2

const config = require('./database2/config').Config
// make connection to both dbs

function conn2(){
    console.log('In query',config);
}

module.exports = conn2;
