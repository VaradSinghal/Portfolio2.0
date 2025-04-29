import React, { useState, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  glowOnHover?: boolean;
  tiltOnHover?: boolean;
}

const GlassCard = ({
  children,
  className = '',
  glowOnHover = true,
  tiltOnHover = true,
}: GlassCardProps) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tiltOnHover) return;
    
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const tiltX = (y - centerY) / 10;
    const tiltY = (centerX - x) / 10;
    
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div
      className={`${glowOnHover ? 'glass-card-glow' : 'glass-card'} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={glowOnHover ? { scale: 1.02 } : {}}
      style={{
        transform: tiltOnHover ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` : 'none',
        transition: 'transform 0.2s ease-out',
      }}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;