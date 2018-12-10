const express = require("express");
const app = express();
const port = require("./settings").port;

const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

// Middleware \\
app.use(bodyParser.json());
app.use(cors());

// Routes \\
app.use("/memes", require("./routes/memes"));
app.use("/admin", require("./routes/admin"));
app.use("/auth", require("./routes/auth"));

mongoose.connect("mongodb://localhost/ponder", {keepAlive: true, reconnectTries: Number.MAX_VALUE, useMongoClient: true}, (err) => {
    if (err) throw err;
    console.log("*** CONNECTED TO THE PONDER DATABASE ***");
});

app.listen(port, () => {
    console.log(`[+] server is running on port ${port}`);
});
