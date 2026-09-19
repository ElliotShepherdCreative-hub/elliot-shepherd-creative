import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <div 
      className="fixed top-0 left-0 right-0 z-[60] h-[2.5px] sm:h-[3px] pointer-events-none bg-stone-900/5 backdrop-blur-[0.5px]"
      aria-hidden="true"
      id="editorial-scroll-progress"
    >
      <motion.div
        className="h-full bg-gradient-to-r from-[#8E4B28] via-[#B86338] to-[#D48255] origin-left shadow-[0_0_8px_rgba(142,75,40,0.4)]"
        style={{ scaleX }}
      />
    </div>
  );
};
