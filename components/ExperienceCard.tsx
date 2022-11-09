import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article>
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        src='https://cdn.sanity.io/images/ltuexkre/production/050ee674d199aa8d254af2b5ea480d3dc320cbb1-1240x1440.png'
        alt=''
      />

      <div>
        <h4>CEO of Company</h4>
        <p>CompanyName</p>
        <div>
          {/*Tech used */}
          {/*Tech used */}
          {/*Tech used */}
        </div>
        <p>Started work... - Ended...</p>
        <ul>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
