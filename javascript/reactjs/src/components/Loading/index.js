import { Container } from './styles'
import React from 'react'

export default function Loading({ isLoading = false }) {
  if (!isLoading) return <></>
  return (
    <Container>
      <div></div>
      <span>Carregando...</span>
    </Container>
  )
}
