'use strict';

const Controller = require('egg').Controller;

class AnswerController extends Controller {
    async index({app}) {
		const { ctx } = this;
		const data = await app.mysql.query(`select * from answer WHERE questionId='${ctx.query.questionId}' AND online=1`)
		ctx.body = {
			code: 10000,
			msg: '请求成功',
			data
		}
    }
}

module.exports = AnswerController;
