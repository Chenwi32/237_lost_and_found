import { AppDataSource } from "./data-source";
import { IdCard } from "./entity/IdCard";

// bring in environment variables from a .env file
require("dotenv").config()

// import express and morgan
const express = require("express")
const morgan = require("morgan")



AppDataSource.initialize().then(async () => {

    console.log("Inserting a new user into the database...")
    const user = new IdCard()
    user.location = "Timber"
    user.contact = "Saw"
    await AppDataSource.manager.save(user)
    console.log("Saved a new user with id: " + user.idNum)

    console.log("Loading users from the database...")
    const users = await AppDataSource.manager.find(IdCard)
    console.log("Loaded users: ", users)

// create an application object
const app = express()

// define a PORT variable from the environment with a default value
const PORT = process.env.PORT || 4000

/////////////////////////////////////
// ALL YOUR MIDDLEWARE AND ROUTES GO HERE
app.use(morgan("tiny")) // middleware for logging
app.use(express.urlencoded({extended: true})) //middleware for parsing urlencoded data
app.use(express.json()) // middleware for parsing incoming json
app.use("/static", express.static("static")) // to set a folder for static file serving
/////////////////////////////////////

// Server Listener
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))

}).catch(error => console.log(error))
