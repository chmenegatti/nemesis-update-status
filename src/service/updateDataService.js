const query = require("../database/query");

class UpdateDataService {
  async execute(tableName, id, status, error) {
    try {

      const result = await query.update(tableName, id, status, error);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new UpdateDataService();