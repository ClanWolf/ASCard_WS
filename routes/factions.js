/**
 * @swagger
 * components:
 *   schemas:
 *     Faction:
 *       type: object
 *       required:
 *         - factionname
 *         - factiontype
 *         - factionimage
 *       properties:
 *         factionid:
 *           type: number
 *           description: The auto-generated id of the faction
 *         factionname:
 *           type: string
 *           description: The name of the faction
 *         factiontype:
 *           type: string
 *           description: The type of the faction
 *         factionimage:
 *           type: string
 *           description: The image of the faction
 *       example:
 *         factionid: 16
 *         factionname: Clan Wolf
 *         factiontype: CLAN
 *         factionimage: CW.png
 */

/**
 * @swagger
 * tags:
 *   name: Faction
 *   description: The ASCard API
 * /factions:
 *   get:
 *     summary: Lists all factions
 *     tags: [Factions]
 *     responses:
 *       200:
 *         description: The list of all factions
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Faction'
 * /factions/{id}:
 *   get:
 *     summary: Get the faction by id
 *     tags: [Factions]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The faction id
 *     responses:
 *       200:
 *         description: The game response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Faction'
 *       404:
 *         description: The game was not found
 */

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
