import { motion } from 'framer-motion';

export default function Projects({ projects }) {
  return (
    <div className='h-screen flex relative flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
      <h3 className='sectionTitleClass'>Projects</h3>

      <div className='relative pt-24 h-full w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-thin scrollbar-track-zinc-700/40 scrollbar-thumb-yellow-700/80'>
        {projects.map((project, i) => (
          <div
            key={project._id}
            className='snap-center  w-full flex-shrink-0  space-y-5 flex items-center justify-center flex-col p-10'>
            <motion.img
              initial={{
                y: -100,
                opacity: 0
              }}
              transition={{
                duration: 1
              }}
              whileInView={{
                y: 0,
                opacity: 1
              }}
              viewport={{ once: true }}
              src={project.image}
              alt='coder'
              className='w-[500px] h-fit max-h-72 object-contain'
            />
            <div className='space-y-10 px-0 md:px-10'>
              <h4 className='text-3xl font-semibold text-center'>
                <span className='underline underline-offset-4 decoration-yellow-700/50'>
                  Project: {i + 1} of {projects.length}
                </span>
                {` `}
                {project.name}
              </h4>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className='w-full absolute left-0 bg-[#f7ab0a]/10 h-[400px] top-[30%] -skew-y-12' />
    </div>
  );
}
