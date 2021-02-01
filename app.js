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
    let shoe;

    let catagories = ["men", "women", "kids"];

    for( let i = 0; i < catagories.length; i++) {
        let catagory = catagories[i];
        for(let j = 0; j < shoeList[catagory].length; j++) {
            if(shoeList[catagory][j].id == shoeId){
                shoe = shoeList[catagory][j];
            }
        }
    }
    console.log(shoe);
    res.render ("details.ejs", shoe);
} );

app.get("/url", (req, res) => {
    res.json(shoeList);
});

app.listen(3000, () => {
 console.log("Server running on port 3000");
});