"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _mongoose = require('mongoose');











const FormSchema = new (0, _mongoose.Schema)({
    nomeCompleto: String,
    empresa: String,
    email: String,
    celular: String,
    tipo: String,
    descreva: String,
    dataHora: String
  }, 
  {
    timestamps: true
  }
);

exports. default = _mongoose.model('Form', FormSchema)