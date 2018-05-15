import React from 'react'
import {render} from 'react-dom'
import './test.css'
import './test.scss'
import '../Test/styles.css'
import imgTest from './test.png'
import {increment, decrement, reset} from './action'
import { compose } from 'redux'
import {connect} from 'react-redux'

class Hello extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (<div>
      <img src={imgTest}/>
      <p className='text'>'process.env.NODE_ENV:: ' {process.env.NODE_ENV}</p>

      <div>count:: {this.props.counter.count}</div>
      <button onClick={() => this.props.increment()}>自增
      </button>
      <button onClick={() => this.props.decrement()}>自减
      </button>
      <button onClick={() => this.props.reset()}>重置
      </button>
      <br />
      <button onClick={() => this.props.history.push("/Test")}>Test Page</button>
    </div>)
  }
}

const enhance = compose(
  connect((state) => ({
    counter: state.counter
  }), {
    increment,
    decrement,
    reset
  })
)

export default enhance(Hello)
