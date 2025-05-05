import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const ParallaxLayer = ({ children, transformX, transformY, ...rest }) => {
  const combinedRef = useRef(null);

  return (
    <motion.div
      ref={combinedRef}
      style={{ 
        x: transformX,
        y: transformY,
        willChange: 'transform' // Performance optimization
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxLayer; 