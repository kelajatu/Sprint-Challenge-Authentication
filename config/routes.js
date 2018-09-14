const axios = require("axios");
const db = require("../database/dbConfig");
const jwtKey = require("../_secrets/keys").jwtKey;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { authenticate, passwordHash } = require("./middlewares");

module.exports = server => {
  server.post("/api/register", passwordHash, register);
  server.post("/api/login", login);
  server.get("/api/jokes", authenticate, getJokes);
};

async function register(req, res) {
  if (!req.body.username || !req.body.password) {
    res.status(400).json({ message: "Invalid body" });
    return;
  }
  try {
    const results = await db("users").insert({ ...req.body });
    res.status(200).json({ results });
  } catch (err) {
    res.status(500).json(err);
  }
}

async function login(req, res) {
  if (!req.body.username || !req.body.password) {
    res.status(400).json({ message: "Invalid boyd" });
    return;
  }
  try {
    const results = await db("users").where({ username: req.body.username });
    if (
      results.length === 0 ||
      (await !bcrypt.compareSync(req.body.password, results[0].password))
    ) {
      return res.status(401).json({ error: "Access denied" });
    } else {
      const token = await jwt.sign({ user: req.body.username }, jwtKey);
      return res.status(200).json({ token: token });
    }
  } catch (err) {
    res.status(500).json(err);
  }
}

function getJokes(req, res) {
  axios
    .get(
      "https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten"
    )
    .then(response => {
      res.status(200).json(response.data);
    })
    .catch(err => {
      res.status(500).json({ message: "Error Fetching Jokes", error: err });
    });
}
