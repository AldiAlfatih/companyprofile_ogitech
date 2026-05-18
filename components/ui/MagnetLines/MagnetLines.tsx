'use client';

import React, { useRef, useEffect } from 'react';
import './MagnetLines.css';

interface MagnetLinesProps {
  rows?: number;
  columns?: number;
  containerSize?: string;
  lineColor?: string;
  lineWidth?: string;
  lineHeight?: string;
  baseAngle?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function MagnetLines({
  rows = 9,
  columns = 9,
  containerSize = '80vmin',
  lineColor = '#efefef',
  lineWidth = '1vmin',
  lineHeight = '6vmin',
  baseAngle = -10,
  className = '',
  style = {}
}: MagnetLinesProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = container.querySelectorAll('span') as NodeListOf<HTMLElement>;
    let itemsData: { element: HTMLElement; centerX: number; centerY: number }[] = [];

    const calculatePositions = () => {
      itemsData = Array.from(items).map(item => {
        const rect = item.getBoundingClientRect();
        return {
          element: item,
          centerX: rect.x + rect.width / 2,
          centerY: rect.y + rect.height / 2
        };
      });
    };

    // Calculate initial positions
    calculatePositions();

    const onPointerMove = (pointer: { x: number; y: number }) => {
      itemsData.forEach(({ element, centerX, centerY }) => {
        const b = pointer.x - centerX;
        const a = pointer.y - centerY;
        const c = Math.sqrt(a * a + b * b) || 1;
        const r = ((Math.acos(b / c) * 180) / Math.PI) * (pointer.y > centerY ? 1 : -1);

        element.style.setProperty('--rotate', `${r}deg`);
      });
    };

    const handlePointerMove = (e: PointerEvent) => {
      // Use requestAnimationFrame to throttle the updates
      requestAnimationFrame(() => {
        onPointerMove({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('resize', calculatePositions);

    if (itemsData.length) {
      const middleIndex = Math.floor(itemsData.length / 2);
      const { centerX, centerY } = itemsData[middleIndex];
      onPointerMove({ x: centerX, y: centerY });
    }

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('resize', calculatePositions);
    };
  }, [rows, columns]);

  const total = rows * columns;
  const spans = Array.from({ length: total }, (_, i) => (
    <span
      key={i}
      style={{
        // @ts-ignore
        '--rotate': `${baseAngle}deg`,
        backgroundColor: lineColor,
        width: lineWidth,
        height: lineHeight
      }}
    />
  ));

  return (
    <div
      ref={containerRef}
      className={`magnetLines-container ${className}`}
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        width: containerSize,
        height: containerSize,
        ...style
      } as React.CSSProperties}
    >
      {spans}
    </div>
  );
}
