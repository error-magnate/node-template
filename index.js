// To run the project in development mode use 'npm run dev-start'

const express = require("express");
const { json } = require("body-parser")
const cors = require("cors")
const dotenv = require("dotenv")
require('./utils/database-connection')

dotenv.config()
const app = express()
app.use(json())
app.use(cors())


// The port number on which the server must run
const PORT = process.env.PORT || 8000

app.listen(PORT,(err)=>{
  if(err){
    console.log(err)
  }else{
    console.log("Server is running on :"+ PORT)
  }
})
