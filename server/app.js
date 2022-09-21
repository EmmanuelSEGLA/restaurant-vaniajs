const express = require("express")
const cors = require("cors")
const mysql = require("mysql")

const app = express()

app.use(cors())

const dataBase = mysql.createConnection(
    {
        host:"localhost",
        user:"bwss",
        password:"manoubwss",
        database:"restaurant"

    }
)
dataBase.connect((err)=>{
    if (err) {
        throw(err)
    }
    console.log("dataBase Connecté");
})

app.use((req,res)=>{
    res.end("Hello")
})


app.listen(process.env.port || 5000)