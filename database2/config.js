let Config = {}

function configure(db){
    Config.name = db.name
    Config.age = db.age
    console.log('from DB2')
    show();
}
function show(db){
    console.log("From show")
    //console.log(Config)
}

module.exports = {configure,Config};