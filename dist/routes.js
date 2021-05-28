"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _Usercontroller = require('./controllers/User.controller'); var _Usercontroller2 = _interopRequireDefault(_Usercontroller);
var _Formcontroller = require('./controllers/Form.controller'); var _Formcontroller2 = _interopRequireDefault(_Formcontroller);
var _Authcontroller = require('./controllers/Auth.controller'); var _Authcontroller2 = _interopRequireDefault(_Authcontroller);

const routes = _express.Router.call(void 0, )

routes.get('/api/users', _Usercontroller2.default.find)
routes.post('/api/users', _Usercontroller2.default.create)

routes.get('/api/forms', _Formcontroller2.default.find)
routes.post('/api/forms', _Formcontroller2.default.create)

routes.get('/auths', _Authcontroller2.default.find)
routes.get('/auths/findOnes', _Authcontroller2.default.findOne)
routes.post('/auths', _Authcontroller2.default.create)
routes.delete('/auths', _Authcontroller2.default.delete)
routes.put('/auths', _Authcontroller2.default.update)

exports. default = routes
