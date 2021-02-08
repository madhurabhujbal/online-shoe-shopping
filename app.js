const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const shoeService = require('./services/shoeService');
const userService = require('./services/userService');
const app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(cookieParser());
app.use(session({secret: "its a secret!",
                 saveUninitialized: false,
                 resave: false}));
app.use(express.static(path.join(__dirname, '/public')));

function getCurrentSessionData(req) {
    let user = req.session.username;
    let cartSize = req.session.cartSize;
    if (!cartSize) {
        cartSize = "";
    }
    const shoeList = shoeService.getShoeList();
    return {shoeList, user, cartSize};
}

app.get("/", function (req, res) {
    let sessionData = getCurrentSessionData(req);
    res.render ("home.ejs", sessionData);
} );

app.get("/sign-in", function (req, res) {
    let user = req.session.username;
    let sessionData = getCurrentSessionData(req);
    if(user) {
        let message = {type: 'success', data: `You are already logged in as ${user}`};
        sessionData['message'] = message;
        res.render ("home.ejs", sessionData);
    } else {
        res.render("signin.ejs", sessionData);
    }
} );

app.post("/sign-in", function (req, res) {
    let {user, password} = req.body;
    let userInfo = userService.validateUser(user, password);
    let sessionData = getCurrentSessionData(req);
    if(userInfo) {
        //User is authenticated
        req.session.username = userInfo.name;
        sessionData['user'] = userInfo.name;
        res.render ("home.ejs", sessionData);
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
        sessionData['message'] = {type: 'error', data : `Details for shoe id ${shoeId} not found`};
        res.render ("home.ejs", sessionData);
    }
});

app.get('/orders/:id', (req, res) => {
    let orders = [{id:'ord-001', items : [
                    {id: 1001, size : 'UK 5', count: 1, cost: 129},
                    {id: 2001, size : 'UK 6', count: 1, cost: 89}
                ],
                        status : "Delievered",
                        date : '26-Dec-2020'
                },
                {id:'ord-005', items : [
                    {id: 1002, size : 'UK 7', count: 1, cost: 65}
                    ],
                    status : "Ordered",
                    date : '31-Jan-2021'}
                ];

    let sessionData = getCurrentSessionData(req);
    sessionData['orders'] = orders;
    res.render("orders.ejs", sessionData);
});

app.get("/api/shoelist", (req, res) => {
    const shoeList = shoeService.getShoeList();
    res.json(shoeList);
});

app.listen(3000, () => {
 console.log("Server running on port 3000");
});