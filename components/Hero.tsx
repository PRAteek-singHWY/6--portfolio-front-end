"use client"
import React from 'react';
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './backgroundCircles';
import CustomImage from './Images';

type Props = {};

const Hero: React.FC<Props> = () => {
  const [text] = useTypewriter({
    words: ["Hey, I'm Prateek Singh", "Loves Code, Loves Kiwis"],
    loop: true,
    delaySpeed: 2100,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />

      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://media.licdn.com/dms/image/C4D03AQFdf3CNdfgvrQ/profile-displayphoto-shrink_800_800/0/1638933174679?e=1690416000&v=beta&t=CDECiBro58fz5AV1U7p-UKXaX4rrkiTKMOFEmzFNHvQ"
        alt="Profile"
      />

      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">Full Stack Developer</h2>
        <h1 className="text-4xl lg:text-5xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          <a href="#about">
            <button className="HeroBtnClass">About</button>
          </a>
          <a href="#experience">
            <button className="HeroBtnClass">Experience</button>
          </a>
          <a href="#skills">
            <button className="HeroBtnClass">Skills</button>
          </a>
          <a href="#projects">
            <button className="HeroBtnClass">Projects</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
