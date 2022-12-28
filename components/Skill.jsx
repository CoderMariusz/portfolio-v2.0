import React from 'react';
import { motion } from 'framer-motion';
export default function Skill({
  direction = 'left',
  title = 'React',
  url = '',
  percentages = ''
}) {
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.img
        initial={{
          x: direction === 'left' ? -100 : 100,
          opacity: 0
        }}
        transition={{
          duration: 1,
          delay: 1
        }}
        whileInView={{
          opacity: 1,
          x: 0
        }}
        src={url}
        alt={title}
        className='w-20 h-20 rounded-full border border-gray-700 oject-cover p-2 filter grayscale group-hover:grayscale-0 transition duration-500 ease-in-out'
      />
      <div className='absolute rounded-full opacity-0 group-hover:opacity-70 transition duration-500 ease-in-out group-hover:bg-slate-100 h-20 w-20'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-3xl font-bold text-black'>{percentages}</p>
        </div>
      </div>
    </div>
  );
}
