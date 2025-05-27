import React, { useState, useEffect } from 'react';
import TypewriterText from './TypewriterText';

const Loader: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Initializing system...');

  useEffect(() => {
    const loadingTexts = [
      'Initializing system...',
      'Connecting to the Matrix...',
      'Establishing secure connection...',
      'Loading neural interface...',
      'Decoding reality...',
      'Wake up, Neo...',
    ];

    let currentTextIndex = 0;
    const textInterval = setInterval(() => {
      currentTextIndex = (currentTextIndex + 1) % loadingTexts.length;
      setLoadingText(loadingTexts[currentTextIndex]);
    }, 2000);

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + Math.random() * 10;
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 200);

    return () => {
      clearInterval(interval);
      clearInterval(textInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-matrix-black flex flex-col items-center justify-center z-50">
      <div className="w-full max-w-md mx-auto px-4">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-2 text-matrix-green">SUJEET.DEV</h1>
          <p className="text-matrix-green opacity-75">
            <TypewriterText text={loadingText} speed={50} />
          </p>
        </div>
        
        <div className="w-full bg-matrix-gray rounded-full h-2 mb-4">
          <div 
            className="bg-matrix-green h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        <div className="text-right text-matrix-green text-sm mb-8">
          {Math.floor(progress)}%
        </div>
        
        <div className="text-matrix-green text-xs font-mono">
          <div className="animate-pulse">
            &gt; Accessing mainframe...
          </div>
          <div className="mt-1">
            &gt; Bypassing security protocols...
          </div>
          <div className="mt-1">
            &gt; Establishing connection...
          </div>
          {progress > 50 && (
            <div className="mt-1">
              &gt; Downloading portfolio data...
            </div>
          )}
          {progress > 80 && (
            <div className="mt-1">
              &gt; Rendering digital environment...
            </div>
          )}
          {progress === 100 && (
            <div className="mt-1">
              &gt; System ready. Welcome to the Matrix.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Loader;