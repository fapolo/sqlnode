const { Op } = require("sequelize");
const User = require("../models/User");

module.exports = {
  async show(req, res) {
    const users = await User.findAll({
      attributes: ["name", "email"],
      where: {
        email: { [Op.iLike]: "%@hogwarts.com" }
      },
      include: [
        { association: "addresses", where: { street: "Grimmauld Place" } },
        {
          association: "subjects",
          required: false,
          where: {
            name: {
              [Op.iLike]: "%s"
            }
          }
        }
      ]
    });

    return res.json(users);
  }
};
