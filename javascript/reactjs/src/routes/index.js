import React from 'react'
import { Switch } from 'react-router-dom'

import MyRoute from './MyRoute'
import { Login } from '../Pages/Login'
import { Aluno } from '../Pages/Aluno'
import { Alunos } from '../Pages/Alunos'
import { Fotos } from '../Pages/Fotos'
import { Register } from '../Pages/Register'
import { Page404 } from '../Pages/Page404'

export function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Alunos} isClosed={false} />
      <MyRoute path="/register" component={Register} isClosed={false} />
      <MyRoute path="/login" component={Login} isClosed={false} />
      <MyRoute path="/aluno/:id/edit" component={Aluno} isClosed />
      <MyRoute path="/aluno" component={Aluno} isClosed />
      <MyRoute path="/fotos/:id" component={Fotos} isClosed />
      <MyRoute path="*" component={Page404} />
    </Switch>
  )
}
