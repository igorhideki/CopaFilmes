const express = require("express");

const routes = require("./routes");

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {}

  routes() {
    this.server.use(routes);
  }
}

module.exports = new App().server;
