import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
function Experience({ experience }) {
  function dynamicSort(property) {
    var sortOrder = 1;
    if (property[0] === '-') {
      sortOrder = -1;
      property = property.substr(1);
    }
    return function (a, b) {
      /* next line works with strings and numbers,
       * and you may want to customize it to your needs
       */
      var result =
        a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
      return result * sortOrder;
    };
  }

  const sortedExp = experience.sort(dynamicSort('startDate')).reverse();

  return (
    <motion.div className='h-screen flex relative flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
      <h1 className='sectionTitleClass'>Experience</h1>
      <div className='flex flex-row w-full max-w-3xl space-x-52 p-2 overflow-x-scroll  snap-x snap-mandatory scrollbar scrollbar-track-zinc-700/40 scrollbar-thumb-yellow-700/70 scrollbar-thin'>
        {sortedExp.map((exp, i) => (
          <ExperienceCard
            key={exp._id}
            exp={exp}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default Experience;
