import React from 'react'
import './App.css'
import HeroSection from "./components/HeroSection";
import { heroContent } from "./content/heroContent";
import { BrowserRouter, Routes, Route } from "react-router";

const LandingPage = () => {
  const content = heroContent.landingPage;
  return (
    <>
      <HeroSection {...content} />
    </>
  );
};

const DigitalPRPage = () => {
  const content = heroContent.digitalPR;
  return (
    <>
      <HeroSection {...content} />
    </>
  );
};

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
