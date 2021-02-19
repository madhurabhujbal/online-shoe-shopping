const {shoeList} = require('./data');

function getShoeInfo(shoeId) {
    // Return the shoe object with given shoeId if found (for details.ejs)
    return Object.keys(shoeList)
                .map((category, value) => shoeList[category])
                .reduce((a, b) => a.concat(b))
                .filter(shoe => shoe.id == shoeId)[0];

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