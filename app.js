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
        let message = {type: 'success', data: `You are already logged in as ${user}`};
        sessionData = getCurrentSessionData(req);
        sessionData['message'] = message;
        res.render ("home.ejs", sessionData);
    } else {
        res.render("signin.ejs");
    }
} );

function getCurrentSessionData(req) {
    let user = req.session.username;
    let cartSize = req.session.cartSize;
    if (!cartSize) {
        cartSize = 0;
    }
    const shoeList = shoeService.getShoeList();
    return {shoeList, user, cartSize};

}
app.post("/sign-in", function (req, res) {
    // TODO: authenticate user here
    let user = req.body.user;
    req.session.username = user;
    let sessionData = getCurrentSessionData(req);
    res.render ("home.ejs", sessionData);
} );

app.get("/logout", function(req, res) {
    req.session.destroy();
    const shoeList = shoeService.getShoeList();
    res.render("home.ejs", {shoeList, cartSize : ""});
});

app.get ("/details/:id", function (req, res) {
    let shoeId = req.params.id;
    let cartSize = req.session.cartSize;
    let shoeInfo = shoeService.getShoeInfo(shoeId);
    if(shoeInfo) {
        res.render ("details.ejs", {shoeInfo, cartSize});
    } else {
        let sessionData = getCurrentSessionData(req);
        sessionData['message'] = {type: 'erorr', data : `Details for shoe id ${shoeId} not found`};
        res.render ("home.ejs", sessionData);
    }
});

app.get('/cart', function (req, res){
    res.render("cart.ejs");
});

app.post("/addtocart/", function (req, res) {
    let shoeId = req.body.shoeId;
    let shoeInfo = shoeService.getShoeInfo(shoeId);
    if(shoeInfo) {
        //Update cart size as item is added
        let cartSize = req.session.cartSize;
        if(cartSize) {
            cartSize++;
        } else {
            cartSize= 1;
        }
        req.session.cartSize = cartSize;
        res.render ("details.ejs", {shoeInfo, cartSize});
    } else {
        let sessionData = getCurrentSessionData(req);
        sessionData['message'] = {type: 'erorr', data : `Details for shoe id ${shoeId} not found`};
        res.render ("home.ejs", sessionData);
    }
});

app.get("/api/shoelist", (req, res) => {
    const shoeList = shoeService.getShoeList();
    res.json(shoeList);
});

app.listen(3000, () => {
 console.log("Server running on port 3000");
});