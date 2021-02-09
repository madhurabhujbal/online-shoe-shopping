let assert = require('assert');
let userService = require('../services/userService');

describe('While retrieving user info', function () {
    describe('When Passed correct username and password', function () {
        let userInfo = userService.validateUser('test', 'test');
        it('info of the user should be be retrieved', function () {
                assert.notStrictEqual(userInfo, undefined);
            });
        });
});