const express = require("express");
const app = express();

const bodyParser = require("body-parser")
const jediRoutes = require("./routes/Jediroutes")
const cors = require("cors")

app.use(cors());
app.use(bodyParser.json());
app.use(jediRoutes);

app.listen(8000,()=>{
  console.log("working? Maybe...");
})
