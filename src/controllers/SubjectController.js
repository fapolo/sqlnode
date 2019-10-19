const Subject = require("../models/Subject");
const User = require("../models/User");

module.exports = {
  async index(req, res) {
    const { user_id } = req.params;

    const user = await User.findByPk(user_id, {
      include: {
        association: "subjects"
      }
    });

    return res.json(user);
  },

  async store(req, res) {
    const { user_id } = req.params;
    const { name } = req.body;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: "Usuário não encontrado. " });
    }

    const [subject] = await Subject.findOrCreate({
      where: { name }
    });

    await user.addSubject(subject);

    return res.json(subject);
  },

  async delete(req, res) {
    const { user_id } = req.params;
    const { name } = req.body;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: "Usuário não encontrado. " });
    }

    const subject = await Subject.findOne({
      where: { name }
    });

    await user.removeSubject(subject);

    return res.json();
  }
};
