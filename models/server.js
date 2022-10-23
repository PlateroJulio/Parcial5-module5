const express = require("express");
const cors = require("cors");
const { dbConnection } = require("../database/config");

class Server {
  constructor() {
    this.app = express();
    this.port =  process.env.PORT || 3000;
    this.middlewares();
    this.routes();
    dbConnection();
  }

  routes() {
    this.app.use('/api/CostaRica', require('../routes/CostaRicaRoute'));
    this.app.use('/api/Guatemala', require('../routes/GuatemalaRoute'));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Example app listening at http://localhost:${this.port}`);
    });
  }

  middlewares () {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static('public'));
  }
}



module.exports = Server;
