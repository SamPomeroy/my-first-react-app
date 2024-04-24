import React, { Component } from 'react'
import image1 from '../assets/mandala.webp'
import image2 from '../assets/mandala1.jpg'
import image3 from '../assets/mandala2.jpg'
import image4 from '../assets/octoMandala.webp'
import Box from './Box'

export class Body extends Component {
  render() {
    return (
      <div className='body'>
        <img src={image1} alt="ying yang mandala" />
        <p style={{padding: 20, }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas molestiae cumque, aperiam enim magnam et ipsa odit sit doloribus similique veniam in voluptatem, illo ipsum.
        </p>
        <div style={{display: 'flex'}}>
          <Box name='Square 1' url={image2}/>
          <Box name='Square 2' url={image3}/>
          <Box name='Square 3' url={image4}/>
        </div>
        </div>
    )
  }
}

export default Body