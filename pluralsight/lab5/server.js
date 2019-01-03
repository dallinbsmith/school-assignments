const express = require('express');

const app = express();

app.listen(3001);
console.log("API server listening on" + process.env.REACT_APP_AUTH0_AUDIENCE);