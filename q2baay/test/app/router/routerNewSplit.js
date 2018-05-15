import React from 'react'
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import Loadable from 'react-loadable'

import Loading from '../components/Loading'

const createComponent = (component) => {
  return Loadable({
    loader: () => import(component),
    loading: Loading,
  })
}

const getRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={createComponent('../containers/Hello')} />
      <Route path="/Test" component={createComponent('../containers/Test')} />
    </Switch>
  </BrowserRouter>
)

export default getRouter
