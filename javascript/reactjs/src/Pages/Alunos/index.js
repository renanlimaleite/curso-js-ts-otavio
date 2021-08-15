import React, { useEffect, useState } from 'react'
import { Container } from '../../styles/GlobalStyles'
import { FaUserCircle, FaEdit, FaWindowClose } from 'react-icons/fa'

import api from '../../services/axios'
import { AlunoContainer, ProfilePicture } from './styles'
import { Link } from 'react-router-dom'
import Loading from '../../components/Loading'

export const Alunos = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [alunos, setAlunos] = useState([])

  useEffect(() => {
    setIsLoading(true)
    async function getData() {
      const response = await api.get('/alunos')
      setAlunos(response.data)
      setIsLoading(false)
    }

    getData()
  }, [])

  return (
    <Container>
      <Loading isLoading={isLoading} />
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

            <Link to={`/aluno/${aluno.id}/edit`}>
              <FaEdit size={16} />
            </Link>

            <Link to={`/aluno/${aluno.id}/delete`}>
              <FaWindowClose size={16} />
            </Link>
          </div>
        ))}
      </AlunoContainer>
    </Container>
  )
}
