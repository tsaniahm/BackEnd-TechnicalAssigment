const mongoose = require("mongoose")
const dotenv = require("dotenv")

async function openDBConnection(uri, options){
    return mongoose.connect(uri, options)
}

module.exports = openDBConnection