const knex = require('knex');
require('dotenv').config();

class Database {
  constructor() {
    if (!Database.instance) {
      this._knex = knex({
        client: 'mysql',
        connection: {
          host: process.env.DB_HOST,
          user: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_DATABASE
        },
      });
      Database.instance = this;
    }
    return Database.instance;
  }

  getKnex() {
    return this._knex;
  }

  async close() {
    await this._knex.destroy();
  }
}

module.exports = new Database();
