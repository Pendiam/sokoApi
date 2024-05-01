require("dotenv").config();

const app_port = process.env.APP_PORT;
const app_name = process.env.APP_NAME;
const origins = JSON.parse(process.env.ORIGINS);

const db_host = process.env.POSTGRES_HOST;
const db_port = process.env.POSTGRES_PORT;
const db_name = process.env.POSTGRES_DB;
const db_user = process.env.POSTGRES_USER;
const db_pass = process.env.POSTGRES_PASSWORD;

module.exports = {
  app_port,
  app_name,
  origins,
  db_host,
  db_port,
  db_name,
  db_user,
  db_pass,
};
