import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './components/Signup'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
return(
  <Router>
    <Routes>
      <Route path="/" element={<Signup/>}/>
    </Routes>
{/* <Signup/> */}
  </Router>
)
}

export default App
