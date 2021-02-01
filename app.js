const express = require("express");
const path = require('path');
const shoeList = require('./data');
const app = express();

app.use(express.static(path.join(__dirname, '/public')));

app.get ("/", function (req, res) {
    res.render ("home.ejs", shoeList);
} );

app.get ("/details/:id", function (req, res) {
    res.render ("details.ejs", {id: req.params.id});
} );

app.get("/url", (req, res) => {
    res.json(shoeList);
});

app.listen(3000, () => {
 console.log("Server running on port 3000");
});