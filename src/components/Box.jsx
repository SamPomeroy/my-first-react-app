import React, { Component } from 'react'

export class Box extends Component {
  render(props) {
    return (
      <div style={{height: 150, width: 150, backgroundImage: `url(${this.props.url})`}}>
        <h3>{this.props.name}</h3>
      </div>
    )
  }
}

export default Box