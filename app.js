const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const shoeService = require('./services/shoeService');
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
    let cartSize = req.session.cartSize;
    if (!cartSize) {
        cartSize = "";
    }
    const shoeList = shoeService.getShoeList();
    res.render ("home.ejs", {shoeList, user, cartSize});
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
    let cartSize = req.session.cartSize;
    if (!cartSize) {
        cartSize = 0;
    }
    const shoeList = shoeService.getShoeList();
    res.render ("home.ejs", {shoeList, user, cartSize});
} );

app.get("/logout", function(req, res) {
    req.session.destroy();
    const shoeList = shoeService.getShoeList();
    res.render("home.ejs", {shoeList, cartSize : 0});
});

app.get ("/details/:id", function (req, res) {
    let shoeId = req.params.id;
    let cartSize = req.session.cartSize;
    let shoeInfo = shoeService.getShoeInfo(shoeId);
    if(shoeInfo) {
        res.render ("details.ejs", {shoeInfo, cartSize});
    } else {
        res.send(`Details for shoe id ${shoeId} not found`);
    }
});

app.get('/cart', function (req, res){
    res.render("cart.ejs");
});

app.get("/addtocart/:id", function (req, res) {
    //Check if user is logged in before adding item to cart
    // let user = req.session.username;
    // if(!user) {
    //    res.send("Please signin to your account");
    //     return;
    // }

    //Update cart size as item is added
    let shoeId = req.params.id;
    let cartSize = req.session.cartSize;
    if(cartSize) {
        cartSize++;
    } else {
        cartSize= 1;
    }
    req.session.cartSize = cartSize;
    let shoeInfo = shoeService.getShoeInfo(shoeId);
    if(shoeInfo) {
        res.render ("details.ejs", {shoeInfo, cartSize});
    } else {
        res.send(`Details for shoe id ${shoeId} not found`);
    }
} );

app.get("/api/shoelist", (req, res) => {
    const shoeList = shoeService.getShoeList();
    res.json(shoeList);
});

app.listen(3000, () => {
 console.log("Server running on port 3000");
});