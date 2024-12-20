const mongoose = require('mongoose')
require('dotenv').config()

exports.dbconnection = () =>{
    mongoose.connect(process.env.MONGODB_URL_MEDIA_APP).then(()=>{console.log("DB is sucessfully run..")}).catch((error)=>{
        console.log("Thing won't tp wrong db is connet to the server.",error)
        process.exit(1)
    })
}