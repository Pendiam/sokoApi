const { Sequelize } = require("sequelize");

// Database connection
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./sokoDB.sqlite",
  logging: false,
  // logging: console.log, // For debugging
});

module.exports = sequelize;
