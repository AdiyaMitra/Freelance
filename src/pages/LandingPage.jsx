import React from 'react'
import { heroContent } from "../content/heroContent";
import HeroSection from "../components/HeroSection";

const LandingPage = () => {
    const content = heroContent.landingPage;
    return (
        <div>
            <HeroSection {...content} />
        </div>
    )
}

export default LandingPage