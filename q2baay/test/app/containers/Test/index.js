import React from 'react'
import styles from './styles.css'

class Test extends React.Component {
  render() {
    return (<div className={styles.text}>
      FFFFFFFFFFFFFddddddddd
      <p>P标签检测是否被污染</p>
      <button onClick={() => this.props.history.go(-1)}>返回</button>
    </div>)
  }
}

export default Test
