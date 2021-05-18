"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _Form = require('../schema/Form'); var _Form2 = _interopRequireDefault(_Form);

class FormController {
   async find (req, res) {
    const forms = await _Form2.default.find()

    return res.json(forms)
  }

   async create (req, res) {
    const form = await _Form2.default.create(req.body)

    return res.json(form)
  }
}

exports. default = new FormController()