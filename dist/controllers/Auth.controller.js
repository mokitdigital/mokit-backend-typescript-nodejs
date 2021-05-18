"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _Auth = require('../schema/Auth'); var _Auth2 = _interopRequireDefault(_Auth);

class AuthController {
   async find (req, res) {
    const auths = await _Auth2.default.find()

    return res.status(200).json(auths)
  }

   async findOne (req, res) {
    const userName = req.body.userName
    const user = new _Auth2.default

    return res.status(200).json()
  }

   async create (req, res) {
    const auth = await _Auth2.default.create(req.body)

    return res.status(201).json(auth)
  }
  
   async delete (req, res) {
    const auth = await _Auth2.default.deleteMany(req.body)

    return res.status(204).json(auth)
  }

   async update (req, res) {
    const _id = req.body._id
    const userName = req.body.userName
    const passWord = req.body.passWord
    const auth = await _Auth2.default.updateOne({ _id }, { userName, passWord })

    return res.status(200).json({
      new: auth
    })
  }
}

exports. default = new AuthController()
