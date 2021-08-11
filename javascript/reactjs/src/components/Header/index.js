import React from 'react'
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa'

import * as S from './styles'

export function Header() {
  return (
    <S.Nav>
      <a href="">
        <FaHome size={24} />
      </a>
      <a href="">
        <FaUserAlt size={24} />
      </a>
      <a href="">
        <FaSignInAlt size={24} />
      </a>
    </S.Nav>
  )
}
