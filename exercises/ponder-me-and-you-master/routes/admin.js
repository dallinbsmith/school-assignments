const express = require("express");
const Admin = express.Router();
const Meme = require("../models/meme");

// format pictureUrl so it's viewable - not downloaded - from Dropbox
const _formatUrl = (url) => {
    let shareUrl = url.substring(0, url.indexOf("?") + 1);
    return shareUrl += "raw=1";
}

Admin.post("/", (req, res) => {
    req.body.pictureUrl = _formatUrl(req.body.pictureUrl);
    const newMeme = new Meme(req.body);
    newMeme.products = {};
    newMeme.save((err, addedMeme) => {
        if (err) res.status(500).send(err);
        res.send(addedMeme);
    });
});

Admin.put("/:id", (req, res) => {
    if (req.body.pictureUrl) {
        req.body.pictureUrl = _formatUrl(req.body.pictureUrl);
    }
    if (req.body.products.pictureUrl) {
        req.body.products.pictureUrl = _formatUrl(req.body.products.pictureUrl);
    }
    Meme.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, upsert: true}, (err, updatedMeme) => {
        if (err) res.status(500).send(err);
        res.send(updatedMeme);
    });
});

Admin.put("/:id/products/:type", (req, res) => {
    if (req.body.pictureUrl) {
        req.body.pictureUrl = _formatUrl(req.body.pictureUrl);
    }
    const type = req.params.type;
    Meme.findOne({_id: req.params.id}, (err, meme) => {
        if (err) return res.status(500).send(err);
        const memeObj = meme.toObject();
        if (!memeObj.products || !memeObj.products[type]) {
            return res.status(400).send({message: "That product type doesn't exist yet. You must add it first"});
        }
        for (prop in memeObj.products[type]) {
            meme.products[type][prop] = req.body[prop] || meme.products[type][prop]
        }
        meme.save(err => {
            if (err) return res.status(500).send(err);
            return res.send(meme);
        });
    });
});

module.exports = Admin;
