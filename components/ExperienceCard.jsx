import Image from 'next/image';
import React from 'react';

function ExperienceCard() {
  return (
    <article className='flex flex-col rounded-lg items-center snap-center w-full justify-center space-y-7 flex-shrink-0 p-5 h-[400px] md:h-[100%] lg:h-[130%] bg-zinc-800 opacity-60 hover:opacity-100 transition-opacity duration-300 mt-24'>
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
        <h4>Coders Clan</h4>
        <div className='flex space-x-2 my-2'>
          <Image
            src='/html5.png'
            width={40}
            height={40}
            alt='htlm5'
          />
          <Image
            src='/html5.png'
            width={40}
            height={40}
            alt='htlm5'
          />
          <Image
            src='/html5.png'
            width={40}
            height={40}
            alt='htlm5'
          />
        </div>
        <p className='uppercase text-gray-400'></p>
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
