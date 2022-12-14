import React from 'react';
import { motion } from 'framer-motion';

//https://raw.githubusercontent.com/DmitryVelichko/personal-portfolio-website-js/main/images/photo1.png - главная фотка без фона

type Props = {};

function About({}: Props) {
  return (
    <div className='flex relative flex-col items-center justify-center'>
      <h3 className='mt-[100px] mb-[82px] uppercase tracking-[20px] text-gray-500 text-2xl'>
        About
      </h3>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='flex flex-col relative text-center md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center '
      >
        <motion.img
          initial={{ x: -200, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          src='https://raw.githubusercontent.com/DmitryVelichko/personal-portfolio-website-js/main/images/profile%20photo.jpg'
          className='mb-2 flex-shrink-0 w-56 h-56 rounded-full object-cover object-top md:rounded-lg md:w-64 md:h-95 xl:w-[300px] xl:h-[400px]' 
        />
        <div className='space-y-10 px-0 md:px-10 '>
          <h4
            className='text-4xl font-semibold mt-[30px] 
        '
          >
            Here is a{' '}
            <span className='underline decoration-[#f7ab0a]/50'>little</span>{' '}
            background
          </h4>
          <p className='text-base'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nulla
            porro ea, assumenda sequi, odit explicabo voluptas facere iusto
            ipsum quisquam animi repellendus hic. Reprehenderit voluptas alias
            vel id libero sint illum asperiores quibusdam similique, in labore
            neque porro necessitatibus sit tempora, iusto autem quos eligendi
            laudantium, ullam fugit odit!
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
