const express = require("express")
const mongoose = require("mongoose")
const routes = require("./routes") 


// Connect to MongoDB database
mongoose.connect("mongodb://mongoserver:27017/bltappdb", { useNewUrlParser: true }).then(() => {
    const app = express()
    app.use(express.json())
    app.use("/api", routes)
	app.listen(5000, () => {
		console.log("Server has started!")
	})
})

