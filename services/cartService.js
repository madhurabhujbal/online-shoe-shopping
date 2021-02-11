function addItemToCart(req, item, size, count) {
    // To add item to cart in the current session (details.ejs)
    let cart = req.session.cart;
    if(!cart) {
        cart = [];
    }
    if(!count) {
        //TODO: To be able to select quantity of same item throuh
        count = 1;
    }
    cart.push({id: item.id, price: item.price, size, count});
    req.session.cart = cart;
}

module.exports = {addItemToCart};