
"use client"

import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

const projects = [1, 2, 3, 4, 5];

const Projects: React.FC<Props> = () => {
  return (
    <motion.div suppressHydrationWarning 

      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-[#F7AB0A] text-2xl">Projects</h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-thumb-[orange]/80">
        {projects.map((project, index) => (
          <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen" key={index}>
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src="https://media.istockphoto.com/id/1158795969/photo/laptop-tablet-and-phone-set-mockup-isolated-on-white-3d-render.jpg?s=612x612&w=0&k=20&c=1kSAka5gKjiwDuZMg29X6y5Vd4dlUoTQWkqSdrjhT9s="
              alt={`Project ${index + 1}`}
            />

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-2xl font-semibold text-center">
                <span className="underline decoration-[orange]/90">Case Study {index + 1} of {projects.length}:</span> UPS CLONE
              </h4>
              <p className="text-lg text-center md:text-left">
                Netflix 2.0 is an application that features login and logout authentication with Google. It has a beautiful home screen with all the movies, similar to Netflix. There is also a subscription feature, and Stripe payments are used for monthly Netflix subscriptions.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[orange]/60 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
