'use client';

import React from 'react';
import { motion } from 'motion/react';
import './CircularText.css';

interface CircularTextProps {
  text: string;
  spinDuration?: number;
  onHover?: 'slowDown' | 'speedUp' | 'pause';
  className?: string;
  radius?: number;
}

const CircularText: React.FC<CircularTextProps> = ({ 
  text, 
  spinDuration = 20, 
  onHover = 'pause', 
  className = '',
  radius = 80
}) => {
  const letters = Array.from(text);
  
  return (
    <div className={`circular-text-wrapper ${className}`} style={{ width: radius * 2.5, height: radius * 2.5, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <motion.div 
        className="circular-text-container"
        animate={{ rotate: 360 }}
        transition={{
          duration: spinDuration,
          ease: 'linear',
          repeat: Infinity,
        }}
        style={{ width: '0', height: '0' }} // The letters translate out from here
      >
        {letters.map((letter, i) => {
          const rotation = (360 / letters.length) * i;
          return (
            <span 
              key={i} 
              className="circular-text-letter"
              style={{ 
                transform: `translate(-50%, -50%) rotate(${rotation}deg) translateY(-${radius}px)`,
              }}
            >
              {letter}
            </span>
          );
        })}
      </motion.div>
    </div>
  );
};
export default CircularText;
