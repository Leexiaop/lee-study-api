'use strict';

const Controller = require('egg').Controller;

class IndexController extends Controller {
	index() {
		const {ctx} = this;
		ctx.body = '这是一个测试接口';
	}
}

module.exports = IndexController;
