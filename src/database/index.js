const Sequelize = require("sequelize");

const connection = new Sequelize(
  "postgres://pzldoazr:vIkhim9E-B9zCKWe7FGVTNt9MVByLAQm@tuffi.db.elephantsql.com:5432/pzldoazr",
  {
    define: {
      timestamps: true,
      underscored: true
    }
  }
);

module.exports = connection;
