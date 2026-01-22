import React from 'react';
import { motion } from 'framer-motion';

const HeroImage = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Decorative Particle Animation Placeholder */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="w-20 h-20 rounded-full bg-cyan-500/20 blur-xl"
      />
    </div>
  );
};

export default HeroImage;