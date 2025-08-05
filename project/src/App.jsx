import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Monetization from './components/monetization/Monetization'
import FlashCardApp from './components/FlashCardApp'
import About from './components/About'
import Navigation from './components/Navigation'

function App() {

  return (
    <Monetization>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<FlashCardApp />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </Monetization>
  )
}

export default App