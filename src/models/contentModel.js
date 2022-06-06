const Sequelize = require("sequelize");
const { db } = require("../config/config");

const content = db.define("content", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  thumbnail_url: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  video_url: { type: Sequelize.STRING, allowNull: false },

  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = content;
