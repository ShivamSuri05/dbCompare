const ConfigDB1 = require('./config/configDB1').configure
const ConfigDB2 = require('./config/configDB2').configure


console.log(process.argv)

if(process.argv[2] && process.argv[3]){
    ConfigDB1(JSON.parse(process.argv[2]));
    ConfigDB2(JSON.parse(process.argv[3]));
}
else{
    console.error("No configurations found for Databases. Please Enter Database Configurations")
}

const db1 = require('./query');

