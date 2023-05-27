
'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

type Props = {};

export default function About({ }: Props) {
  return (
    <motion.div suppressHydrationWarning 

      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>

      <motion.img
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        // <Image
        // src={}
        // loading=''
        // alt=''
        
        // />
        src="https://media.licdn.com/dms/image/C4D03AQFdf3CNdfgvrQ/profile-displayphoto-shrink_800_800/0/1638933174679?e=1690416000&v=beta&t=CDECiBro58fz5AV1U7p-UKXaX4rrkiTKMOFEmzFNHvQ"
        alt="Profile"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-2xl font-semibold tracking-[5px]">Here's a <span className="underline text-[#F7AB0B]/50">little</span> background</h4>
        <p className="text-base">
          I am Prateek Singh. I am 19 years old and have been coding for the past 4 years. I love learning new tools. My other interests include neurology and outer space (galaxies, celestial bodies).
        </p>
      </div>
    </motion.div>
  );
}
