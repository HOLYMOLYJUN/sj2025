'use client';

import { useState, useEffect } from 'react';
import '../styles/customCursor.css';

interface Trailer {
  x: number;
  y: number;
  id: string;
}

let trailerCounter = 0;

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [clicked, setClicked] = useState<boolean>(false);
  const [hovered, setHovered] = useState<boolean>(false);
  const [trailers, setTrailers] = useState<Trailer[]>([]);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const newTrailer: Trailer = {
        x: e.clientX,
        y: e.clientY,
        id: `${e.clientX}-${e.clientY}-${Date.now()}-${trailerCounter++}`,
      };

      setTrailers((prev) => [...prev, newTrailer]);
      
      // 300ms 후 해당 트레일러 제거
      setTimeout(() => {
        setTrailers((prev) =>
          prev.filter((trailer) => trailer.id !== newTrailer.id)
        );
      }, 300);
    };

    const clickEffect = () => {
      setClicked(true);
      setTimeout(() => setClicked(false), 150);
    };

    const addHoverEffect = () => setHovered(true);
    const removeHoverEffect = () => setHovered(false);

    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mousedown', clickEffect);

    const elements = document.querySelectorAll('a, input, button, span, label, textarea, .works_item');
    elements.forEach((el) => {
      el.addEventListener('mouseenter', addHoverEffect);
      el.addEventListener('mouseleave', removeHoverEffect);
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mousedown', clickEffect);
      elements.forEach((el) => {
        el.removeEventListener('mouseenter', addHoverEffect);
        el.removeEventListener('mouseleave', removeHoverEffect);
      });
    };
  }, []);




  return (
    <div className={`custom-cursor `}>
      {/* 커스텀 커서 */}
      <div
        className={`cursor ${clicked ? 'clicked' : ''} ${hovered ? 'hover' : ''}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      {/* 트레일러들 */}
      {trailers.map((trailer, index) => {
        const idxFromLatest = trailers.length - index - 1;
        const baseScale = 1;
        const scaleFactor = Math.max(baseScale - idxFromLatest * 0.1, 0.5);
        const baseSize = 15;
        const size = baseSize * scaleFactor;
        return (
          <span
            key={trailer.id}
            className="trailer"
            style={{
              left: `${trailer.x}px`,
              top: `${trailer.y}px`,
              width: `${size}px`,
              height: `${size}px`,
              animationDelay: `${index * 0.05}s`,
            }}
          />
        );
      })}
    </div>
  );
};

export default CustomCursor;
