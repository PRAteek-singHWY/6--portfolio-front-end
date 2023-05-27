'use client'

import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="flex flex-row items-center space-x-2"
      >
        {/* Social icons */}
        <SocialIcon url="https://www.linkedin.com/in/prateekswyelv1/" fgColor="gray" bgColor="transparent" />
        <SocialIcon url="https://www.linkedin.com/in/prateekswyelv1/" fgColor="gray" bgColor="transparent" />
        <SocialIcon url="https://www.linkedin.com/in/prateekswyelv1/" fgColor="gray" bgColor="transparent" />
      </motion.div>

      <a href="#contact">
        <motion.div
          initial={{ x: 500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="flex flex-row items-center text-gray-300 cursor-pointer"
        >
          {/* Email box with cursor as pointer */}
          <SocialIcon className="cursor-pointer" network="email" fgColor="gray" bgColor="transparent" />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400 ml-2">Get In Touch</p>
        </motion.div>
      </a>
    </header>
  );
};

export default Header;
