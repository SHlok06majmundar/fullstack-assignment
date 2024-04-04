import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './components/Signup'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Welcome } from './components/Welcome'

function App() {
return(
  <Router>
    <Routes>
      <Route path="/" element={<Signup/>}/>
      <Route path="/welcome" element={<Welcome/>}/>
    </Routes>

  </Router>
)
}

export default App
