import { Request, Response } from 'express'
import Form from '../schema/Form'

class FormController {
  public async find (req: Request, res: Response): Promise<Response> {
    const forms = await Form.find()

    return res.json(forms)
  }

  public async create (req: Request, res: Response): Promise<Response> {
    const form = await Form.create(req.body)

    return res.json(form)
  }
}

export default new FormController()