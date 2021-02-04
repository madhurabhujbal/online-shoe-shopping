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
    let user = req.session.username;
    res.render ("home.ejs", {shoeList, user});
} );

app.get("/sign-in", function (req, res) {
    let user = req.session.username;
    if(user) {
        res.send(`You are already logged in as ${user}`);
    } else {
        res.render ("signin.ejs");
    }
} );

app.post("/sign-in", function (req, res) {
    let user = req.body.user;
    // TODO: authenticate user here
    req.session.username = user;
    res.render ("home.ejs", {shoeList, user});
} );

app.get("/logout", function(req, res) {
    req.session.destroy();
    res.render("home.ejs", {shoeList});
});

app.get ("/details/:id", function (req, res) {
    let shoeId = req.params.id;
    let cartSize = req.session.cartSize;
    let shoeInfo = getShoeInfo(shoeId);
    if(shoeInfo) {
        res.render ("details.ejs", {shoeInfo, cartSize});
    } else {
        res.send(`Details for shoe id ${shoeId} not found`);
    }
});

app.get("/addtocart/:id", function (req, res) {
    //Check if user is logged in before adding item to cart
    let user = req.session.username;
    if(user) {
        res.render("cart.ejs");
    }
    else {
        res.send("Please signin to your account");
    }
    //Update cart size as item is added
    let shoeId = req.params.id;
    let cartSize = req.session.cartSize;
    if(cartSize) {
        cartSize++;
    } else {
        cartSize= 1;
    }
    req.session.cartSize = cartSize;
    let shoeInfo = getShoeInfo(shoeId);
    if(shoeInfo) {
        res.render ("details.ejs", {shoeInfo, cartSize});
    } else {
        res.send(`Details for shoe id ${shoeId} not found`);
    }
} );

function getShoeInfo(shoeId) {
    let shoeInfo = null;
    for(let catagory in shoeList) {
        shoeList[catagory].forEach(shoe => {
            if(shoe.id == shoeId) {
                shoeInfo = shoe;
            }
        });
    };
    return shoeInfo;
}

app.get("/url", (req, res) => {
    res.json(shoeList);
});

app.listen(3000, () => {
 console.log("Server running on port 3000");
});