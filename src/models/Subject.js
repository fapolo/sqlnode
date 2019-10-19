const { Model, DataTypes } = require("sequelize");

class Subject extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING
      },
      {
        sequelize
      }
    );
  }

  static associate(models) {
    this.belongsToMany(models.User, {
      foreignKey: "subject_id",
      through: "user_subjects",
      as: "users"
    });
  }
}

module.exports = Subject;
