// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles'
import photo1 from '../photos/photo1.jpg'

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, my name's Dmitry",
      '<Frontend Web Dev />',
      'Tech Stack: React, TypeScript, NextJS',
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        {/* https://sun9-43.userapi.com/impf/c844321/v844321444/8bd0d/FJD_aGJz-lM.jpg?size=1440x2160&quality=96&sign=06aaf419bc7442ec152a7ca0ae56b198&type=album */}
        {/* https://sun9-66.userapi.com/impf/c853624/v853624011/128493/H7V2i7Bf0HU.jpg?size=1604x2160&quality=96&sign=5f402285a23023459a6346232c98fb5b&type=album */}
        <img src='https://sun9-67.userapi.com/impf/c850136/v850136223/154992/gynb-Y3PLCU.jpg?size=720x1280&quality=96&sign=a793f8567d0f2703002c5c655216527c&type=album' alt="A man's face" />
      <h1>
        <span>{text}</span>
        <Cursor cursorColor='#f7ab0a' />
      </h1>
    </div>
  );
}
