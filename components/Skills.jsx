import React from 'react';
import Skill from './Skill';

function Skills() {
  return (
    <div className='h-screen flex relative flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
      <h3 className='sectionTitleClass'>Skills</h3>
      <h3 className='absolute top-36 uppercase tracking-[4px] text-gray-600 text-sm font-semibold'>
        Hover over the icons to see the technologies I use. Click on the
        icons...
      </h3>
      <div className='grid grid-cols-4 gap-5'>
        <Skill
          url='/git.png'
          percentages='60%'
        />
        <Skill
          url='/html5.png'
          percentages='70%'
        />
        <Skill
          url='/icons8-javascript.svg'
          percentages='70%'
        />
        <Skill
          url='/icons8-firebase.svg'
          percentages='60%'
        />
        <Skill
          url='/icons8-react.svg'
          percentages='60%'
        />
        <Skill
          url='/icons8-react.svg'
          percentages='60%'
        />
        <Skill
          url='/icons8-nodejs.svg'
          percentages='40%'
        />
        <Skill
          url='/icons8-mongodb.svg'
          percentages='60%'
        />
        <Skill
          url='/icons8-tailwindcss.svg'
          direction='right'
          percentages='70%'
        />
        <Skill
          url='/next-js.svg'
          direction='right'
          percentages='80%'
        />
        <Skill
          url='/vercel.svg'
          direction='right'
          percentages='80%'
        />
      </div>
    </div>
  );
}

export default Skills;
