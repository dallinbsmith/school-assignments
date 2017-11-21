const express = require("express");
const journalRoutes = express.Router();
const JournalEntry = require("../models/journalEntry");

journalRoutes.get("/", (req, res) => {
    JournalEntry.find((err, journal) => {
        if (err) return res.status(500).send(err);
        return res.send(journal);
    });
});

journalRoutes.get("/:id", (req, res) => {
    JournalEntry.findById(req.params.id, (err, entry) => {
        if (err) return res.status(500).send(err);
        return res.send(entry);
    });
});

journalRoutes.post("/", (req, res) => {
    const NewEntry = new JournalEntry(req.body);
    NewEntry.save((err, addedEntry) => {
        if (err) return res.status(500).send(err);
        return res.send(addedEntry);
    });
});

journalRoutes.delete("/:id", (req, res) => {
    JournalEntry.findByIdAndRemove(req.params.id, (err, deletedEntry) => {
        if (err) return res.status(500).send(err);
        return res.send({Message: "This journal entry has been deleted!"});
    });
});

journalRoutes.put("/:id", (req, res) => {
    JournalEntry.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, editedEntry) => {
        if (err) return res.status(500).send(err);
        return res.send(editedEntry);
    });
});

module.exports = journalRoutes;
