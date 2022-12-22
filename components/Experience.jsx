import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
function Experience() {
  return (
    <motion.div className='h-screen flex relative flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
      <h1 className='sectionTitleClass'>Experience</h1>
      <div>
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  );
}

export default Experience;
