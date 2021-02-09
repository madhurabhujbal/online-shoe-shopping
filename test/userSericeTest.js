let assert = require('assert');
let userService = require('../services/userService');

describe('While retrieving user info', function () {
    describe('When Passed correct username and password', function () {
        let userInfo = userService.validateUser('test', 'test');
        it('info of the user should be be retrieved', function () {
                assert.notStrictEqual(userInfo, undefined);
        });

        it('info should contain username', function () {
            assert.notStrictEqual(userInfo.username, undefined);
        });

        it('info should contain name', function () {
            assert.notStrictEqual(userInfo.name, undefined);
        });

        it('info should contain previous orders', function () {
            assert.notStrictEqual(userInfo.orders, undefined);
        });
    });
});