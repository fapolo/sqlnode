const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const connection = new Sequelize(
  "postgres://pzldoazr:vIkhim9E-B9zCKWe7FGVTNt9MVByLAQm@tuffi.db.elephantsql.com:5432/pzldoazr",
  dbConfig
);

module.exports = connection;
