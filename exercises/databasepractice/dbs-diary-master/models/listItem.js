const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ListItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: String,
    details: String,
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("ListItem", ListItemSchema);
