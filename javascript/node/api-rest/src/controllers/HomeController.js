import Aluno from '../models/Aluno'

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Renan',
      sobrenome: 'Leite',
      email: 'renan@gmail.com',
      idade: 24,
      peso: 117,
      altura: 1.67
    })

    res.status(200).json(novoAluno)
  }
}

export default new HomeController()
