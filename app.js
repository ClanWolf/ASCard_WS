/**
 * ASCard Webservice
 * Main
 */
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

const expHbs = require('express-handlebars');
const { logger } = require('./logger.js');
const { specs } = require('./swagger.js');

logger.info('Starting up ASCard Webservice...');

var handlebars = expHbs.create({ defaultLayout: 'layout', extname: '.handlebars', helpers: handlebarsHelpers });
app.engine('.handlebars', handlebars.engine);
app.set('view engine', '.handlebars');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: true, }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }));
app.use("/games", require("./routes/games"));
//app.use("/players", require("./routes/players"));

//app.use('/', (req, res) => { res.sendFile(path.join(__dirname, "views", "home.html")); });
app.use('/', (req, res) => { res.render('home.handlebars', { pageTitle: 'ASCard Webservice' }) });

app.listen(port, () => { logger.info(`Web service listening at http://localhost:${port}`); });