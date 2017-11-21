const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const port = process.env.PORT || 10100;

app.use(bodyParser.json());
app.use(cors());
app.use("/shitlist", require("./routes/shitList"));
app.use("/journal", require("./routes/journal"));

mongoose.connect("mongodb://localhost/diary", err => {
    if (err) throw err;
    console.log("Connected to the diary database");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
