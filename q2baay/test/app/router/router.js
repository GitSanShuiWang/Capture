import React from 'react'
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'

import Bundle from './Bundle'

import Hello from 'bundle-loader?lazy&name=hello!../containers/Hello'
// import Test from '../containers/Test'
import Test from 'bundle-loader?lazy&name=test!../containers/Test'

import Loading from '../components/Loading'

const createComponent = (component) => (props) => (
    <Bundle load={component}>
        {
            (Component) => Component ? <Component {...props} /> : <Loading />
        }
    </Bundle>
)

const getRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={createComponent(Hello)} />
      <Route path="/Test" component={Test} />
    </Switch>
  </BrowserRouter>
)

export default getRouter
