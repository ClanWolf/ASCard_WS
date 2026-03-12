require('@dotenvx/dotenvx').config();
const { SECRET = "secret" } = process.env;

module.exports = SECRET;
