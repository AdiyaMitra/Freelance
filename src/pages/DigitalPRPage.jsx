import React from 'react'
import { heroContent } from "../content/heroContent";
import HeroSection from "../components/HeroSection";

const DigitalPRPage = () => {
    const content = heroContent.digitalPR;
  return (
    <div>
        <HeroSection {...content} />
    </div>
  )
}

export default DigitalPRPage