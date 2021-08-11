import React from 'react'
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import * as S from './styles'

export function Header() {
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
    </S.Nav>
  )
}
