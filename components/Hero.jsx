import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackGroundCircle from './BackGroundCircle';

function Hero({ backgroundInfo }) {
  const [text, count] = useTypewriter({
    words: [
      `Hello, I'm Mariusz Junior Frontend Developer`,
      'Love to coding with React.js',
      'And <b>Cup</b> of <strong>coffee</strong>'
    ],
    loop: true,
    delaySpeed: 2000
  });
  return (
    <div
      id='top'
      className='h-screen flex flex-col space-y-8 justify-center text-center overflow-hidden pt-20'>
      <BackGroundCircle />
      <div className='pt-1 z-10'>
        <Image
          src='/photo.jpg'
          width={128}
          height={128}
          className=' rounded-full mx-auto object-cover'
          alt='Mariusz'
        />
      </div>
      <h2 className='text-sm uppercase font-bold text-gray-500 z-10 tracking-[10px] '>
        Junior Web Developer
      </h2>
      <h1 className='text-md font-semibold md:text-3xl z-10'>
        <span>{text}</span>
        <Cursor cursorColor='#f7ABBA' />
      </h1>
      <div className=' pt-2 z-10'>
        <Link href='#about'>
          <button className='heroButtonClass'>About</button>
        </Link>
        <Link href='#experience'>
          <button className='heroButtonClass'>Experience</button>
        </Link>
        <Link href='#skills'>
          <button className='heroButtonClass'>Skills</button>
        </Link>
        <Link href='#project'>
          <button className='heroButtonClass'>Project</button>
        </Link>
        <Link href='#contact'>
          <button className='heroButtonClass'>Contact</button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
