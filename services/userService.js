const {users} = require('./data');

function validateUser(username, password) {
    // Check whether username and password matches (for sign-in.ejs)
    let user = getUser(username);
    if(user && user.password === password) {
        return user;
    }
}

function getUser(username) {
    // Get user from username  (common code, password reset functionality in the future)
    for(let i = 0; i < users.length; i++) {
        if(users[i].username === username) {
            return users[i];
        }
    }
    return;
}

function getAllUsers() {
    // Get all the users  (for admin page in the future)
    return users;
}

module.exports = {validateUser, getUser, getAllUsers};