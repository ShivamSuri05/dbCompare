const ConfigDB1 = require('./config/configDB1').configure
const ConfigDB2 = require('./config/configDB2').configure
const db1 = require('./query').connection1;
const db2 = require('./query').connection2;

console.log(process.argv)

if(process.argv[2]){
    ConfigDB1(JSON.parse(process.argv[2]));
    db1();
}
else{
    console.error("No configurations found for DB1. Please Enter Database Configuration")
}

if(process.argv[3]){
    ConfigDB2(JSON.parse(process.argv[3]));
    db2();
}
else{
    console.error("No configurations found for DB2. Please Enter Database Configuration")
}

