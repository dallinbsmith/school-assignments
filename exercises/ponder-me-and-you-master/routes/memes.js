const express = require("express");
const Memes = express.Router();
const Meme = require("../models/meme");

Memes.get("/", (req, res) => {
    Meme.find((err, memes) => {
        if (err) res.status(500).send(err);
        res.send(memes);
    });
});

Memes.get("/:id", (req, res) => {
    Meme.findOne({_id: req.params.id}, (err, meme) => {
        if (err) res.status(500).send(err);
        res.send(meme);
    });
});

module.exports = Memes;
