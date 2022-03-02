const Service = require('egg').Service;

class ModuleService extends Service {
	async getList() {
		const results = await this.app.mysql.select('module');
		return results;
	}
}

module.exports = ModuleService;
