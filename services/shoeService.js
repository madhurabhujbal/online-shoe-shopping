const {shoeList} = require('./data');

function getShoeInfo(shoeId) {
    // Return the shoe object with given shoeId if found (for details.ejs)
    return Object.keys(shoeList)
                .map(category => shoeList[category])
                .reduce((a, b) => a.concat(b))
                .filter(shoe => shoe.id == shoeId)[0];

}

function getShoeByCategory(searchCategory) {
    // Give specific category from shoeList (for category.ejs)
    return Object.keys(shoeList)
                 .filter(category => category == searchCategory)
                 .map(category => shoeList[category])[0];
}

function getShoeList() {
    // Give entire shoe db (for home.ejs)
    return shoeList;
}
module.exports = {getShoeInfo, getShoeByCategory, getShoeList};