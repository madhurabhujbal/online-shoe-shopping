const express = require("express");
const path = require('path');
const {shoeList} = require('./data');
const app = express();

app.use(express.static(path.join(__dirname, '/public')));

app.get ("/", function (req, res) {
    res.render ("home.ejs", {shoeList});
} );

app.get ("/details/:id", function (req, res) {
    let shoeId = req.params.id;
    for(let catagory in shoeList) {
        shoeList[catagory].forEach(shoe => {
            if(shoe.id == shoeId) {
                res.render ("details.ejs", shoe);
            }
        });
    };
    res.send(`Details for shoe id ${shoeId} not found`);
});

app.get("/url", (req, res) => {
    res.json(shoeList);
});

app.listen(3000, () => {
 console.log("Server running on port 3000");
});