import { useState } from 'react'
import reactLogo from './assets/react.svg'
import React from 'react'
import Navbar from './Navbar.jsx'
import Content from './Content.jsx'
import Footer from './Footer.jsx'

import './index.css'         // Your custom CSS last

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Content/>
      <Footer/>
    </div>
  )
}

export default App
