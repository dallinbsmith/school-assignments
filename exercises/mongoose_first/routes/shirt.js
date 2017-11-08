const express = require("express");
const shirtRoutes = express.Router();
const Shirt = require("../models/shirt");


shirtRoutes.get("/", (req, res) => {
  // Get Shirts Array from database
  Shirt.find((err, shirts)=>{
      if (err) return res.status(500).send(err);
      return res.send(shirts);
  });
});


shirtRoutes.put("/:id", (req, res) =>{
    Shirt.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, shirt) => {
      if (err) return res.status(500).send(err);
        res.send(shirt);

    })
})

shirtRoutes.get("/:id", (req, res)=>{
  Shirt.findOne({_id: req.params.id}, (err,shirt => {
      // Shirt.findById(req.params.id, (err,shirt => {
    res.send(shirt);
  });
})

shirtRoutes.delete("/:id", (req,res)=>{
  Shirt.findByIdAndRemove(req.params.id, (err,shirt)=> {
    if (err) return res.status(500).send(err);
      res.send(shirt);
  })
})


shirtRoutes.post("/", (req,res)=>{
  const brandNewShirt = new Shirt(req.body);
  brandNewShirt.save((err, newShirtThatWasJustSaved)=>{
      if (err) return res.status(500).send(err);
      return res.statues(201).send(newShirtThatWasJustSaved);
    });
});


module.exports = shirtRoutes;
