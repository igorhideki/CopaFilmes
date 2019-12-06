const express = require("express");

const routes = express.Router();

routes.get("/", (req, res) => res.json({ messege: "Copa filmes" }));

module.exports = routes;
