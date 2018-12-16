import React from 'react'
import { compose } from 'redux'
import {connect} from 'react-redux'
import history from '../../../router/history'
class SubToHistory extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <button onClick={() => this.props.history.push("/Test")}>Test Page subPage -001</button>
        <button onClick={() => history.push("/Test")}>SubPage Test Page</button>
      </div>
    )
  }
}

const enhance = compose(
  connect((state) => ({
  }), {
  })
)

export default enhance(SubToHistory)
