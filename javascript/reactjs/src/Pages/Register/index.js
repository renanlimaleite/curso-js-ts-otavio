import React, { useState, useCallback, useEffect } from 'react'
import { toast } from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'
import { isEmail } from 'validator'
import { Container } from '../../styles/GlobalStyles'
import * as S from './styles'
import * as actions from '../../store/modules/auth/actions'

import Loading from '../../components/Loading'

export const Register = () => {
  const dispatch = useDispatch()

  const id = useSelector((state) => state.auth.user.id)
  const nomeStoraged = useSelector((state) => state.auth.user.nome)
  const emailStoraged = useSelector((state) => state.auth.user.email)
  const isLoading = useSelector((state) => state.auth.isLoading)

  const [formsErrors, setFormsErrors] = useState(false)

  const [inputs, setInputs] = useState({
    nome: '',
    email: '',
    password: ''
  })

  useEffect(() => {
    if (!id) return
    setInputs((prevState) => ({ ...prevState, nome: nomeStoraged }))
    setInputs((prevState) => ({ ...prevState, email: emailStoraged }))
  }, [id, emailStoraged, nomeStoraged])

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

      if (!id && (inputs.password.length < 3 || inputs.password.length > 255)) {
        setFormsErrors(true)
        toast.error('Senha deve ter entre 3 e 255 caracteres')
      }

      if (formsErrors) return

      const payload = {
        id,
        nome: inputs.nome,
        email: inputs.email,
        password: inputs.password
      }

      dispatch(actions.registerRequest(payload))
    },
    [inputs, formsErrors, id, dispatch]
  )

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>{id ? 'Editar dados' : 'Crie sua conta'}</h1>
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

        <button type="submit">Salvar</button>
      </S.Form>
    </Container>
  )
}
