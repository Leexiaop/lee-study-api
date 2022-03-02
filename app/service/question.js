const Service = require('egg').Service;

class QuestionService extends Service {
	async getList(moduleId) {
		const results = await this.app.mysql.select('question', {
			where: {module: moduleId, online: 1}
		});
		return results;
	}
}

module.exports = QuestionService;
