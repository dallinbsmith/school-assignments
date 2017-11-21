const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const JournalEntrySchema = new Schema({
    title: {
        type: String,
        default: ""
    },
    text: {
        type: String,
        default: ""
    }
}, { timestamps: true });

module.exports = mongoose.model("JournalEntry", JournalEntrySchema);
