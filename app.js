const express = require("express");
const path = require('path');
const {shoeList} = require('./data');
const app = express();

app.use(express.static(path.join(__dirname, '/public')));

app.get ("/", function (req, res) {
    res.render ("home.ejs", {shoeList});
} );

app.get ("/details/:id", function (req, res) {
    let shoeInfo;
    for(let catagory in shoeList) {
        shoeList[catagory].forEach(shoe => {
            if(shoe.id == req.params.id) {
                shoeInfo = shoe;
            }
        });
    };
    res.render ("details.ejs", shoeInfo);
} );

app.get("/url", (req, res) => {
    res.json(shoeList);
});

app.listen(3000, () => {
 console.log("Server running on port 3000");
});