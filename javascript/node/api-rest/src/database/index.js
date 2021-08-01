import Sequelize from 'sequelize'
import databaseConfig from '../config/database'

import Aluno from '../models/Aluno'
import User from '../models/User'
import Foto from '../models/Foto'

const models = [Aluno, User, Foto]

const connection = new Sequelize(databaseConfig)

models.forEach(model => model.init(connection)) // Sequelize.init([esseParam]) do model.
models.forEach(model => model.associate && model.associate(connection.models)) // pra verificar se tem associação.
