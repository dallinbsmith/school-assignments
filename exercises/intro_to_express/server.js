const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const uuid = require("uuid/v4");

app.use(bodyParser.json());

const tacos = [
  {title: "Chicken Taco", price: 2.95},
  {title: "Fish Taco", price: 2.95},
  {title: "Whale Taco", price: 2.95}
]



app.get("/tacos", (req, res) => {
  res.send(tacos)
});

app.post("/tacos", (req, res) => {
    let taco = req.body;
    taco._id = uuid();
    tacos.push(req.body);
    res.send(req.body);
});

app.listen(8000, ()=>{
    console.log("Fartbuckets of poop");
});
