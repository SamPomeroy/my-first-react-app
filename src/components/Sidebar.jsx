import React, { Component } from 'react'

export class Sidebar extends Component {
    state = {
        backgroundColor: 'lightblue',
      }
      changeColor = (color) => {
        this.setState({backgroundColor: color})
      }
  render() {
    return (
        <div style={{width: '20vw', backgroundColor: this.state.backgroundColor}}>
        <ul className='unordered'>
            <li onClick={()=>this.changeColor('purple')} className='list'>Purple</li>
            
            <li onClick={()=>this.changeColor('cyan')} className='list'>Cyan</li>

            <li onClick={()=>this.changeColor('yellow')} className='list'>Yellow</li>
        </ul>
    </div>
    )
  }
}

export default Sidebar