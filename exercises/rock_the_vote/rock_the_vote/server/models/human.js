const mongoose = require("mongoose");
const Schema - mongoose.Schema;

const HumanSchema = new Schema({
  name:{
    required: true,
    type: String
  },
  age: {
    required: true,
    type: Number
  }
  specialAbilities:{
    type: String
    enum:["super strength", "other... fill in later"]
  }
})

module.exports = mongoose.model("Human", HumanSchema);
