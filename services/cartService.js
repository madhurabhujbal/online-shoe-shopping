function getCartSize(req) {
    let cart = req.session.cart;
    let cartSize = 0;
    if(cart) {
        size = cart.length;
    }
    return cartSize;
}

function addItemToCart(req, item) {
    let cart = req.session.cart;
    if(!cart) {
        cart = [];
    }
    cart.push(item);
    req.session.cart = cart;
    updateCartSize(req);
}

function updateCartSize(req) {
    req.session.cartSize = getCartSize(req);
}

module.exports = {getCartSize, addItemToCart};