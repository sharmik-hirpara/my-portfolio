import React, { useState } from "react";
import { IoVolumeHigh } from 'react-icons/io5';
import profilePicture from './../assets/Profile picture.jpg';

import useSound from 'use-sound';
import pronunciation from './../assets/Pronunciation.mp3';

export default function About() {

  const [play] = useSound(pronunciation, { volume: 1.0 });

  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center ">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Sharmik <IoVolumeHigh className="w-5 inline-block mt-2 text-gray-400 hover:text-white" onClick={() => play()}/>
            <br className="hidden lg:inline-block" />I love to play with programs.
          </h1>
          <p className="mb-8 leading-relaxed text-gray-300">
            I am disciplined, enthusiastic and quick learner <strong> Software Developer </strong> with 3-months work experience as a full stack developer.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={profilePicture}
            width="100%"
          />
        </div>
      </div>
    </section>
  );
}