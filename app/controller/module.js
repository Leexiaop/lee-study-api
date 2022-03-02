'use strict';

const Controller = require('egg').Controller;

class ModuleController extends Controller {
	async index() {
		const {ctx, service} = this;
		const data = await service.module.getList();
		ctx.body = {
			code: 10000,
			msg: '请求成功',
			data
		};
	}
}

module.exports = ModuleController;
