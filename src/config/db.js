const { Sequelize } = require("sequelize");
const { db_host, db_port, db_name, db_user, db_pass } = require(".");

// SQLite Database connection
// const sequelize = new Sequelize({
//   dialect: "sqlite",
//   storage: "./sokoDB.sqlite",
//   logging: false,
//   // logging: console.log, // For debugging
// });

// PostgreSQL Database connection
const sequelize = new Sequelize({
  dialect: "postgres",
  host: db_host,
  port: db_port,
  username: db_user,
  password: db_pass,
  database: db_name,
  logging: false,
  // logging: console.log, // For debugging
});

// Test the connection
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

testConnection();

module.exports = sequelize;
