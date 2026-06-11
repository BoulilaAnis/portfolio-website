'use client'

import { motion } from 'motion/react'

export default function WavyLine() {
  return (
    <div className="w-[90%] overflow-hidden">
      <motion.svg
        className="w-[200%] h-6 fill-none stroke-primary stroke-3"
        viewBox="0 0 1200 24"
        xmlns="http://www.w3.org/2000/svg"
        
        // Loop from 0 to -50% for a seamless infinite scroll
        animate={{ x: [0, '-50%'] }}
        
        transition={{
          duration: 4,       // Adjust for speed (higher = slower)
          ease: 'linear',    // Critical for smooth, un-interrupted movement
          repeat: Infinity,  // Loop forever
        }}
      >
        <path d="M 0 12 Q 75 0, 150 12 T 300 12 T 450 12 T 600 12 T 750 12 T 900 12 T 1050 12 T 1200 12" />
      </motion.svg>
    </div>
  )
}