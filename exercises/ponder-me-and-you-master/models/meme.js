const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const memeSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    pictureUrl: {
        type: String,
        required: true
    },
    products: {
        framed: {
            price: Number,
            pictureUrl: String,
            description: String
        },
        unframed: {
            price: Number,
            pictureUrl: String,
            description: String
        },
        canvas: {
            price: Number,
            pictureUrl: String,
            description: String
        },
        tote: {
            price: Number,
            pictureUrl: String,
            description: String
        }
    }
}, { timestamps: true });

module.exports = mongoose.model("Meme", memeSchema);
