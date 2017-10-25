const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const uuid = require("uuid/v4");

app.use(bodyParser.json());

const bounties =[
  {fName: "C3", lName: "PO", living: true, bountyValue: 6500, Type: "Jedi", _id: 1},
  {fName: "Luke", lName: "Skywalker", living: true, bountyValue: 55500, Type: "Jedi", _id: 2},
  {fName: "Chew", lName: "Bacca", living: true, bountyValue: 15000, Type: "Jedi", _id: 3},
  {fName: "Jabba", lName: "the Hut", living: true, bountyValue: 20500, Type: "Sith", _id: 4}
]


app.get("/bounties", (req, res) =>{
  res.send(bounties);
})

app.put("/tacos/:id", (req, res)=>{
  tacos = tacos.map((taco) =>{
    if(taco._id === req.params.id){
      return Object.assign(taco, newTaco);
    } else {
      return taco
    }
  })
  res.send(newTaco);
})

app.delete("/tacos/:id", (req, res) => {
  bounties = bounties.filter((bounty) =>{
    return bounty._id !== req.params.id
  })
  res.send({
    bounties;
  })
})

app.get("/tacos/:id", (req,res) =>{
  let taco = tacos.find((taco)=>{
    if (taco._id === req.params.id){
      return true;
    }else{
      return false;
    }
  })
  res.send(taco);
})

app.post("/bounties", (req,res) =>{
  let bounty = req.body;
  bounty._id = uuid();
  bounties.push(bounty);
  res.send(bounty);
})

app.listen(8000, () => {
    console.log("working? Maybe...");
})
