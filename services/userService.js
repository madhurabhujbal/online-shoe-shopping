const {users} = require('./data');

function validateUser(username, password) {
    let user = getUser(username);
    if(user && user.password === password) {
        return user;
    }
}

function getUser(username) {
    for(let i = 0; i < users.length; i++) {
        if(users[i].username === username) {
            return users[i];
        }
    }
    return;
}

module.exports = {validateUser, getUser};