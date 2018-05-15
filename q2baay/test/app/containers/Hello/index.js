import React from 'react'
import {render} from 'react-dom'
import './test.css'
import './test.scss'
import '../Test/styles.css'
import imgTest from './test.png'
import {increment, decrement, reset,callApiTest} from './action'
import { compose } from 'redux'
import {connect} from 'react-redux'
import {withRouter} from "react-router-dom"

class Hello extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (<div>
      <img src={imgTest}/>
      <p className='text'>'process.env.NODE_ENV:: ' {process.env.NODE_ENV}</p>

      <div>{this.props.counter.count}</div>
      <button onClick={() => this.props.increment()}>自增
      </button>
      <button onClick={() => this.props.decrement()}>自减
      </button>
      <button onClick={() => this.props.reset()}>重置
      </button>
      <br />
      <button onClick={() => this.props.history.push("/Test")}>Test Page</button>
      <br />
      <button onClick={() => this.props.callApiTest()}>callApiTest axios, count:: 5.</button>
    </div>)
  }
}

const enhance = compose(
  withRouter,
  connect((state) => ({
    counter: state.counter
  }), {
    increment,
    decrement,
    reset,
    callApiTest
  })
)

export default enhance(Hello)
