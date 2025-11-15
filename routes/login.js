/**
 * @swagger
 * components:
 *   schemas:
 *     Credentials:
 *       type: object
 *       required:
 *         - username
 *         - password
 *       properties:
 *         username:
 *           type: string
 *           description: The name of the player (user)
 *         password:
 *           type: string
 *           description: The password
 *       example:
 *         username: Slasher
 *         password: secret
 *     Token:
 *       type: object
 *       required:
 *         - token
 *       properties:
 *         token:
 *           type: string
 *           description: The access token
 *       example:
 *         token: eyJhb...ynRLPpmEfI8
 */

/**
 * @swagger
 * tags:
 *   name: Login
 *   description: Player login
 * /login:
 *   post:
 *     summary: Login player
 *     tags: [Login]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Credentials'
 *     responses:
 *       200:
 *         description: The created access token
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Token'
 *       500:
 *         description: Server error
 */

const { logger } = require("../logger.js");
const db = require("../db.js");

const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const SECRET_KEY = require("../secret");

/* const playerList = await db.pool.query("SELECT * FROM asc_player"); */

// Mock User Data
const users = [
  { id: 1, username: "user1", password: bcrypt.hashSync("password1", 8) },
];

router.post("/", (req, res) => {
  const { username, password } = req.body;
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
  }
});

module.exports = router;
