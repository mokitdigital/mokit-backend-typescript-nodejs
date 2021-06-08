import { Schema, model } from 'mongoose'
import bcrypt from 'bcryptjs'
import { IAuthDocument } from './Auth.types'


const AuthSchema = new Schema ({
  userName: String,
  passWord: String,
  email: String,
  firstName: String,
  lastName: String
}, {
  timestamps: true,
})



AuthSchema.pre<IAuthDocument>('save', function (next) {
  const user = this

  if (!user.isModified('passWord')) {
    return next()
  }

  bcrypt.genSalt((_err: Error, salt: string) => {
    if (typeof user.passWord !== 'undefined') {
      bcrypt.hash(user.passWord, salt, (_err: Error, hash: string) => {
        user.passWord = hash
        next()
      })
    }
  })
})

AuthSchema.methods.checkPassword

export default AuthSchema
