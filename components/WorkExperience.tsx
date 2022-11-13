import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';

type Props = {};

function WorkExperience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-[100vh] flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center scale-75'
    >
      <h3 className='absolute top-2 uppercase tracking-[20px] text-gray-500 text-2xl xl:top-0 '>
        Experience
      </h3>
      <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 scrollbar-thin xl:mt-[290px] '>
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  );
}

export default WorkExperience;
