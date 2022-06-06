require("dotenv").config();
const { Sequelize } = require("sequelize");
const mysql = require("mysql2/promise");
//const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

// create db if it doesn't already exist
//const { host, port, user, password, database } = config.database;

let host = "localhost";
let port = "3309";
let user = "root";
let password = "";
let database = "cloneflix";

//mysql create new conection if this doenst exist,
mysql
  .createConnection({
    host,
    port,
    user,
    password,
  })
  .then((connection) => {
    //create database
    connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);
    //close mysql local conection
    connection.end();
  })
  .catch((err) => console.error("Error creating database ", err));

// connect to db by mysql

const db = new Sequelize(database, user, password, {
  host: `${host}`,
  port: `${port}`,
  dialect: "mysql",
  logging: false,
});

// init models and add them to the exported db object
//db.User = require('../users/user.model')(sequelize);

// sync all models with database

module.exports = { db: db };
