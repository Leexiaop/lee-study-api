'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  	const {router, controller} = app;
	router.get('/', controller.index.index);
	router.get('/module', controller.module.index);
	router.get('/question', controller.question.index);
	router.get('/answer', controller.answer.index);
};
