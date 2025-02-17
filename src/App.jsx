import { useState } from 'react'
import Header from './components/Header'
import Movies from './components/Movies'

import './App.css'

function App() {
  
  const container = {
    display :'flex',
    flexDirection: 'column'
  }

  return (
    <div className='container' style={container}>
      <Header />
      <Movies />
    </div>
  )
}

export default App
