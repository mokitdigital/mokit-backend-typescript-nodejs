import { Request, Response } from 'express'
import { UserModel as Auth } from '../schema/Auth/Auth.model'
import bcrypt from "bcryptjs"

class AuthController {
  public async find (req: Request, res: Response): Promise<Response> {
    const auths = await Auth.find()

    return res.status(200).json(auths)
  }

  public async findOne (req: Request, res: Response): Promise<Response> {
    const userName: string | any = req.query.userName
    const autorization = await Auth.findOne({ userName }, function (err: Error, user: any) {

      if (err) {
        throw err
      }
      const compare: string | any = req.query.passWord
      const senha: string | any = user.passWord
      console.log(senha, compare)

        bcrypt.compare(compare, senha, function(err, isMatch) {        
          if (!isMatch) {
            res.status(500).json({ msg: 'Senha invalida' })
          } else {
            res.status(200).json({ msg: 'Voce esta logado' })
          }
        })
      })

    return res.status(200).json({
      error: "Email Invalido"
    })
  }

  public async create (req: Request, res: Response): Promise<Response> {
    const verifyAuth = await Auth.findOne({ userName: req.body.userName })

    if (!verifyAuth) {
      await Auth.create(req.body)
    }

    return res.status(201).json({
      msg: "Authentication created successfully!"
    })
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
