'use client';

import React from 'react';
import { motion } from 'motion/react';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  animateBy?: 'words' | 'letters';
}

const SplitText = ({ 
  text, 
  className = '', 
  delay = 0.05, 
  duration = 0.5,
  animateBy = 'words'
}: SplitTextProps) => {
  const elements = animateBy === 'words' ? text.split(' ') : Array.from(text);

  return (
    <span className={`inline-block ${className}`}>
      {elements.map((el, i) => (
        <span key={i} style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'top' }}>
          <motion.span
            initial={{ y: '100%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration,
              delay: i * delay,
              ease: [0.215, 0.61, 0.355, 1], // Cubic-bezier easeOut
            }}
            style={{ display: 'inline-block' }}
          >
            {el}{animateBy === 'words' ? '\u00A0' : ''}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

export default SplitText;
