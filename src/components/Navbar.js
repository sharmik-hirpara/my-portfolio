import { HiArrowRight, HiDownload }  from 'react-icons/hi';
import React from "react";

import { saveAs } from "file-saver";
import Resume from "./../assets/Resume - Sharmik Hirpara.pdf";

export default function Navbar() {

  const saveFile = () => {
    // alert("Work in progress...")
    saveAs(
      Resume,
      "Resume - Sharmik Hirpara.pdf"
    );
  };

  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center text-gray-400">
        <a href="#about" className="title-font font-medium text-white mb-4 md:mb-0 md:ml-3 text-xl md:pb-1">
            Sharmik Hirpara
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-2 md:border-l md:border-gray-700	flex flex-wrap items-center justify-center">
          <a href="#projects" className="ml-2 mr-2 hover:text-white text-center">
            Past Work
          </a>
          <a href="#skills" className="ml-2 mr-2 hover:text-white">
            Skills
          </a>
          <a href="#testimonials" className="ml-2 mr-2 hover:text-white">
            Testimonials
          </a>
        </nav>
        <nav className="flex flex-wrap items-center justify-center">
          <button 
            className="inline-flex text-white items-center bg-green-700 border-0 py-1 px-3 focus:outline-none hover:bg-green-600 rounded mt-4 md:mt-0" 
            onClick={saveFile}>
            Resume
            <HiDownload className="w-4 h-4 ml-1" />
          </button>
          <a
            href="#contact"
            className="ml-4 inline-flex text-white items-center bg-green-700 border-0 py-1 px-3 focus:outline-none hover:bg-green-600 rounded mt-4 md:mt-0">
            Hire Me
            <HiArrowRight className="w-4 h-4 ml-1" />
          </a>
        </nav>
      </div>

        {/* <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center text-gray-400">
        <nav>
          <ul className="flex flex-wrap items-center justify-center">
            <li>
              <a href="#about" className=" inline-block title-font font-medium text-white mb-4 md:mb-0 ml-3 text-xl md:pb-1">
                  Sharmik Hirpara
              </a>
            </li>
            
            <li className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700"	>
              <a href="#projects" className="mr-5 hover:text-white">
                Past Work
              </a>
            </li>
            <li>
              <a href="#skills" className="mr-5 hover:text-white">
                Skills
              </a>
            </li>
            <li>
              <a href="#testimonials" className="mr-5 hover:text-white">
                Testimonials
              </a>
            </li>
            <li>
              <button className="mr-5 hover:text-white" onClick={saveFile}>
                Resume
              </button>
            </li>
            <li>
              <a
                href="#contact"
                className="inline-flex text-white items-center bg-green-700 border-0 py-1 px-3 focus:outline-none hover:bg-green-600 rounded mt-4 md:mt-0">
                Hire Me
                <HiArrowRight className="w-4 h-4 ml-1 mt-0.5" />
              </a>
            </li>
          </ul>
        </nav>
      </div> */}


    </header>
  );
}