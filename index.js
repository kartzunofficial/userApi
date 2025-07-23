require("dotenv").config();
const express = require("express");
const app = express();
const mysql = require("mysql2");

const conncetion = mysql.createConnection({
  host:process.env.HOST,
  user :process.env.USER,
  password:process.env.PASSWORD,
  database:process.env.DATABASE,
  port:process.env.PORT
});
app.listen(process.env.PORT);

app.get("/users", (req, res)=>{
    conncetion.query("SELECT * FROM userData", (err, result)=>{
      res.send(result)
    });
});