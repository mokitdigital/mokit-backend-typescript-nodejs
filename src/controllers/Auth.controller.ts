import { Request, Response } from 'express'
import Auth from '../schema/Auth'

class AuthController {
  public async find (req: Request, res: Response): Promise<Response> {
    const auths = await Auth.find()

    return res.status(200).json(auths)
  }

  public async findOne (req: Request, res: Response): Promise<Response> {
    const userName: string = req.body.userName
    const user = new Auth

    return res.status(200).json()
  }

  public async create (req: Request, res: Response): Promise<Response> {
    const auth = await Auth.create(req.body)

    return res.status(201).json(auth)
  }
  
  public async delete (req: Request, res: Response): Promise<Response> {
    const auth = await Auth.deleteMany(req.body)

    return res.status(204).json(auth)
  }

  public async update (req: Request, res: Response): Promise<Response> {
    const _id: string = req.body._id
    const userName: string = req.body.userName
    const passWord: string = req.body.passWord
    const auth = await Auth.updateOne({ _id }, { userName, passWord })

    return res.status(200).json({
      new: auth
    })
  }
}

export default new AuthController()
