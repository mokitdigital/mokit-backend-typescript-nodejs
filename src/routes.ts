import { Router } from 'express'
import UserController from './controllers/User.controller'
import FormController from './controllers/Form.controller'
import AuthController from './controllers/Auth.controller'

const routes = Router()

routes.get('/api/users', UserController.find)
routes.post('/api/users', UserController.create)

routes.get('/api/forms', FormController.find)
routes.post('/api/forms', FormController.create)

routes.get('/auths', AuthController.find)
routes.get('/auths/findOnes', AuthController.findOne)
routes.post('/auths', AuthController.create)
routes.delete('/auths', AuthController.delete)
routes.put('/auths', AuthController.update)

export default routes
