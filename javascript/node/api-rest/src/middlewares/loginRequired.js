import jwt from 'jsonwebtoken'
import User from '../models/User'


export default async (req, res, next) => {
  const { authorization } = req.headers

  if (!authorization) {
    return res.status(401).json({
      errors: ['Login requerido']
    })
  }

  const [, token] = authorization.split(' ')

  try {
    // PEGAMOS O PAYLOAD DE VOLTA.
    const dados = jwt.verify(token, process.env.TOKEN_SECRET)
    const { id, email } = dados

    /**
     * Há uma discusão na internet, porque um usuário precisa gerar um novo token para modificar o próprio e-mail depois de ter mudado o mesmo 1x.
     */
    const user = await User.findOne({
      where: {
        id,
        email
      }
    })

    if (!user) {
      return res.status(401).json({
        errors: ['Usuário inválido']
      })
    }

    req.userId = id
    req.userEmail = email
    return next()
  } catch (e) {
    return res.status(401).json({
      errors: ['Token experidado ou inválido']
    })
  }
}
