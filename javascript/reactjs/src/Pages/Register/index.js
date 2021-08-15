import React, { useState, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import { isEmail } from 'validator'
import { Container } from '../../styles/GlobalStyles'
import * as S from './styles'
import api from '../../services/axios'

export const Register = () => {
  const history = useHistory()

  const [formsErrors, setFormsErrors] = useState(false)

  const [inputs, setInputs] = useState({
    nome: '',
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
    async (e) => {
      e.preventDefault()

      if (inputs.nome.length < 3 || inputs.nome.length > 255) {
        setFormsErrors(true)
        toast.error('Nome deve ter entre 3 e 255 caracteres')
      }

      if (!isEmail(inputs.email)) {
        setFormsErrors(true)
        toast.error('E-mail deve ser válido')
      }

      if (inputs.password.length < 3 || inputs.password.length > 255) {
        setFormsErrors(true)
        toast.error('Senha deve ter entre 3 e 255 caracteres')
      }

      if (formsErrors) return

      try {
        await api.post('/users', {
          nome: inputs.nome,
          password: inputs.password,
          email: inputs.email
        })

        toast.success('Você fez seu cadastro')

        history.push('/login')
      } catch (e) {
        // const status = e.response.status
        const errors = e.response.data.erros

        errors.map((error) => toast.error(error))
      }
    },
    [inputs, formsErrors, history]
  )

  return (
    <Container>
      <h1>Crie sua conta</h1>
      <S.Form onSubmit={handleSubmit}>
        <label htmlFor="nome">
          Nome
          <input
            type="text"
            name="nome"
            onChange={handleInputs}
            value={inputs.nome}
            placeholder="Seu nome"
          />
        </label>
        <label htmlFor="email">
          E-mail
          <input
            type="text"
            name="email"
            onChange={handleInputs}
            value={inputs.email}
            placeholder="Seu e-mail"
          />
        </label>
        <label htmlFor="nome">
          Senha
          <input
            type="password"
            name="password"
            onChange={handleInputs}
            value={inputs.password}
            placeholder="Sua senha"
          />
        </label>

        <button type="submit">Criar Conta</button>
      </S.Form>
    </Container>
  )
}
