const db = require('./db');


const knex = db.getKnex();

class Query {
  async get(tableName, id) {
    const result = await knex.select('*').from(tableName).where({ id: id });
    return result;
  }

  async update(tableName, id, status, error) {
    const result = await knex(tableName).where({ id: id }).update({ status: status, error: error });
    return result;
  }
}


module.exports = new Query();