"use client"
import React from 'react';
import dynamic from 'next/dynamic';
import Skill from './Skill';

const DynamicSkill = dynamic(() => import('./Skill'), {
  ssr: false,
});

const Skills = () => {
  return (
    <div className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen xl:space-y-0 justify-center mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Skills</h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for current proficiency
      </h3>

      <div className="grid grid-cols-4 gap-5">
        <DynamicSkill directionLeft={true} />
        <DynamicSkill directionLeft={true} />
        <DynamicSkill directionLeft={true} />
        <DynamicSkill directionLeft={true} />
        <DynamicSkill directionLeft={true} />
        <DynamicSkill directionLeft={true} />
        <DynamicSkill directionLeft={true} />
        <DynamicSkill directionLeft={true} />
        <DynamicSkill />
        <DynamicSkill />
        <DynamicSkill />
        <DynamicSkill />
        <DynamicSkill />
        <DynamicSkill />
        <DynamicSkill />
        <DynamicSkill />
      </div>
    </div>
  );
};

export default Skills;
