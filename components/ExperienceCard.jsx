import Image from 'next/image';
import React from 'react';

function ExperienceCard() {
  return (
    <article className='flex flex-col rounded-lg items-center snap-center w-full justify-center space-y-7 flex-shrink-0 p-5 max-w-5xl h-[400px] md:h-[100%] lg:h-[130%] bg-zinc-800 opacity-40 hover:opacity-100 transition-opacity duration-300 mt-24'>
      <div className='flex flex-col items-center'>
        <Image
          src='/squareLogo.png'
          alt='coders'
          width={30}
          height={30}
          className='rounded-full flex mx-auto object-cover'
        />
        <h3 className='text-xl font-semibold'>J. Full-Stack Developer</h3>
      </div>
      <div>
        <h3>Coders Clan</h3>
        <p className='uppercase text-gray-400'>Universe Of Code</p>
        <div className='flex space-x-2 my-2 h-8 '>
          <Image
            src='/html5.png'
            width={35}
            height={30}
            alt='htlm5'
          />
          <Image
            src='/react.png'
            width={35}
            height={30}
            alt='htlm5'
          />
          <Image
            src='/git.png'
            width={35}
            height={30}
            alt='htlm5'
          />
        </div>

        <p>
          started at work in 2022. that what i want to give people. good place
          to learn about programming.
        </p>
        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li>programing... </li>
          <li>create project</li>
          <li>live</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
