/**
 * ASCard Webservice
 * Main
 */
const express = require("express");

const { logger } = require("./logger.js");
const { specs } = require("./swagger.js");

const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const port = 3000;

const expHbs = require("express-handlebars");

let date = new Date().toISOString().split("T")[0];

logger.info("Starting up ASCard Webservice...");

var handlebars = expHbs.create({
  defaultLayout: "main-layout",
  extname: ".handlebars",
  layoutsDir: path.join(__dirname, "views", "layouts"),
  helpers: {
    substr: function (length, context, options) {
      if (context.length > length) {
        return context.substring(0, length) + "...";
      } else {
        return context;
      }
    },
  },
});
app.engine(".handlebars", handlebars.engine);
app.set("view engine", ".handlebars");
app.set("views", "views");

// Allow CORS
const cors = require("cors");
app.use(
  cors({
    origin: "https://sb.ascard.net",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
);
app.use("/login", require("./routes/login"));
app.use("/player", require("./routes/player.js"));
app.use("/games", require("./routes/games"));
//app.use("/units", require("./routes/units"));

app.use("/", (req, res) => {
  res.render("home.handlebars", {
    pageTitle: "ASCard Webservice",
    date: date,
    activeHome: true,
  });
});

app.listen(port, () => {
  logger.info(`Web service listening at http://localhost:${port}`);
});
