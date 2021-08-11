import React from 'react'
import { Switch } from 'react-router-dom'

import MyRoute from './MyRoute'
import { Login } from '../Pages/Login'
import { Page404 } from '../Pages/Page404'
import { Home } from '../Pages/Home'

export function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Home} isClosed />
      <MyRoute path="/login" component={Login} />
      <MyRoute path="*" component={Page404} />
    </Switch>
  )
}
