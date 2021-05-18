import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import { load } from 'ts-dotenv'

import routes from './routes'

const env = load({
  MONGODB_URL: String
})

class App {
  public express: express.Application

  constructor () {
    this.express = express()

    this.middlewares()
    this.database()
    this.routes()
  }

  private middlewares (): void {
    this.express.use(express.json())
    this.express.use(cors())
  }

  private database (): void {
    mongoose.connect(env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    mongoose.connection.on('error', console.error.bind(console, 'Error connecting to the database: '))
    mongoose.connection.once('open', function() {
      console.log("Database connect!")
    });
  }

  private routes (): void {
    this.express.use(routes)
  }
}

export default new App().express
