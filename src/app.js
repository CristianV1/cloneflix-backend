const express = require("express");
const server = express();
const content = require("./models/contentModel");
const user = require("./models/userModel");
const category = require("./models/categoryModel");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const categoryController = require("./controllers/categoryController");
const userController = require("./controllers/userController");
const contentController = require("./controllers/contentController");
const router = express.Router();

/*=========================*/
/*ROUTER*/
/*=========================*/

router.use("/category", categoryController);
router.use("/user", userController);
router.use("/content", contentController);

/*=========================*/
/*ASSOCIATIONS*/
/*=========================*/

user.belongsToMany(content, { through: "user_content" });
content.belongsToMany(user, { through: "user_content" });

content.belongsToMany(category, { through: "category_content" });
category.belongsToMany(content, { through: "category_content" });

/*=========================*/
/*SERVER*/
/*=========================*/
server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(morgan("dev"));
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept,authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
server.use("/", router);

module.exports = server;
