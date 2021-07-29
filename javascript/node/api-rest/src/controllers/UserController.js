import User from '../models/User'

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body)

      const user = {
        ...novoUser.dataValues,
        password: novoUser.dataValues.password_hash // gambiarra para sobrescrever a senha
      }

      return res.status(200).json(user) // poderia retornar novoUser direto aqui
    } catch (e) {
      return res.status(401).json({
        erros: e.errors.map(err => err.message)
      })
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll()
      return res.json(users)
    } catch (e) {
      return res.status(401).json(null)
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params
      const user = await User.findByPk(id)
      return res.json(user)
    } catch (e) {
      return res.status(401).json(null)
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params

      if (!id) {
        return res.status(400).json({
          errors: ['Id não enviado']
        })
      }

      const user = await User.findByPk(id)

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe']
        })
      }

      const novosDados = await user.update(req.body)

      return res.json(novosDados)
    } catch (e) {
      return res.status(401).json({
        erros: e.errors.map(err => err.message)
      })
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params

      if (!id) {
        return res.status(400).json({
          errors: ['Id não enviado']
        })
      }

      const user = await User.findByPk(id)

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe']
        })
      }

      await user.destroy()

      return res.json('Usuário deletado.')
    } catch (e) {
      return res.status(401).json({
        erros: e.errors.map(err => err.message)
      })
    }
  }
}

export default new UserController()
