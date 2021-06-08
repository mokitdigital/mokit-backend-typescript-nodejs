import { model } from "mongoose";
import { IAuthDocument } from "./Auth.types";
import AuthSchema from "./Auth.schema";

export const UserModel = model<IAuthDocument>("auth", AuthSchema);