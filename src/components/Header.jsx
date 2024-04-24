import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (
      <div style={{
            backgroundColor: 'darkred',
            width: '100vw',
            height: '20vh',
            position: 'absolute',
            top: 0,
            margin: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 40
        
      }}>S Pomeroy</div>
    )
  }
}

export default Header
