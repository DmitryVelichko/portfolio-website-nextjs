// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Link from 'next/link';

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Hi! I'm Dmitry", '<Frontend Dev />', 'Nice to meet you!'],
    loop: true,
    delaySpeed: 1000, 
    // typeSpeed: 7, 
    deleteSpeed: 10, 
  });
  return (
    <div className=' flex flex-col space-y-8 items-center justify-center text-center mb-[150px]'>
      <BackgroundCircles />
      <img
        className='relative rounded-full h-32 w-32 mx-auto object-cover object-center'
        src='https://raw.githubusercontent.com/DmitryVelichko/personal-portfolio-website-js/main/images/photo1.jpg'
        alt="A man's face"
      />
      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
          Software Engineer
        </h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#f7ab0a' />
        </h1>
        <div className='pt-5'>
          <Link href='#about'>
            <button className='heroButton'>About</button>
          </Link>
          <Link href='#experience'>
            <button className='heroButton'>Experience</button>
          </Link>
          <Link href='#skills'>
            <button className='heroButton'>Skills</button>
          </Link>
          <Link href='#projects'>
            <button className='heroButton'>Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
