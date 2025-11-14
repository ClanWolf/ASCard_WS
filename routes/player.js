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
