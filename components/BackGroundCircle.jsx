import { motion } from 'framer-motion';

function BackGroundCircle() {
  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      whileInView={{
        scale: [1, 1.1, 1.4, 0.8, 1],
        opacity: 1
      }}
      transition={{
        duration: 2.5
      }}
      className='pt-7 relative flex justify-center items-center z-0'>
      <div className='border border-gray-500 rounded-full h-[350px] w-[350px] mt-52  animate-ping absolute'></div>
      <div className='border border-zinc-500 rounded-full h-[330px] w-[330px] mt-52 absolute'></div>
      <div className='border border-zinc-800 rounded-full h-[430px] w-[430px] mt-52 absolute'></div>
      <div className='border border-yellow-800 rounded-full h-[530px] w-[530px] mt-52 absolute animate-pulse'></div>
      <div
        div
        className='border border-zinc-800 rounded-full h-[730px] w-[730px] mt-52 absolute animate-pulse'></div>
    </motion.div>
  );
}

export default BackGroundCircle;
