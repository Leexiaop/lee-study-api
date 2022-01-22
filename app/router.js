'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
    router.get('/', controller.index.index);
	router.get('/studyModule', controller.studyModule.index)
	router.get('/question', controller.question.index)
	router.post('/question', controller.question.post)
	router.get('/answer', controller.answer.index)
	router.get('/question/detail/:id', controller.question.detail)
};
