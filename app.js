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
    // common code separated in a function
    let username = req.session.username;
    let name = req.session.name;
    let cart = req.session.cart;
    if (!cart) {
        cart = [];
    }
    return {name, username, cart};
}

app.get("/", function (req, res) {
    // home page
    let sessionData = getCurrentSessionData(req);
    sessionData['shoeList'] = shoeService.getShoeList();
    res.render("home.ejs", sessionData);
} );

app.get("/sign-in", function (req, res) {
    let sessionData = getCurrentSessionData(req);
    if(sessionData['username']) {
        // if already signed-in (from other tab)
        let message = {type: 'success', data: `You are already logged in as ${sessionData['username']}`};
        sessionData['shoeList'] = shoeService.getShoeList();
        sessionData['message'] = message;
        res.render("home.ejs", sessionData);
    } else {
        // Show sign-in page
        res.render("signin.ejs", sessionData);
    }
} );

app.post("/sign-in", function (req, res) {
    // User submitted username/password from the sign-in page
    let {username, password} = req.body;
    let userInfo = userService.validateUser(username, password);
    let sessionData = getCurrentSessionData(req);
    if(userInfo) {
        // User is authenticated
        req.session.username = userInfo.username;
        req.session.name = userInfo.name;
        sessionData['username'] = userInfo.username;
        sessionData['name'] = userInfo.name;
        sessionData['shoeList'] = shoeService.getShoeList();
        res.render("home.ejs", sessionData);
    } else {
        // Incorrect username or password
        sessionData['message'] = {type: 'error', data: 'Invalid username or password!'};
        res.render("signin.ejs", sessionData);
    }
} );

app.get("/logout", function(req, res) {
    // destory the existing session and empty the cart
    req.session.destroy();
    let shoeList = shoeService.getShoeList();
    res.render("home.ejs", {shoeList, cart: []});
});

app.get ("/details/:id", function (req, res) {
    // Specific shoe details requested
    let shoeId = req.params.id;
    let sessionData = getCurrentSessionData(req);
    let shoeInfo = shoeService.getShoeInfo(shoeId);
    if(shoeInfo) {
        // Requested shoe details found
        sessionData['shoeInfo'] = shoeInfo;
        res.render("details.ejs", sessionData);
    } else {
        // Shoe details not found (by changing the id in url)
        sessionData['shoeList'] = shoeService.getShoeList();
        sessionData['message'] = {type: 'error', data : `Details for shoe id ${shoeId} not found`};
        res.render("home.ejs", sessionData);
    }
});

app.get('/cart', function (req, res){
    // Show cart when cart icon on navbar is clicked
    let sessionData = getCurrentSessionData(req);
    res.render("cart.ejs", sessionData);
});

app.post("/addtocart/", function (req, res) {
    // Add item to cart
    let shoeId = req.body.shoeId;
    let size = req.body.size;
    let count = req.body.count;
    //Retrieve shoe details from its id
    let shoeInfo = shoeService.getShoeInfo(shoeId);
    if(shoeInfo) {
        // Details of the shoe being added are found
        cartService.addItemToCart(req, shoeInfo, size, count);
        let sessionData = getCurrentSessionData(req);
        sessionData['shoeInfo'] = shoeInfo;
        sessionData['message'] = {type: 'success', data : `The ${shoeInfo.name} added to cart successfully!`};
        res.render("details.ejs", sessionData);
    } else {
        // Shoe details not found (protect against page refresh for item that went out of stock on the previous addToCart)
        let sessionData = getCurrentSessionData(req);
        sessionData['shoeList'] = shoeService.getShoeList();
        sessionData['message'] = {type: 'error', data : `Details for shoe id ${shoeId} not found`};
        res.render("home.ejs", sessionData);
    }
});

app.post("/checkout", function(req, res) {
    // Checkout the entire cart
    let sessionData = getCurrentSessionData(req);
    if(!sessionData['username']) {
        // User hasn't logged-in. Redirect to login
        let message = {type: 'warning', data: `Please sign-in and then click the cart to proceed to checkout!`};
        sessionData['message'] = message;
        res.render("signin.ejs", sessionData);
    } else {
        // Add order to the user's account
        orderService.checkoutCart(sessionData);
        let orders = orderService.getUserOrders(sessionData['username']);
        sessionData['orders'] = orders;
        // Empty cart now
        req.session.cart = [];
        sessionData['cart'] = [];
        res.render("orders.ejs", sessionData);
    }
})

app.get('/myorders/', function (req, res) {
    // When singed-in user clicks 'My Orders' on navbar
    let username = req.session.username;
    let sessionData = getCurrentSessionData(req);
    if(username) {
        // Retrieve the orders for the current user
        let orders = orderService.getUserOrders(username);
        sessionData['orders'] = orders;
        res.render("orders.ejs", sessionData);
    } else {
        // If user logs out from one tab and requests myorders from other
        let message = {type: 'warning', data: `Please sign-in to see your orders!`};
        sessionData['message'] = message;
        res.render("signin.ejs", sessionData);
    }
});

app.get('/category/:type', function(req, res) {
    // Specific category requested, e.g., men, women, kids
    let category = req.params.type;
    let sessionData = getCurrentSessionData(req);
    let itemList = shoeService.getShoeByCategory(category);
    if(itemList) {
        // If the requested category found
        sessionData['itemList'] = itemList;
        res.render("category.ejs", sessionData);
    } else {
        // If the non-existing category is selected
        sessionData['shoeList'] = shoeService.getShoeList();
        sessionData['message'] = {type: 'error', data : `Selected category '${category}' not found`};
        res.render("home.ejs", sessionData);
    }
});

app.get("/api/shoelist", (req, res) => {
    // To retrieve json
    let shoeList = shoeService.getShoeList();
    res.json(shoeList);
});

app.get("/api/category/:type", (req, res) => {
    let category = req.params.type;
    let itemList = shoeService.getShoeByCategory(category);
    res.json(itemList);
});

app.listen(3000, () => {
 console.log("Server running on port 3000");
});