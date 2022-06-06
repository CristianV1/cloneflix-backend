const Sequelize = require("sequelize");
const { db } = require("../config/config");

const category = db.define("category", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = category;
