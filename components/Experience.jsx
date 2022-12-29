import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
function Experience() {
  return (
    <motion.div className='h-screen flex relative flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
      <h1 className='sectionTitleClass'>Experience</h1>
      <div className='flex flex-row w-full max-w-3xl space-x-52 p-4 overflow-x-scroll  snap-x snap-mandatory scrollbar scrollbar-track-zinc-700/40 scrollbar-thumb-yellow-700/80 scrollbar-thin'>
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  );
}

export default Experience;
