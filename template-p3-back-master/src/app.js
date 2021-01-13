const express = require('express');
var cors = require('cors')
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const router = require('./routes/index.routes');


app.get("/", (req, res) => {
    res.send("Hackhathon numéro 2 ! Pour accèder à la carte allez sur /api/map")
})
app.use(cors());
app.use('/api', router);

module.exports = app;