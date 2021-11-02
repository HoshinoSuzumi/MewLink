'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const assert = require('assert')
    const {router, controller} = app;

    app.passport.mount('github');

    router.get('/logout', controller.v1.home.logout);

    router.get('/', controller.v1.home.index);
    router.get('/:token', controller.v1.url.redirectUrl);
    router.resources('url', '/url', controller.v1.url);
};
