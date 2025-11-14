const { logger } = require("../logger.js");
const db = require("../db.js");

const express = require("express");
const router = express.Router();

const SECRET_KEY = require("../secret.js");
const verifyToken = require("../auth.js");

router.get("/", async (req, res) => {
  //router.get("/", verifyToken, async (req, res) => {

  try {
    var ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress || null;
    const factions = await db.pool.query("SELECT * FROM asc_faction");
    logger.info("List of all factions requested from ip: " + ip);

    res.status(200).send(factions);
  } catch (err) {
    throw err;
  }
});

router.get("/:id", async (req, res) => {
  var ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress || null;
  const factions = await db.pool.query("SELECT * FROM asc_faction");
  logger.info("Faction with id " + req.params.id + " requested from ip: " + ip);
  logger.info("Resultset factions " + factions);

  let faction = factions.find(function (item) {
    return item.factionid == req.params.id;
  });

  faction ? res.status(200).json(faction) : res.sendStatus(404);
});
