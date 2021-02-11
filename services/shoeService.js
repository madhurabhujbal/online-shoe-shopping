const {shoeList} = require('./data');

function getShoeInfo(shoeId) {
    // Return the shoe object with given shoeId if found (for details.ejs)
    let shoeInfo = null;
    for(let catagory in shoeList) {
        shoeList[catagory].forEach(shoe => {
            if(shoe.id == shoeId) {
                shoeInfo = shoe;
            }
        });
    };
    return shoeInfo;
}

function getShoeByCategory(searchCategory) {
    // Give specific category from shoeList (for category.ejs)
    for (const [category, itemList] of Object.entries(shoeList)) {
        if(searchCategory == category) {
            return itemList;
        }
    };
}

function getShoeList() {
    // Give entire shoe db (for home.ejs)
    return shoeList;
}
module.exports = {getShoeInfo, getShoeByCategory, getShoeList};