import React, { useEffect, useState } from 'react';
import MatrixRain from '../animations/MatrixRain';
import TypewriterText from '../ui/TypewriterText';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowArrow(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <MatrixRain />
      
      <div className="absolute inset-0 bg-gradient-to-b from-matrix-black via-transparent to-matrix-black opacity-80 z-10"></div>
      
     <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-matrix-green">
    <TypewriterText 
      text="Hello and Welcome!" 
      delay={500}
      speed={100}
    />
  </h1>
  
  <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-matrix-green">
    <TypewriterText 
      text="Crafting Innovative Digital Solutions" 
      delay={1500}
      speed={100}
    />
  </h2>
        
  <p className="text-xl sm:text-2xl md:text-3xl mb-8 text-matrix-light-green opacity-90">
    <TypewriterText 
      text="Full-Stack Developer | Building Scalable & Robust Web Applications" 
      delay={3000}
      speed={50}
    />
  </p>

  <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
    <a 
      href="#projects" 
      className="matrix-button text-lg font-medium"
    >
      View My Work
    </a>
    
    <a 
      href="#contact" 
      className="matrix-button text-lg font-medium"
    >
      Connect
    </a>
  </div>
</div>
      
      {showArrow && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce transition-opacity duration-1000 opacity-70 hover:opacity-100">
          <a href="#about" aria-label="Scroll down">
            <ArrowDown size={32} className="text-matrix-green" />
          </a>
        </div>
      )}
    </section>
  );
};

export default Hero;