const userDao = require("../respository/userRepository");
const contentDao = require("../respository/contentRepository");
const jwt = require("jsonwebtoken");
const TOKEN_KEY = "cloneflix";

var startWrapper = "\x1b[31m";

const createUser = async (req, res) => {
  let newUser = {
    name: req.body.user.name,
    password: req.body.user.password,
    isAdmin: req.body.user.isAdmin,
  };

  const userCreated = await userDao.create(newUser);

  if (req.body.content) {
    console.log(`porquee entra al content`);
    // contens = contentDao.findContents
    // userCreated.addContents(req.body.content);
  }
  console.log("\x1b[31mSiguio de largo");
  res.send(userCreated);
};

const addContent = async (req, res) => {
  console.log("ENTRO A AGREGAR");
  const userToUpdate = await userDao.findUser(req.params.id);
  const contentToAdd = await contentDao.findContent(req.body.content.id);
  const uptated = await userToUpdate.addContent(contentToAdd);
  res.send(uptated);
};

const findUserContent = async (req, res) => {
  const user = await userDao.findUser(req.params.id);
  res.send(user);
};

const editUser = async (req, res) => {
  const updatedUser = {
    name: req.body.name,
    password: req.body.password,
    isAdmin: req.body.isAdmin,
  };

  const updated = await userDao.update(req.params.id, updatedUser);
  res.send(updated);
};

const findUsers = async (req, res) => {
  const users = await userDao.findUsers();
  res.send(users);
};

const loginUser = async (req, res) => {
  try {
    const user = { name: req.body.username, password: req.body.password };
    console.log("estamos bien");
    let logedUser = await userDao.loginUser(user);
    logedUser = logedUser.toJSON();
    console.log(typeof logedUser);
    if (!logedUser) {
      res.status(403).json("ese usuario no existe");
    } else {
      const token = jwt.sign(logedUser, TOKEN_KEY, {
        expiresIn: "5d",
      });
      res.send({ token, logedUser });
    }
  } catch (err) {
    console.log(err);
    res.status(403).json(`ERROR ${err}`);
  }
};

const findUser = async (req, res) => {
  const user = await userDao.findUser(req.params.id);
  res.send(user);
};

const deleteUser = async (req, res) => {
  await userDao.deleteUser(req.params.id);
  res.sendStatus(200);
};

const userService = {
  createUser,
  addContent,
  findUserContent,
  loginUser,
  deleteUser,
  findUsers,
  editUser,
  findUser,
};

module.exports = userService;
