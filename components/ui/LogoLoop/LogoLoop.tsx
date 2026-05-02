'use client';

import React from 'react';
import { motion } from 'motion/react';
import './LogoLoop.css';

interface LogoLoopProps {
  items: React.ReactNode[];
  speed?: number; // duration of one full cycle in seconds
  direction?: 'left' | 'right';
  pauseOnHover?: boolean;
  className?: string;
}

const LogoLoop = ({
  items,
  speed = 20,
  direction = 'left',
  pauseOnHover = true,
  className = '',
}: LogoLoopProps) => {
  const isLeft = direction === 'left';
  
  // Duplicate items to ensure seamless loop
  const duplicatedItems = [...items, ...items];

  return (
    <div className={`logoloop ${className}`}>
      <motion.div
        className="logoloop__track"
        animate={{
          x: isLeft ? [0, '-50%'] : ['-50%', 0],
        }}
        transition={{
          duration: speed,
          ease: 'linear',
          repeat: Infinity,
        }}
        style={{
          display: 'flex',
          width: 'max-content'
        }}
      >
        <div className="logoloop__list">
          {duplicatedItems.map((item, idx) => (
            <div key={idx} className="logoloop__item">
              {item}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default LogoLoop;
