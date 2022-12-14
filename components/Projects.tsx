import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];

  return (
    <div className='flex relative flex-col items-center justify-center'>
      <h3 className='mt-[100px] mb-[62px] uppercase tracking-[20px] text-gray-500 text-2xl'>
        Projects
      </h3>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'
      >
        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 scrollbar-thin'>
          {projects.map((project, i) => (
            <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center pb-20 md:pb-44 '>
              <motion.img
                initial={{ y: -300, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                src='https://cdn.sanity.io/images/ltuexkre/production/af7ca99b5a796d0698cf9121a4a0795b5022b6be-666x375.png'
                alt=''
              />

              <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                <h4 className='text-4xl font-semibold text-center'>
                  <span className='underline decoration-[#f7ab0a]/50'>
                    Case Study {i + 1} of {projects.length}: 
                  </span>{' '}
                   UPS Clone
                </h4>
                <p className='text-lg text-center md:text-left'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat ratione suscipit cupiditate repellat illum dicta
                  maxime porro sint dolor animi molestias rerum delectus sed
                  natus ex, inventore nisi. Quasi nostrum suscipit numquam in.
                  Quam, autem doloremque, praesentium ad voluptatem illum
                  distinctio, enim a iure corrupti eveniet ullam provident quo
                  rem.
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className='w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12' />
      </motion.div>
    </div>
  );
}

export default Projects;
