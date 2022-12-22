import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackGroundCircle from './BackGroundCircle';

function Hero() {
  const [text, count] = useTypewriter({
    words: [
      `Hello I'm Mariusz <span>Junior</span> Frontend Developer`,
      'love to coding with React.js',
      'and cup of <strong>coffee</strong>'
    ],
    loop: true,
    delaySpeed: 2000
  });
  return (
    <div className='h-screen'>
      <BackGroundCircle />
      <h1 className='text-md md:text-2xl'>
        <span>{text}</span>
        <Cursor cursorColor='#f7ABBA' />
      </h1>
    </div>
  );
}

export default Hero;
