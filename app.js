const ConfigDB1 = require('./database1/config')
const ConfigDB2 = require('./database2/config').configure
const db2 = require('./query');
//console.log("Hello")

console.log(process.argv)

//const db1 = JSON.parse(process.argv[2])
//const db2 = process.argv[3]

// console.log(db1)
// console.log(db1.name)
// console.log(db1.age)
// console.log(db2)
// console.log(typeof(db2))
// console.log(db2.name)

if(process.argv[2]){
    ConfigDB1(JSON.parse(process.argv[2]));
}
else{
    console.error("No configurations found for DB1. Please Enter Database Configuration")
}

if(process.argv[3]){
    ConfigDB2(JSON.parse(process.argv[3]));
    console.log('here',db2)
}
else{
    console.error("No configurations found for DB2. Please Enter Database Configuration")
}

