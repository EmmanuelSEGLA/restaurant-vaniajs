const express = require("express")
const cors = require("cors")
const mysql = require("mysql")

const app = express()

app.use(cors())

app.use((req,res)=>{
    res.end("Hello")
})


app.listen(process.env.port || 5000)