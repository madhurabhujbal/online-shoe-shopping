const {shoeList} = require('./data');

function getShoeInfo(shoeId) {
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
    for (const [category, itemList] of Object.entries(shoeList)) {
        if(searchCategory == category) {
            return itemList;
        }
    };
}

function getShoeList() {
    return shoeList;
}
module.exports = {getShoeInfo, getShoeByCategory, getShoeList};