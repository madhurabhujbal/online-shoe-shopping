const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const shoeService = require('./services/shoeService');
const userService = require('./services/userService');
const orderService = require('./services/orderService');
const cartService = require('./services/cartService');
const app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(cookieParser());
app.use(session({secret: "its a secret!",
                 saveUninitialized: false,
                 resave: false}));
app.use(express.static(path.join(__dirname, '/public')));

function getCurrentSessionData(req) {
    let username = req.session.username;
    let name = req.session.name;
    let cartSize = req.session.cartSize;
    if (!cartSize) {
        cartSize = "";
    }
    const shoeList = shoeService.getShoeList();
    return {shoeList, name, username, cartSize};
}

app.get("/", function (req, res) {
    let sessionData = getCurrentSessionData(req);
    res.render("home.ejs", sessionData);
} );

app.get("/sign-in", function (req, res) {
    let username = req.session.username;
    let sessionData = getCurrentSessionData(req);
    if(username) {
        let message = {type: 'success', data: `You are already logged in as ${username}`};
        sessionData['message'] = message;
        res.render("home.ejs", sessionData);
    } else {
        res.render("signin.ejs", sessionData);
    }
} );

app.post("/sign-in", function (req, res) {
    let {username, password} = req.body;
    let userInfo = userService.validateUser(username, password);
    let sessionData = getCurrentSessionData(req);
    if(userInfo) {
        //User is authenticated
        req.session.username = userInfo.username;
        req.session.name = userInfo.name;
        sessionData['username'] = userInfo.username;
        sessionData['name'] = userInfo.name;
        res.render("home.ejs", sessionData);
    } else {
        sessionData['message'] = {type: 'error', data: 'Invalid username or password!'};
        res.render("signin.ejs", sessionData);
    }
} );

app.get("/logout", function(req, res) {
    req.session.destroy();
    const shoeList = shoeService.getShoeList();
    res.render("home.ejs", {shoeList, cartSize : ""});
});

app.get ("/details/:id", function (req, res) {
    let shoeId = req.params.id;
    let sessionData = getCurrentSessionData(req);
    let shoeInfo = shoeService.getShoeInfo(shoeId);
    if(shoeInfo) {
        sessionData['shoeInfo'] = shoeInfo;
        res.render("details.ejs", sessionData);
    } else {
        sessionData['message'] = {type: 'erorr', data : `Details for shoe id ${shoeId} not found`};
        res.render("home.ejs", sessionData);
    }
});

app.get('/cart', function (req, res){
    res.render("cart.ejs");
});

app.post("/addtocart/", function (req, res) {
    let shoeId = req.body.shoeId;
    let shoeSize = req.body.shoeSize;
    let shoeInfo = shoeService.getShoeInfo(shoeId);
    if(shoeInfo) {
        cartService.addItemToCart(req, shoeInfo);
        console.log("Adding to cart : ", shoeSize);
        let sessionData = getCurrentSessionData(req);
        sessionData['shoeInfo'] = shoeInfo;
        res.render("details.ejs", sessionData);
    } else {
        let sessionData = getCurrentSessionData(req);
        sessionData['message'] = {type: 'error', data : `Details for shoe id ${shoeId} not found`};
        res.render("home.ejs", sessionData);
    }
});

app.get('/orders/', (req, res) => {
    let username = req.session.username;
    let sessionData = getCurrentSessionData(req);
    if(username) {
        //retrieve the orders for the current user
        let orders = orderService.getUserOrders(username);
        sessionData['orders'] = orders;
        res.render("orders.ejs", sessionData);
    } else {
        let message = {type: 'warning', data: `Please sign-in to see your orders!`};
        sessionData['message'] = message;
        res.render("signin.ejs", sessionData);
    }
});

app.get("/api/shoelist", (req, res) => {
    const shoeList = shoeService.getShoeList();
    res.json(shoeList);
});

app.listen(3000, () => {
 console.log("Server running on port 3000");
});