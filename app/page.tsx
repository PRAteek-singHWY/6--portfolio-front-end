

import Header from "@/components/Header";
import React from 'react';
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";

export default function Page() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[orange]/80">

      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experience */}
      <section id="experience" className="snap-center">
        <Experience />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills />
      </section>

      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects />
      </section>

      {/* Contact Me */}
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <a href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex ">
            <img
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src="https://media.licdn.com/dms/image/C4D03AQFdf3CNdfgvrQ/profile-displayphoto-shrink_800_800/0/1638933174679?e=1690416000&v=beta&t=CDECiBro58fz5AV1U7p-UKXaX4rrkiTKMOFEmzFNHvQ"
              alt=""
            />
          </div>
        </footer>
      </a>
    </div>
  );
}
