import React, { useCallback, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Container } from '../../styles/GlobalStyles'
import { Form } from './styles'
import { toast } from 'react-toastify'
import { isEmail } from 'validator'
import * as actions from '../../store/modules/auth/actions'

export const Login = ({ location }) => {
  const dispatch = useDispatch()

  const prevPath = location?.state?.prevPath ?? '/'

  const [formsErrors, setFormsErrors] = useState(false)

  const history = useHistory()

  const [inputs, setInputs] = useState({
    email: '',
    password: ''
  })

  const handleInputs = useCallback(
    (e) => {
      const { name, value } = e.target
      setInputs({
        ...inputs,
        [name]: value
      })
    },
    [inputs]
  )

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault()

      if (!isEmail(inputs.email)) {
        setFormsErrors(true)
        toast.error('E-mail deve ser válido')
      }

      if (inputs.password.length < 6 || inputs.password.length > 255) {
        setFormsErrors(true)
        toast.error('Senha inválida')
      }

      if (formsErrors) return

      const payload = {
        email: inputs.email,
        password: inputs.password,
        prevPath,
        history
      }

      dispatch(actions.loginRequest(payload))
    },
    [inputs, formsErrors, dispatch, prevPath, history]
  )

  return (
    <Container>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          value={inputs.email}
          onChange={handleInputs}
          placeholder="Seu e-mail"
        />
        <input
          type="password"
          name="password"
          value={inputs.password}
          onChange={handleInputs}
          placeholder="Sua senha"
        />
        <button type="submit">Acessar</button>
      </Form>
    </Container>
  )
}
