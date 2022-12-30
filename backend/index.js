//Imports
import express from "express";

import db from "./config/database.js"

import * as dotenv from 'dotenv'
dotenv.config()


//Creating the server
const app = express();



//Declaring variables
const PORT =  process.env.port || 4000;

//DB
db();


//Running the server
app.listen(PORT, () =>{
    console.log("APP LISTENING ON PORT: ", PORT)
})