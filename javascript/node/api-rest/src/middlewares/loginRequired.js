import jwt from 'jsonwebtoken'

export default (req, res, next) => {
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
    req.userId = id
    req.userEmail = email
    return next()
  } catch (e) {
    return res.status(401).json({
      errors: ['Token experidado ou inválido']
    })
  }
}
