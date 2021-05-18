"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);
var _tsdotenv = require('ts-dotenv');

var _routes = require('./routes'); var _routes2 = _interopRequireDefault(_routes);

const env = _tsdotenv.load.call(void 0, {
  MONGODB_URL: String
})

class App {
  

  constructor () {
    this.express = _express2.default.call(void 0, )

    this.middlewares()
    this.database()
    this.routes()
  }

   middlewares () {
    this.express.use(_express2.default.json())
    this.express.use(_cors2.default.call(void 0, ))
  }

   database () {
    _mongoose2.default.connect(env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    _mongoose2.default.connection.on('error', console.error.bind(console, 'Error connecting to the database: '))
    _mongoose2.default.connection.once('open', function() {
      console.log("Database connect!")
    });
  }

   routes () {
    this.express.use(_routes2.default)
  }
}

exports. default = new App().express
