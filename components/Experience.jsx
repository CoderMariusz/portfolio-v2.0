import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
function Experience() {
  return (
    <motion.div className='h-screen flex relative flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
      <h1 className='sectionTitleClass'>Experience</h1>
      <div className='flex flex-row w-full max-w-5xl space-x-10 p-2 overflow-x-scroll  snap-x snap-mandatory'>
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  );
}

export default Experience;
