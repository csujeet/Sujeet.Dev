import React, { useState, useEffect } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  glitchInterval?: number;
  duration?: number;
}

const GlitchText: React.FC<GlitchTextProps> = ({
  text,
  className = '',
  glitchInterval = 5000,
  duration = 200,
}) => {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    let glitchTimer: NodeJS.Timeout;
    let durationTimer: NodeJS.Timeout;

    const startGlitchCycle = () => {
      glitchTimer = setTimeout(() => {
        setIsGlitching(true);
        
        durationTimer = setTimeout(() => {
          setIsGlitching(false);
          startGlitchCycle();
        }, duration);
      }, glitchInterval);
    };

    startGlitchCycle();

    return () => {
      clearTimeout(glitchTimer);
      clearTimeout(durationTimer);
    };
  }, [glitchInterval, duration]);

  return (
    <span 
      className={`${className} ${isGlitching ? 'glitch' : ''}`} 
      data-text={text}
    >
      {text}
    </span>
  );
};

export default GlitchText;