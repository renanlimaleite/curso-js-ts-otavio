import User from '../models/User'

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body)

      res.status(200).json(novoUser)
    } catch (e) {
      res.status(401).json({
        erros: e.errors.map(err => err.message)
      })
    }
  }
}

export default new UserController()
