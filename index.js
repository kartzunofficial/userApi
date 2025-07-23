require("dotenv").config();
const express = require("express");
const app = express();
const mysql = require("mysql2");


app.listen(process.env.PORT);

app.get("/users", (req, res)=>{
    
      res.send({user:"kartikey"})
});