import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Login } from '../Pages/Login'
import { Page404 } from '../Pages/Page404'

export function Routes() {
  return (
    <Switch>
      <Route path="/" component={Login} exact />
      <Route path="*" component={Page404} />
    </Switch>
  )
}
