import { motion } from 'framer-motion';

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 2 }}
      animate={{ opacity: 1 }}
      className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center space-y-16'>
      <h3 className='sectionTitleClass'>About</h3>
      <motion.img
        src='/photo.jpg'
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
        <p className='text-base p-3'>
          I'm a self-taught Frontend Developer from Poland. I'm passionate about
          creating websites and web applications that provide intuitive,
          pixel-perfect user interfaces with efficient and modern backends. I'm
          currently looking for a Frontend Developer position. I'm a fast
          learner, hard worker and team player. I'm also open to remote work.
          I'm a big fan of React.js and Next.js. I'm also interested in learning
          more about React Native. I love to create beautiful and responsive
          websites. I'm also interested about backend technologies like Node.js
          and Express.js. Looking forward to have challenging and interesting
          projects and work with a great team.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
