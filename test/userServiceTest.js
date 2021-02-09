let {assert} = require('chai');

let userService = require('../services/userService');

describe('While validating user', function () {
    describe('When Passed correct username and password', function () {
        let userInfo = userService.validateUser('test', 'test');
        it('info of the user should be retrieved', function () {
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

    describe('When Passed incorrect password', function () {
        let userInfo = userService.validateUser('test', 'wrongPassword');
        it('no user info should be retrieved', function () {
                assert.strictEqual(userInfo, undefined);
        });
    });

    describe('When Passed incorrect username', function () {
        let userInfo = userService.validateUser('nonExistingUser', 'doesNotMatter');
        it('no user should be retrieved', function () {
                assert.strictEqual(userInfo, undefined);
        });
    });
});


describe('While retrieving user info', function () {
    describe('When Passed correct username', function () {
        let userInfo = userService.getUser('test');
        it('user info object should be retrieved', function () {
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

    describe('When Passed non-existing username', function () {
        let userInfo = userService.getUser('nonExistingUser');
        it('no user should be retrieved', function () {
                assert.strictEqual(userInfo, undefined);
        });
    });
});

describe('While retrieving all the users ', function () {
    let users = userService.getAllUsers();
    it('list of users should be retrieved', function () {
        assert.notStrictEqual(users, undefined);
    });

    it('size of list should be equal to the number of users', function () {
        assert.isTrue(users.length == 3);
    });
});