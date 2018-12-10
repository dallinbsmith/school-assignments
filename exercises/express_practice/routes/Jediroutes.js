const express = require("express");
const jediRoutes = express.Router();
const uuid = require("uuid/v4");

const bounties =[
  {fName: "C3", lName: "PO", living: true, bountyValue: 6500, Type: "Jedi", _id: 1},
  {fName: "Luke", lName: "Skywalker", living: true, bountyValue: 55500, Type: "Jedi", _id: 2},
  {fName: "Chew", lName: "Bacca", living: true, bountyValue: 15000, Type: "Jedi", _id: 3},
  {fName: "Jabba", lName: "the Hut", living: true, bountyValue: 20500, Type: "Sith", _id: 4}
]


jediRoutes.get("/bounties", (req, res) =>{
  res.send(bounties);
})

jediRoutes.put("/bounties/:id", (req, res)=>{
  bounties = bounties.map((taco) =>{
    if(taco._id === req.params.id){
      return Object.assign(taco, newTaco);
    } else {
      return taco
    }
  })
  res.send(newTaco);
})

jediRoutes.delete("/bounties/:id", (req, res) => {
  bounties = bounties.filter((bounty) =>{
    return bounty._id !== req.params.id
  })
  res.send({
  })
})

jediRoutes.get("/bounties/:id", (req,res) =>{
  let bounty = bounties.find((bounty)=>{
    if (bounty._id === req.params.id){
      return true;
    }else{
      return false
    }
  })
  res.send(bounty);
})

jediRoutes.post("/bounties", (req,res) =>{
  let bounty = req.body;
  bounty._id = uuid();
  bounties.push(bounty);
  res.send(bounty);
})

module.exports = jediRoutes
