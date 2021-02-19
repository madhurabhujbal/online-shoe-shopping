const uuid = require('uuid');
const userService = require('./userService');

function getUserOrders(username) {
    // Get all the orders for the current user (for orders.ejs)
    let user = userService.getUser(username);
    return user.orders;
}

function getTimeStamp() {
    // Utility function to generate time stamp
    let d = new Date();
    let dateTime = `${d.getDate()}/${(d.getMonth() + 1)}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
    return dateTime;
}

function checkoutCart(sessionData) {
    // Checkout the entire cart and create a new order
    let cart = sessionData['cart'];
    if(cart.length == 0) {
        //Do nothing if accidentally cart is empty, e.g., refreshing after a successful checkout
        return;
    }

    let newOrder = {id : uuid.v4(), items: cart, status: "Ordered", date: getTimeStamp()};
    let orders = getUserOrders(sessionData['username']);
    //create order
    orders.unshift(newOrder);
}

function getOrderDetails(orderId) {
    // Search by order id (for the future use, track order without singing-in)
    let users = userService.getAllUsers();
    return users.map(user => user.orders)
                .reduce((a, b) => a.concat(b))
                .filter(order => order.id === orderId);
}
module.exports = {getUserOrders, checkoutCart, getOrderDetails};