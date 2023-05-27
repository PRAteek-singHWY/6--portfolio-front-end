"use client"
import React from 'react';
import dynamic from 'next/dynamic';

const DynamicImage = dynamic(() => import('framer-motion').then((mod) => mod.motion.img), {
  ssr: false,
});

type Props = {
  directionLeft?: boolean;
};

const Skill = ({ directionLeft }: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      <DynamicImage
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="rounded-full border border-gray-500 h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
        src="https://www.sanity.io/static/images/logo_rounded_square.png"
      />

      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold opacity-100 text-black">100%</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
