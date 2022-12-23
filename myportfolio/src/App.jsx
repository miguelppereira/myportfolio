import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './styles/tailwind.css'
import Header from './components/Header'
import Intro from './components/Intro'
import Stack from './components/Stack'
import Timeline from './components/Timeline'
import Footer from './components/Footer'

function App() {
 
  return (
    <div className="App">
      <Header/>
      <Intro/>
      <Stack/>
      <Timeline/>
      <Footer/>
    </div>
  )
}

export default App
