import { HiArrowRight }  from 'react-icons/hi';
import React from "react";

import { saveAs } from "file-saver";
import Resume from "./../assets/Resume - Sharmik Hirpara.pdf";

export default function Navbar() {

  const saveFile = () => {
    saveAs(
      Resume,
      "Resume - Sharmik Hirpara.pdf"
    );
  };

  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center text-gray-400">
        <a href="#about" className="title-font font-medium text-white mb-4 md:mb-0 ml-3 text-xl">
            Sharmik Hirpara
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Past Work
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          <a href="#testimonials" className="mr-5 hover:text-white">
            Testimonials
          </a>
          <button className="mr-5 hover:text-white" onClick={saveFile}>
            Resume
          </button>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-base mt-4 md:mt-0">
          Hire Me
          <HiArrowRight className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}