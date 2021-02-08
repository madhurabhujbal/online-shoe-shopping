function getCartSize(req) {
    let cart = req.session.cart;
    let cartSize = 0;
    if(cart) {
        size = cart.length;
    }
    return cartSize;
}

function addItemToCart(req, item, shoeSize, count) {
    let cart = req.session.cart;
    if(!cart) {
        cart = [];
    }
    if(!count) {
        //Assume count 1 when not specified
        count = 1;
    }
    cart.push({item: item.id, price: item.price, shoeSize, count});
    req.session.cart = cart;
    updateCartSize(req, count);
}

function updateCartSize(req, count) {
    req.session.cartSize = getCartSize(req) + count;
}

module.exports = {getCartSize, addItemToCart};