import Image from 'next/image';
import React from 'react';

function ExperienceCard({ exp }) {
  const pointSlice = exp.points.slice(0, 5);
  return (
    <article className='flex flex-col rounded-lg items-center snap-center w-full justify-center space-y-7 flex-shrink-0 p-4  max-w-2xl h-[550px] md:h-[100%] lg:h-[130%] bg-zinc-800 opacity-40 hover:opacity-100 transition-opacity duration-300 mt-1 '>
      <div className='flex flex-col items-center pt-[10px]'>
        <Image
          src='/squareLogo.png'
          alt='coders'
          width={30}
          height={30}
          className='rounded-full flex mx-auto object-cover'
        />
        <h3 className='text-xl font-semibold'>{exp.jobTitle}</h3>
      </div>
      <div>
        <h3>{exp.companyName}</h3>
        <p className='uppercase text-gray-400'>Universe Of Code</p>
        <div className='flex space-x-2 my-1 h-1 md:h-8 '>
          {exp.techStack?.map((tech, i) => (
            <Image
              key={i}
              src={tech.image}
              width={35}
              height={30}
              alt={tech.name}
            />
          ))}
        </div>

        <p>{exp.jobDescription}</p>
        <ul className='list-disc space-y-4 ml-5 text-xs md:text-md'>
          {pointSlice.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
          {exp.points.length > 5 && <li key={6}>Read more...</li>}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
