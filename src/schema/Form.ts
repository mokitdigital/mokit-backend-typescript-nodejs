import { Schema, model, Document } from 'mongoose'

interface FormInterface extends Document {
  nomeCompleto?: String,
  empresa?: String,
  email?: String,
  celular?: String,
  tipo?: String,
  descreva?: String,
  dataHora?: String
}

const FormSchema = new Schema({
    nomeCompleto: String,
    empresa: String,
    email: String,
    celular: String,
    tipo: String,
    descreva: String,
    dataHora: String
  }, 
  {
    timestamps: true
  }
);

export default model<FormInterface>('Form', FormSchema)