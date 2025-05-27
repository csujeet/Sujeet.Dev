import React, { useEffect, useRef } from 'react';

interface MatrixRainProps {
  speed?: number;
  fontSize?: number;
  opacity?: number;
}

const MatrixRain: React.FC<MatrixRainProps> = ({ 
  speed = 50, 
  fontSize = 14,
  opacity = 0.8
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions to match window
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Matrix characters
    const matrixChars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ:;=+*-~<>[](){}abcdefghijklmnopqrstuvwxyz';
    
    // Create drops
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = [];
    
    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * -canvas.height);
    }

    // Drawing animation
    const draw = () => {
      // Black background with opacity
      ctx.fillStyle = `rgba(13, 2, 8, 0.05)`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Green matrix text
      ctx.fillStyle = `rgba(0, 255, 65, ${opacity})`;
      ctx.font = `${fontSize}px JetBrains Mono`;

      // Draw drops
      for (let i = 0; i < drops.length; i++) {
        // Random character
        const char = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        
        // Draw character
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        
        // Vary the color for more realism
        if (Math.random() > 0.98) {
          ctx.fillStyle = `rgba(57, 255, 20, ${opacity})`;  // Brighter for some chars
        } else {
          ctx.fillStyle = `rgba(0, 255, 65, ${opacity})`;
        }
        
        ctx.fillText(char, x, y);

        // Reset when off screen
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        
        // Move drops down
        drops[i]++;
      }
    };

    const interval = setInterval(draw, speed);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [fontSize, speed, opacity]);

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />;
};

export default MatrixRain;