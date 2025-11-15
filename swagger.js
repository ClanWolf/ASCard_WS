/**
 * ASCard Webservice
 * Swagger
 */
const swaggerJsdoc = require("swagger-jsdoc");
swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "ASCard Web API",
      version: "0.1.0",
      description: "Access game data from ASCard games",
      license: {
        name: "Apache 2.0",
        url: "https://spdx.org/licenses/Apache-2.0.html",
      },
      contact: {
        name: "ASCard.net",
        url: "https://www.ascard.net",
        email: "info@ascard.net",
      },
    },
    servers: [
      {
        url: "https://ws.ascard.net",
      },
    ],
  },
  apis: ["./routes/*.js"],
};
const specs = swaggerJsdoc(options);

module.exports = {
  specs,
};
