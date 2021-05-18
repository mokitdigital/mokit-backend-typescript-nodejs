import { Schema, model, Document } from 'mongoose'
import bcrypt from 'bcryptjs'

interface AuthInterface extends Document {
  userName?: string,
  passWord?: string
}

const AuthSchema = new Schema ({
  userName: String,
  passWord: String
})

AuthSchema.pre<AuthInterface>('save', function (next) {
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

export default model<AuthInterface>('Auth', AuthSchema)
