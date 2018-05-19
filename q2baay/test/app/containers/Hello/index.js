import React from 'react'
import {render} from 'react-dom'
import './test.css'
import './test.scss'
import '../Test/styles.css'
import imgTest from './test.png'
import {increment, decrement, reset} from './action'
import { compose } from 'redux'
import {connect} from 'react-redux'
import SubToHistory from './subPage/SubToHistory'
import history from '../../router/history'
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
      <button onClick={() => history.push("/Test")}>Test Page</button>

      <SubToHistory />
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
