'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.v1.home.index);
  router.get('/:token', controller.v1.url.redirectUrl);
  router.resources('url','/url', controller.v1.url);
};
