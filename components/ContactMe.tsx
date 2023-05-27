
'use client'


import React from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid';
import { SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

export default function ContactMe({ }: Props) {
  const {
    register,
    handleSubmit,
  } = useForm<Inputs>();
  
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:prateek23022004@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=Hi, my name is ${encodeURIComponent(formData.name)}, ${encodeURIComponent(formData.message)} (my email id is: ${encodeURIComponent(formData.email)})`;
  };

  return (
    <div className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl justify-center items-center mx-auto px-10">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <motion.div suppressHydrationWarning 

        initial={{
          opacity: 0,
          y: 150
        }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 1.2
        }}
        viewport={{ once: true }}
        className="flex flex-col space-y-10"
      >
        <h4 className="text-4xl font-semibold text-center">
          I have got just what you need.
          <span className="underline decoration-[orange]/90">Let's converse</span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[orange] h-9 w-9 animate-pulse cursor-pointer" />
            <p className="text-2xl">+19 234567899</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[orange] h-9 w-9 animate-pulse cursor-pointer" />
            <p className="text-2xl">prateek23022004@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[orange] h-9 w-9 animate-pulse cursor-pointer" />
            <p className="text-2xl">street software livedby</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-3 mx-auto w-fit">
          <div className="flex space-x-2">
            <input {...register('name')} className="contactInput" type="text" placeholder="Name" />
            <input {...register('email')} className="contactInput" type="email" placeholder="Email" />
          </div>

          <input {...register('subject')} className="contactInput" type="text" placeholder="Subject" />

          <textarea {...register('message')} className="contactInput" placeholder="Message" />
          <button className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg" type="submit">
            Submit
          </button>
        </form>
      </motion.div>
    </div>
  );
}
