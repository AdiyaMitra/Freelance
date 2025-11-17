import React from 'react'
import './App.css'
//Pages
import LandingPage from './pages/LandingPage';
import DigitalPRPage from './pages/DigitalPRPage';
//Routing
import { BrowserRouter, Routes, Route } from "react-router";


function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/digital-pr" element={<DigitalPRPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
