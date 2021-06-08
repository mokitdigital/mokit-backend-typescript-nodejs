import { Router } from 'express'
import FormController from './controllers/Form.controller'
import AuthController from './controllers/Auth.controller'

const routes = Router()

routes.get('/api/forms', FormController.find)
routes.post('/api/forms', FormController.create)
routes.delete('/api/forms', FormController.delete)

routes.get('/api/auths', AuthController.find)
routes.get('/api/auths/findOnes', AuthController.findOne)
routes.post('/api/auths', AuthController.create)
routes.delete('/api/auths', AuthController.delete)
routes.put('/api/auths', AuthController.update)

export default routes
