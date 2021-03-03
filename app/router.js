'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
	router.get('/list', controller.home.list)
	
	require('./router/post.js')(app)
	require('./router/user.js')(app)
};
