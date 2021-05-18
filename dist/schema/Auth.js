"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _mongoose = require('mongoose');
var _bcryptjs = require('bcryptjs'); var _bcryptjs2 = _interopRequireDefault(_bcryptjs);






const AuthSchema = new (0, _mongoose.Schema) ({
  userName: String,
  passWord: String
})

AuthSchema.pre('save', function (next) {
  const user = this

  if (!user.isModified('passWord')) {
    return next()
  }

  _bcryptjs2.default.genSalt((_err, salt) => {
    if (typeof user.passWord !== 'undefined') {
      _bcryptjs2.default.hash(user.passWord, salt, (_err, hash) => {
        user.passWord = hash
        next()
      })
    }
  })
})

exports. default = _mongoose.model('Auth', AuthSchema)
