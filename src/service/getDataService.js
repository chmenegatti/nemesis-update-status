const query = require('../database/query');

class GetDataService {

  constructor() {
    this.query = query;
  }

  async execute(tableName, id) {
    const data = query.get(tableName, id)
      .then((result) => {
        return result;
      })
      .catch((error) => {
        throw error;
      });
    return data;
  }
}
module.exports = new GetDataService();