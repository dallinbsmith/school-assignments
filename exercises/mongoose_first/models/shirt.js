const mongoose = require("mongoose");

const shirtSchema = new Schema({
  character: {
      type: String,
      required: true,
      lowercase: true,
      enum: ["Daffy", "Donald", "Darkwing"]
  },
  price: Number,
  colorOptions: [String],
  sizeOptions: [String],
  sleeveless: {
    type: Boolean,
    default: true
  }
  fabric: {
    waterproof: Boolean,
    kind: String,
    glowInDark:{
      type: Boolean,
      default: true
    }
  }
});

const Shirt = mongoose.model("Shirt", shirtSchema);
