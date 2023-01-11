import { motion } from 'framer-motion';

function About({ backgroundInfo, profileImage }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 2 }}
      animate={{ opacity: 1 }}
      className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center space-y-16'>
      <h3 className='sectionTitleClass'>About</h3>
      <motion.img
        src='https://cdn.sanity.io/images/mfhg29ur/production/3fb0c5c402d4493e606796b79b29895da3b8ec4a-610x610.jpg'
        initial={{
          x: -330,
          opacity: 0
        }}
        transition={{
          duration: 1
        }}
        whileInView={{
          x: 0,
          opacity: 1
        }}
        viewport={{ once: true }}
        property='x'
        className='mb-20 md:mb-0 md:ml-4 flex flex-shrink-0 rounded-full h-56 w-56 md:h-96 md:w-96 lg:h-[550px] lg:w-[400px] md:rounded-md object-cover'
      />
      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-3xl font-semibold'>
          Here is a{' '}
          <span className='underline underline-offset-8 decoration-yellow-400/70'>
            little
          </span>{' '}
          bit About Me
        </h4>
        <p className='text-base p-3'>{backgroundInfo}</p>
      </div>
    </motion.div>
  );
}

export default About;
