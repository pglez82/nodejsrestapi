const mongoose = require("mongoose")


const schema = mongoose.Schema({
    deviceId: String,
    lat: String,
    long: String,
    encounters : { type : Array , "default" : [] }
})

module.exports = mongoose.model("Device", schema)