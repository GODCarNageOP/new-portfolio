import React from 'react'
import { motion } from 'framer-motion'

const Ontop = () => {
  return (
    <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center top-16'>
    <a href='#'>
      <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 mt-20'>
        <motion.div
          animate={{
            y: [0, 24, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className='w-3 h-3 rounded-full bg-cyan-100 mb-1'
        />
      </div>
    </a>
  </div>
  )
}

export default Ontop