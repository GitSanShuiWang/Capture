import React from 'react'
import { render } from 'react-dom'
import './test.css'
import './test.scss'
import imgTest from './test.png'
class Hello extends React.Component {
    render() {
        return (
          <div>
            <img src={imgTest}/>
            <p>'process.env.NODE_ENV:: ' {process.env.NODE_ENV}</p>
          </div>
        )
    }
}

export default Hello
