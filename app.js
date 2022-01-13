const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./routes');


app.use(cors());
app.use(router);


app.listen(5000, ()=> console.log("running success"))


