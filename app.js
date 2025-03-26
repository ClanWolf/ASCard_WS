/**
 * ASCard Webservice
 * Main
 */
const express = require("express");

const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const port = 3000;

const expHbs = require("express-handlebars");
const { logger } = require("./logger.js");
const { specs } = require("./swagger.js");

logger.info("Starting up ASCard Webservice...");

const users = [
  { id: 1, username: "user1", password: bcrypt.hashSync("password1", 8) },
];

const SECRET_KEY = "your_jwt_secret";

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

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

const authenticateJWT = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, SECRET_KEY, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

// Routes
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
);
app.use("/auth", require("./routes/auth.js"));
//app.use("/players", require("./routes/players"));
app.use("/games", require("./routes/games"));
//app.use("/units", require("./routes/units"));

//app.use('/', (req, res) => { res.sendFile(path.join(__dirname, "views", "home.html")); });
app.use("/", (req, res) => {
  res.render("home.handlebars", {
    pageTitle: "ASCard Webservice",
    activeHome: true,
    navCSS: true,
    // layout: false
  });
});

app.listen(port, () => {
  logger.info(`Web service listening at http://localhost:${port}`);
});
