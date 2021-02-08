function addItemToCart(req, item, shoeSize, count) {
    let cart = req.session.cart;
    if(!cart) {
        cart = [];
    }
    if(!count) {
        //Assume count 1 when not specified
        count = 1;
    }
    cart.push({id: item.id, price: item.price, shoeSize, count});
    req.session.cart = cart;
}

module.exports = {addItemToCart};