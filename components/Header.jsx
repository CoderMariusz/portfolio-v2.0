import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';

function Header({ socials, email, socialRef }) {
  const sendEmail = `mailto:${email}`;
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
        {socials?.map((social) =>
          socialRef.map((e) => {
            if (e.id === social._ref) {
              return (
                <SocialIcon
                  key={e.rev}
                  url={e.url}
                  name={e.name}
                  fgColor='gray'
                  bgColor='transparent'
                  className='cursor-pointer hover:bg-yellow-500 transition-all ease-in-out duration-500 rounded-xl mr-4'
                />
              );
            }
          })
        )}
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
        className='cursor-pointer px-2'>
        <SocialIcon
          network='email'
          url={sendEmail}
          fgColor='gray'
          bgColor='transparent'
        />
        <Link href={sendEmail}>
          <p className='uppercase hidden text-gray-500 font-bold text-sm md:inline-flex sm:'>
            GET IN TOUCH
          </p>
        </Link>
      </motion.div>
    </header>
  );
}

export default Header;
