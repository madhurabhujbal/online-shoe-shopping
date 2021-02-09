function addItemToCart(req, item, size, count) {
    let cart = req.session.cart;
    if(!cart) {
        cart = [];
    }
    if(!count) {
        //Assume count 1 when not specified
        count = 1;
    }
    cart.push({id: item.id, price: item.price, size, count});
    req.session.cart = cart;
}

module.exports = {addItemToCart};