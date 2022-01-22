'use strict';

const Controller = require('egg').Controller;

class StudyModuleController extends Controller {
    async index({app}) {
		const { ctx } = this;
		const data = await app.mysql.query('select * from study_module')
		ctx.body = {
			code: 10000,
			msg: '请求成功',
			data
		}
    }
}

module.exports = StudyModuleController;
