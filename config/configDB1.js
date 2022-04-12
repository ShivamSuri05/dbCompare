<<<<<<< HEAD
let Config = {}

function configure(db){
    Config.name = db.name
    Config.age = db.age
    console.log('from DB1')
    show();
}
function show(db){
    console.log("From show")
    console.log(Config)
=======
let Config = {
    host: "localhost",
    user: "default",
    password: "default",
    database: "root"
}

function configure(db){
    Config.host = db.host
    Config.user = db.user
    Config.password = db.password
    Config.database = db.database
    console.log('from DB1')
>>>>>>> 00654b7 (Added functionality for reading input folder and done some relevant changes)
}

module.exports = configure;