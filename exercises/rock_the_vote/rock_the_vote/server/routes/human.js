const express = require("express");
const humanRoute = express.Router();
const HumanModel = require("../models/human");

humanRoute.get("/", (req, res)=>{
  HumanModel.find((err, foundHuman)=>{
    if(err){
      console.log(err);
    }else{
      res.send(foundHuman);
    }
  })
});

humanRoute.post("/", (req, res)=>{
    let newHuman = new HumanModel(req.body);
    newHuman.save((err, savedHuman)=>{
      if(err){
        console.log(err);
      }else{
        res.send(savedHuman);
      }
    })
})

humanRoute.get("/:id", (req,res)=>{
  HumanModel.findById(req.params.id, (err, foundHuman) =>{
    if(err){
      console.log(err);
    }else{
      res.send(foundHuman);
    }
  })
});


humanRoute.put("/:id"(req,res)=>{
  HumanModel.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err,updatedHuman)=>{
    if(err){
      console.log(err);
    }else{
      res.send(updatedHuman);
    }
  })
});


humanRoute.delete("/:id", (req, res)=>{
  HumanModel.findByIdAndRemove(req.params.id, (err, foundHuman) =>{
    if(err){
      console.log(err);
    }else{
      res.send(foundHuman);
      }
    })
  });


module.exports = humanRoute;
