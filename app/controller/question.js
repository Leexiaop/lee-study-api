'use strict';

const Controller = require('egg').Controller;
class QuestionController extends Controller {
	async index() {
		const {ctx, service} = this;
		const list = await service.question.getList(ctx.query.moduleId);
		const moduleList = await service.module.getList();
		ctx.body = {
			code: 10000,
			msg: '请求成功',
			data: {
				list,
				moduleName: moduleList.find(m => m.id === Number(ctx.query.moduleId)).name
			}
		};
	}
}

module.exports = QuestionController;
