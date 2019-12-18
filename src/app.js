const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');


class App {
  constructor() {
    this.express = express();
    this.database;
    this.routes();
    this.middlewares();
  }

  middlewares() {
    this.express.use(express.json());
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({
      extended: true,
    }));
  }


  routes() {
    this.express.use(routes);
  }
}


module.exports = new App().express;
