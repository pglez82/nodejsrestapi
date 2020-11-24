const express = require("express")
const mongoose = require("mongoose")
const routes = require("./routes") 

function connect(){
    //We need to change this connection from localhost we put everything in docker-compose
    mongoose.connect("mongodb://mongoserver:27017/bltappdb", { useNewUrlParser: true }).then(() => {
        const app = express()
        app.use(express.json())
        app.use("/api", routes)
        app.listen(5000, () => {
            console.log("Server has started!")
        })
    })
}

// Connect to MongoDB database, the wait is for giving time to mongodb to finish loading
setTimeout(connect,5000)

