require("dotenv").config();

const app_port = process.env.APP_PORT;
const app_name = process.env.APP_NAME;
const origins = process.env.ORIGINS;

module.exports = {
  app_port,
  app_name,
};
