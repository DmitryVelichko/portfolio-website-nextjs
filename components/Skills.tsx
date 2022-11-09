import React from 'react';
import { motion } from 'framer-motion';


type Props = {};

function Skills({}: Props) {
  return <motion.div className='h-[120vh] flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
    <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Skills
    </h3>

    <h3>Hover over a skill for current proficiency</h3>
  </motion.div>;
}

export default Skills;
