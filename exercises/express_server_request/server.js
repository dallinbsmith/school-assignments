const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const morgan = require("morgan");

const myMiddleware = require("./myMiddleware")

app.use(bodyParser.json());

app.get("/", (req,res)=>{
  res.send({
    popular : "yes please"
  })
})

app.listen(8000,()=>{
  console.log("Please work");
})
