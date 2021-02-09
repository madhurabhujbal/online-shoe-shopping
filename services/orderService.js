const uuid = require('uuid');
const userService = require('./userService');

function getUserOrders(username) {
    let user = userService.getUser(username);
    return user.orders;
}

function getTimeStamp() {
    let d = new Date();
    let dateTime = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    return dateTime;
}

function checkoutCart(sessionData) {
    let cart = sessionData['cart'];
    if(cart.length == 0) {
        //Do nothing if accidentally cart is empty
        return;
    }

    let newOrder = {id : uuid.v4(), items: cart, status: "Ordered", date: getTimeStamp()};
    let orders = getUserOrders(sessionData['username']);
    orders.unshift(newOrder);
}

function getOrderDetails(orderId) {
    let users = userService.getAllUsers();
    for(let user of users) {
        for(let order of user.orders) {
            if(order.id === orderId) {
                return order;
            }
        }
    }
    return;
}
module.exports = {getUserOrders, checkoutCart, getOrderDetails};