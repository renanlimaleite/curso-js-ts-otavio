import React from 'react'
import { useDispatch } from 'react-redux'
import { Title } from './styles'
import { Container } from '../../styles/GlobalStyles'
import * as exampleActions from '../../store/modules/example/actions'

export const Login = () => {
  const dispatch = useDispatch()

  function handleClick(e) {
    e.preventDefault()

    dispatch(exampleActions.clicaBotao())
  }

  return (
    <Container>
      <Title>LOGIN</Title>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  )
}
