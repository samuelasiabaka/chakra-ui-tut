import { useState } from 'react'
import { Box } from '@chakra-ui/react'
import Header from './components/Header'
import Pricing from './components/Pricing'

import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Pricing />
    </div>
  )
}

export default App
