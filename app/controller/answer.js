'use strict';

const Controller = require('egg').Controller;

class AnswerController extends Controller {
	async index() {
		const {ctx, service} = this;
		const data = await service.answer.get(ctx.query.questionId);
		ctx.body = {
			code: 10000,
			msg: '请求成功',
			data
		};
	}
}

module.exports = AnswerController;
