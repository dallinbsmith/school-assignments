const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const jediRoutes = require("./routes/Jediroutes")


app.use(bodyParser.json());
app.use(jediRoutes);

app.listen(8000, () => {
    console.log("working? Maybe...");
})
