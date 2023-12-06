//loads .env file contents into process.env by default
require('dotenv').config()
const express = require('express')
const cors = require('cors')
//create an express application
const pfServer = express()
const router = require('./Routes/router')
require('./DB/connection')

pfServer.use(cors())
pfServer.use(express.json())
pfServer.use(router)

const PORT = 4000 || process.env.PORT

pfServer.listen(PORT,()=>{
    console.log(`project Fair Server started at port:${PORT} and waiting for client requestes`);
})
//http get request resolving to http://localhost:4000/
pfServer.get('/',(req,res)=>{
        res.send(`<h1>Project Fair Server started and waiting for client requestes`)
})

