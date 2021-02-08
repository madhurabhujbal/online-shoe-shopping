const userService = require('./userService');

function getUserOrders(username) {
    let user = userService.getUser(username);
    return user.orders;
}

function saveOrder(username, order) {
    let orders = getUserOrders(username);
    orders.push(order);
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
module.exports = {getUserOrders, saveOrder, getOrderDetails};