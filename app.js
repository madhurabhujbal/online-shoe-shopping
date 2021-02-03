const express = require("express");
const path = require('path');
const {shoeList} = require('./data');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(cookieParser());
app.use(session({secret: "its a secret!",
                 saveUninitialized: false,
                 resave: false}));
app.use(express.static(path.join(__dirname, '/public')));

app.get("/", function (req, res) {
    res.render ("home.ejs", {shoeList});
} );

app.get("/sign-in", function (req, res) {
    let user = req.session.user;
    if(user) {
        res.send(`You are already logged in as ${user}`);
    } else {
        res.render ("signin.ejs");
    }
} );

app.post("/sign-in", function (req, res) {
    let user = req.body.user;
    // TODO: authenticate user here
    req.session.user = user;
    res.send(`Signed in successfully with username ${req.body.user}`);
} );

app.get ("/details/:id", function (req, res) {
    let shoeId = req.params.id;
    let shoeInfo = null;
    for(let catagory in shoeList) {
        shoeList[catagory].forEach(shoe => {
            if(shoe.id == shoeId) {
                shoeInfo = shoe;
            }
        });
    };
    if(shoeInfo) {
        res.render ("details.ejs", {shoeInfo});
    } else {
        res.send(`Details for shoe id ${shoeId} not found`);
    }
});

app.get("/url", (req, res) => {
    res.json(shoeList);
});

app.listen(3000, () => {
 console.log("Server running on port 3000");
});