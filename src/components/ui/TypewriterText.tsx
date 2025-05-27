import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  delay?: number;
  speed?: number;
  infinite?: boolean;
  className?: string;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  delay = 0,
  speed = 80,
  infinite = false,
  className = '',
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(true);

  useEffect(() => {
    if (isWaiting) {
      const timer = setTimeout(() => {
        setIsWaiting(false);
      }, delay);
      return () => clearTimeout(timer);
    }

    if (isDeleting) {
      const timer = setTimeout(() => {
        setDisplayText(text.substring(0, currentIndex - 1));
        setCurrentIndex(currentIndex - 1);
        
        if (currentIndex <= 1) {
          setIsDeleting(false);
          if (infinite) {
            setIsWaiting(true);
          }
        }
      }, speed / 2);
      
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setDisplayText(text.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
        
        if (currentIndex >= text.length) {
          if (infinite) {
            setTimeout(() => {
              setIsDeleting(true);
            }, 1000);
          }
        }
      }, speed);
      
      return () => clearTimeout(timer);
    }
  }, [currentIndex, delay, infinite, isDeleting, isWaiting, speed, text]);

  return (
    <span className={`${className} ${currentIndex < text.length ? 'cursor-blink' : ''}`}>
      {displayText}
    </span>
  );
};

export default TypewriterText;