const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const User = require("../models/User");
const Address = require("../models/Address");

const connection = new Sequelize(
  "postgres://pzldoazr:vIkhim9E-B9zCKWe7FGVTNt9MVByLAQm@tuffi.db.elephantsql.com:5432/pzldoazr",
  dbConfig
);

User.init(connection);
Address.init(connection);

User.associate(connection.models);
Address.associate(connection.models);

module.exports = connection;
