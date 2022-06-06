const user = require("../models/userModel");
const content = require("../models/contentModel");

const create = async (newUser) => {
  return user.create(newUser);
};

const findUsers = async () => {
  return user.findAll({ order: [["id", "ASC"]], include: content });
};

const loginUser = async (userToLogin) => {
  console.log("user in respository es: ", user);
  return user
    .findOne({
      where: { name: userToLogin.name, password: userToLogin.password },
    })
    .catch((err) => {
      console.log("database err ", err);
      return err;
    });
};

const findUser = async (id) => {
  return user.findByPk(id, { include: content });
};

const update = async (id, paramUser) => {
  /*nuevo usuario*/
  let updateUser = {
    name: paramUser.name,
    isAdmin: paramUser.isAdmin,
    password: paramUser.password,
  };
  return user.update(updateUser, { where: { id: id } });
};

const addContents = (userToUpdate, contents) => {
  return userToUpdate.setContents(contents);
};

const deleteUser = (id) => {
  return user.destroy({ where: { id: id } });
};

const userDaO = {
  create,
  loginUser,
  deleteUser,
  findUsers,
  findUser,
  update,
  addContents,
};

module.exports = userDaO;
