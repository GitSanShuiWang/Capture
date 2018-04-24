import React from 'react'
import { hot } from 'react-hot-loader'
import getRouter from '../../router/router'

class App extends React.Component {
    render() {
        return (
          <div>
            {getRouter()}
          </div>
        )
    }
}

export default hot(module)(App)