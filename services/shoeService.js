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

function getShoeList() {
    return shoeList;
}
module.exports = {getShoeInfo, getShoeList};