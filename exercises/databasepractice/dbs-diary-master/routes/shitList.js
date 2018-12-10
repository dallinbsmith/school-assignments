const express = require("express");
const shitListRoutes = express.Router();
const ListItem = require("../models/listItem");

shitListRoutes.get("/", (req, res) => {
    ListItem.find((err, shitlist) => {
        if (err) return res.status(500).send(err);
        return res.send(shitlist);
    });
});

shitListRoutes.get("/:id", (req, res) => {
    ListItem.findById(req.params.id, (err, shit) => {
        if (err) return res.status(500).send(err);
        return res.send(shit);
    });
});

shitListRoutes.post("/", (req, res) => {
    const NewShit = new ListItem(req.body);
    NewShit.save((err, shitAdded) => {
        if (err) return res.status(500).send(err);
        return res.send(shitAdded);
    });
});

shitListRoutes.delete("/:id", (req, res) => {
    ListItem.findByIdAndRemove(req.params.id, (err, deletedShit) => {
        if (err) return res.status(500).send(err);
        return res.send({Message: "This shit has been successfully deleted!"});
    });
});

shitListRoutes.put("/:id", (req, res) => {
    ListItem.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, editedShit) => {
        console.log(req.body)
        if (err) return res.status(500).send(err);
        return res.send(editedShit);
    });
});

module.exports = shitListRoutes;



// const express = require("express");
// const app = express();
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const mongoose = require("mongoose");
// const port = process.env.PORT || 10100;
//
// app.use(bodyParser.json());
// app.use(cors());
// app.use("/", require("./routes/people"));
//
// mongoose.connect("mongodb://localhost/swapi", err => {
//     if (err) throw err;
//     console.log("Connected to the swapi database");
// });
//
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });
