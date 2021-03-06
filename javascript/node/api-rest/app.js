import dotenv from 'dotenv'
import { resolve } from 'path'

dotenv.config()

import './src/database'

import express from 'express'

import homeRoutes from './src/routes/homeRoutes'
import usersRoutes from './src/routes/usersRoutes'
import alunosRoutes from './src/routes/alunoRoutes'
import tokenRoutes from './src/routes/tokenRoutes'
import fotoRoutes from './src/routes/fotoRoutes'

class App {
  constructor() {
    this.app = express()
    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(express.json())
    this.app.use(express.static(resolve(__dirname, 'uploads')))
  }

  routes() {
    this.app.use('/', homeRoutes)
    this.app.use('/users/', usersRoutes)
    this.app.use('/alunos/', alunosRoutes)
    this.app.use('/fotos/', fotoRoutes)
    this.app.use('/tokens/', tokenRoutes)
  }
}

export default new App().app
