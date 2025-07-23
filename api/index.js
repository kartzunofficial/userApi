require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");
const app = express();
const connection = mysql.createConnection({
    host:process.env.HOST,
    user :process.env.USER,
    database:process.env.DATABASE,
    password:process.env.PASSWORD
})

app.get("/users", (req, res)=>{
    connection.query("SELECT * FROM userData", (err,result)=>{
      res.send(result);
    })
});

module.exports = app;