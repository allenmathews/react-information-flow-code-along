import React, { Component } from 'react'
import { render } from 'react-dom'
import { getRandomColor } from './randomColorGenerator.js'

class Child extends Component {
  render() {
    console.log(this.props)
    return (
      <div
        onClick={() => this.props.handleColorChange(getRandomColor())}
        className="child"
        style={{ backgroundColor: this.props.color }}
      ></div>
    )
  }
}

export default Child
