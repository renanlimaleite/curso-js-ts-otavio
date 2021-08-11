import React from 'react'
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import * as S from './styles'

export function Header() {
  const botaoClicado = useSelector((state) => state.example.botaoClicado)

  return (
    <S.Nav>
      <Link to="/">
        <FaHome size={24} />
      </Link>
      <Link to="/login">
        <FaUserAlt size={24} />
      </Link>
      <Link to="aaa">
        <FaSignInAlt size={24} />
      </Link>
      <p>{botaoClicado ? 'Clicado' : 'Não clicado'}</p>
    </S.Nav>
  )
}
