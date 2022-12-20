import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
function Header() {
  return (
    <header className='sticky flex flex-row justify-between max-w-7xl'>
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
      <div>
        <SocialIcon
          network='email'
          url='mailto:coder.mariusz@gmail.com'
          fgColor='gray'
          bgColor='transparent'
        />
        <p className='uppercase hidden text-gray-500 font-bold text-sm md:inline-flex sm:'>
          GET IN TOUCH
        </p>
      </div>
    </header>
  );
}

export default Header;
