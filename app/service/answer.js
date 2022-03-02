const Service = require('egg').Service;

class AnswerService extends Service {
	async get(questionId) {
		const results = await this.app.mysql.get('answer', {questionId: questionId, online: 1});
		return results;
	}
}

module.exports = AnswerService;
