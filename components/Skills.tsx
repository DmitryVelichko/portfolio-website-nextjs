import React from 'react';
import { motion } from 'framer-motion';
import Skill from './Skill';

type Props = {};

function Skills({}: Props) {
  return (
    <div className='flex relative flex-col items-center justify-center mt-[50px]'>
      <h3 className='mt-[30px] mb-[32px] uppercase tracking-[20px] text-gray-500 text-2xl'>
        Skills
      </h3>

      <h3 className='uppercase text-gray-500 text-sm tracking-[3px] mb-[52px]'>
      Tech Stack I've been using
      </h3>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className=' flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 justify-center xl:space-y-0 mx-auto items-center'
      >
        <div className='grid grid-cols-4 gap-5'>
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
        </div>
      </motion.div>
    </div>
  );
}

export default Skills;
