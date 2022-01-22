'use strict';

const Controller = require('egg').Controller;
const moment = require('moment')

const now = moment().format('YYYY-MM-DD HH:mm:ss')

class QuestionController extends Controller {
    async index({app}) {
		const { ctx } = this;
		const data = await app.mysql.query(`select * from question WHERE module='${ctx.query.moduleId}' AND online=1`)
		ctx.body = {
			code: 10000,
			msg: '请求成功',
			data
		}
    }
    async post ({app}) {
        const { moduleId, question } = this.ctx.request.body
        const data = await app.mysql.query(`INSERT INTO question (module, question, online, create_time, update_time) VALUES ('${moduleId}', '${question}', '0', '${now}', '${now}');`)
        this.ctx.body = {
			code: 10000,
			msg: '添加成功',
			data: true
		}
    }
    async detail ({app}) {
        const { ctx } = this;
		const data = await app.mysql.query(`select * from question WHERE id='${ctx.params.id}' AND online=1`)
		ctx.body = {
			code: 10000,
			msg: '请求成功',
			data: data[0]
		}
    }
}

module.exports = QuestionController;
