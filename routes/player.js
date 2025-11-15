/**
 * @swagger
 * components:
 *   schemas:
 *     NewPlayerRequest:
 *       type: object
 *       required:
 *         - username
 *         - password
 *         - faction
 *       properties:
 *         username:
 *           type: string
 *           description: The name of the player (user)
 *         password:
 *           type: string
 *           description: The password
 *         faction:
 *           type: string
 *           description: shortname of the desired faction
 *       example:
 *         username: Slasher
 *         password: secretpassword
 *         faction: LA
 *     Player:
 *       type: object
 *       required:
 *         - playerid
 *         - npc
 *         - login_enabled
 *         - name
 *         - password
 *         - password_god
 *         - password_phoenix
 *         - admin
 *         - godadmin
 *         - image
 *         - factionid
 *         - hostedgameid
 *         - gameid
 *         - teamid
 *         - commandid
 *         - opfor
 *         - bid_pv
 *         - bid_tonnage
 *         - bid_winner
 *         - round
 *         - active_ingame
 *         - last_unit_opened
 *         - last_login
 *       properties:
 *         playerid:
 *           type: number
 *           description: The player id
 *         npc:
 *           type: boolean
 *           description: Player character (PC) or non-player character (NPC)
 *         login_enabled:
 *           type: boolean
 *           description: Login enabled or disabled
 *         name:
 *           type: string
 *           description: Name of the player
 *         password:
 *           type: string
 *           description: Password of the player
 *         password_god:
 *           type: string
 *           description: God access
 *         password_phoenix:
 *           type: string
 *           description: Password for the phoenix reimplementation
 *         admin:
 *           type: boolean
 *           description: Administrator
 *         godadmin:
 *           type: boolean
 *           description: Administrator with god privileges
 *         image:
 *           type: string
 *           description: User image
 *         factionid:
 *           type: number
 *           description: Preferred faction id
 *         hostedgameid:
 *           type: number
 *           description: The game currently hosted by this player
 *         gameid:
 *           type: number
 *           description: The game currently joined by this player
 *         teamid:
 *           type: number
 *           description: The team
 *         commandid:
 *           type: number
 *           description: The command
 *         opfor:
 *           type: boolean
 *           description: OpFor or BlueFor
 *         bid_pv:
 *           type: number
 *           description: Pointvalue currently in bid
 *         bid_tonnage:
 *           type: number
 *           description: Tonnage currently in bid
 *         bid_winner:
 *           type: boolean
 *           description: Lowest bid in current game or not
 *         round:
 *           type: number
 *           description: The current round
 *         active_ingame:
 *           type: boolean
 *           description: Active in current game (has active units)
 *         last_unit_opened:
 *           type: string
 *           description: The last unit that was opened
 *         last_login:
 *           type: string
 *           format: date
 *           description: The last login date
 *       example:
 *         playerid: 12
 *         npc: false
 *         login_enabled: true
 *         name: Sleesh
 *         password: secretpw
 *         password_god: evenmoresecretpw
 *         password_phoenix: equalysecretbutcompletlydifferentpassword
 *         admin: false
 *         godadmin: false
 *         image: 922.png
 *         factionid: 23
 *         hostedgameid: 15
 *         gameid: 13
 *         teamid: 1
 *         commandid: 34
 *         opfor: false
 *         bid_pv: 432
 *         bid_tonnage: 3000
 *         bid_winner: false
 *         round: 34
 *         active_ingame: false
 *         last_unit_opened: last_unit_url
 *         last_login: 2024-11-29T04:05:06.157Z
 */

/**
 * @swagger
 * tags:
 *   name: Player
 *   description: Player management
 * /:
 *   post:
 *     summary: Player registration
 *     tags: [Player]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NewPlayerRequest'
 *     responses:
 *       200:
 *         description: The newly registered player
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Player'
 *       500:
 *         description: Server error
 */

const { logger } = require("../logger.js");
const db = require("../db.js");

const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const SECRET_KEY = require("../secret.js");

router.post("/", (req, res) => {
  /*   const { username, password } = req.body;
  const user = users.find((u) => u.username === username);
  if (user && bcrypt.compareSync(password, user.password)) {
    const token = jwt.sign(
      { id: user.id, username: user.username },
      SECRET_KEY,
      { expiresIn: "1h" }
    );
    res.json({ token });
  } else {
    res.status(401).send("Invalid credentials");
  } */
});

module.exports = router;
