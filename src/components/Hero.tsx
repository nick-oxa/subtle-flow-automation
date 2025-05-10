
import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [headlineVisible, setHeadlineVisible] = useState(false);
  const [subheadlineVisible, setSubheadlineVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];
    
    timeouts.push(setTimeout(() => setHeadlineVisible(true), 300));
    timeouts.push(setTimeout(() => setSubheadlineVisible(true), 1000));
    timeouts.push(setTimeout(() => setCtaVisible(true), 1700));
    
    return () => timeouts.forEach(timeout => clearTimeout(timeout));
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="h-screen flex items-center justify-center bg-offwhite relative">
      <div className="text-center px-4">
        <h1 
          className={`font-cal text-5xl md:text-7xl mb-4 transition-opacity duration-700 ${
            headlineVisible ? 'opacity-100' : 'opacity-0 translate-y-6'
          }`}
        >
          Automate Your Workflow
        </h1>
        
        <h2 
          className={`font-inter font-light text-xl md:text-2xl mb-12 transition-all duration-700 delay-300 ${
            subheadlineVisible ? 'opacity-100' : 'opacity-0 translate-y-6'
          }`}
        >
          One Task At a Time
        </h2>
        
        <button
          onClick={scrollToContact}
          className={`bg-charcoal text-offwhite font-inter px-8 py-3 rounded lift-on-hover transition-all duration-700 delay-500 ${
            ctaVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Let's Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
