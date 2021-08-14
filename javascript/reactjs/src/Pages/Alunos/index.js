import React, { useEffect, useState } from 'react'
import { Container } from '../../styles/GlobalStyles'
import { FaUserCircle, FaEdit, FaWindowClose } from 'react-icons/fa'

import axios from '../../services/axios'
import { AlunoContainer, ProfilePicture } from './styles'
import { Link } from 'react-router-dom'

export const Alunos = () => {
  const [alunos, setAlunos] = useState([])

  useEffect(() => {
    async function getData() {
      const response = await axios.get('/alunos')
      setAlunos(response.data)
    }

    getData()
  }, [])

  return (
    <Container>
      <h1>Alunos</h1>
      <AlunoContainer>
        {alunos.map((aluno) => (
          <div key={String(aluno.id)}>
            <ProfilePicture>
              {aluno.Fotos.length ? (
                <img src={aluno.Fotos[0].url} alt="Foto perfil" />
              ) : (
                <FaUserCircle size={36} />
              )}
            </ProfilePicture>
            <span>{aluno.nome}</span>
            <span>{aluno.email}</span>

            <Link to={`/alunos/${aluno.id}/edit`}>
              <FaEdit size={16} />
            </Link>

            <Link to={`/alunos/${aluno.id}/delete`}>
              <FaWindowClose size={16} />
            </Link>
          </div>
        ))}
      </AlunoContainer>
    </Container>
  )
}
