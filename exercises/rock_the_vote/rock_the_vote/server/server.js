const express = require("express");
const bodyParser = require("body-parser");
const cors = require ("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8000;

const humanRoutes = require("./routes/human");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(morgan("dev"));

app.use("/humans", "/humanroutes")

mongoose.connect("mongodb://localhost/humans", (err)=>{
  if(err) throw err;
  console.log("connected to Mongodb")
})

app.listen(PORT, ()=> {
  console.log("You didn't break this yet");
});
