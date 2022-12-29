import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';
function Header() {
  return (
    <header className='sticky top-0 flex flex-row justify-between mx-auto max-w-7xl p-4 z-20'>
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.5
        }}
        className='flex flex-row items-center'>
        <SocialIcon
          url='https://www.facebook.com/'
          fgColor='gray'
          bgColor='transparent'
        />
        <SocialIcon
          url='https://www.instagram.com/'
          fgColor='gray'
          bgColor='transparent'
        />
        <SocialIcon
          url='https://www.linkedin.com/'
          fgColor='gray'
          bgColor='transparent'
        />
        <SocialIcon
          url='https://www.twitter.com/'
          fgColor='gray'
          bgColor='transparent'
        />
        <SocialIcon
          url='https://www.youtube.com/'
          fgColor='gray'
          bgColor='transparent'
        />
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1,
          delay: 1
        }}
        className='cursor-pointer'>
        <SocialIcon
          network='email'
          url='mailto:coder.mariusz@gmail.com'
          fgColor='gray'
          bgColor='transparent'
        />
        <Link href='mailto:coder.mriusz@gmail.com'>
          <p className='uppercase hidden text-gray-500 font-bold text-sm md:inline-flex sm:'>
            GET IN TOUCH
          </p>
        </Link>
      </motion.div>
    </header>
  );
}

export default Header;
