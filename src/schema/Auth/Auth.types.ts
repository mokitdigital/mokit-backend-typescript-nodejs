import { Document, Model } from "mongoose"

export interface IAuth {
  userName?: string,
  passWord?: string,
  email?: string,
  firstName?: string,
  lastName?: string
}

export interface IAuthDocument extends IAuth, Document {
  checkPassword: (this: IAuthDocument) => Promise<Boolean>
}

export interface IAuthModel extends Model<IAuthDocument> {}
