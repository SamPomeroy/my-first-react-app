import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import Body from './components/Body'



export default function App() {
 
  return (
    <div>
      <Header/>
        <div style={{display: 'flex', width: '100vw', height: '60vh', marginTop: '20vh'}}>
        <Sidebar/>
        <Body/>
        </div>

        

      <Footer/>
    </div>
  )
}