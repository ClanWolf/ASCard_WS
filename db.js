// Use the MariaDB Node.js Connector
const { logger } = require("./logger.js");
var mariadb = require("mariadb");

require('@dotenvx/dotenvx').config();

const {
  DB_HOST = "host",
  DB_USER = "user",
  DB_PASSWORD = "password",
  DATABASE = "database",
} = process.env;

// Create a connection pool
var pool = mariadb.createPool({
  host: DB_HOST,
  port: 3306,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DATABASE,
  checkDuplicate: false // Only unique constraints occur mostly with the same name so enabling it should be fine
});

/*
logger.info("Host: " + DB_HOST);
logger.info("User: " + DB_USER);
logger.info("Database: " + DATABASE);
logger.info("Pool: " + pool);
*/

// Expose a method to establish connection with MariaDB SkySQL
module.exports = Object.freeze({
  pool: pool,
});
