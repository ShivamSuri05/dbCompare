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
}

module.exports = {configure,Config};