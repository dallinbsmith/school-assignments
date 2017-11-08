const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const port = process.env.PORT || 8080;

app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/rubber-ducks", (err) => {
  if (err) throw err
  console.log("Connected to the database");
});


app.use("/shirts", require("./routes/shirt"));

const Schema = mongoose.Schema;

app.listen(port, ()=> {
  console.log("You didn't break this yet");
});
