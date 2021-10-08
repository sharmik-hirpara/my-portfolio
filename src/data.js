import { IoLogoJavascript, IoLogoHtml5 } from 'react-icons/io';
import { IoLogoReact } from 'react-icons/io5';
import { SiPhp, SiMysql, SiJava } from 'react-icons/si';
// import snakeAndLadderGame from './assets/SnakeAndLadderGame.png';
import searchWordFromTextFile from './assets/SearchWordFromTextFile.png';
import fitnessWebApplication from './assets/FitnessWebApplication.png';
import findNextPalindromeNumber from './assets/FindNextPalindromeNumber.png'

export const projects = [
    // {
    //   title: "Snake and Ledder Game",
    //   subtitle: "Java",
    //   description:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
    //   image: snakeAndLadderGame,
    //   link: "https://reactbootcamp.com",
    // },
    {
      title: "Word search engine",
      subtitle: "Java object oriented programming and JavaFX",
      description:
        "A Java application which allows users to load any text file from their local system and search for the words from it. User have 4 different search method options to perform the search operation.",
      image: searchWordFromTextFile,
      link: "https://github.com/sharmik-hirpara/Search-keyword-from-text-file",
    },
    {
      title: "Fitness Web Application",
      subtitle: "HTML5, CSS3, PHP, and MySQL",
      description:
        "This website allows user to sign up for a membership in fitness club. The database holds the user details. Admins can review membership details stored in the database and modify it if required.",
      image: fitnessWebApplication,
      link: "https://github.com/sharmik-hirpara/fitness-centre-web-application",
    },
    {
      title: "Find Next Palindrome Number",
      subtitle: "Maven Project",
      description:
        "This application has built using Maven. It allows user to enter any positive integer value and finds the next palindrome number which comes after that.",
      image: findNextPalindromeNumber,
      link: "https://github.com/sharmik-hirpara/FindPalindromeNumberMaven",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "Sharmik was my direct Team Leader whilst at Citywide and it was an absolute pleasure to work with him. Sharmik was friendly approachable knowledgeable and had a fine attention to detail and a meticulous and professional approach with his colleagues. I highlighted a few safety issues and Sharmik was understanding and quick to take action and would accommodate his team members where possible. I would have no hesitation in recommending him for future roles to any prospective employers.",
      name: "Gavin Connell",
      position: "Environmental Maintenance Officer at Citywide Service Solutions Pty Ltd",
    },
    {
      quote:
        "I've worked with Sharmik during the pandemic within the Working For Victoria project where he was leading a team of up to 20 full time staff. Sharmik's communication and leadership skills are excellent. He follows protocol and instructions extremely well. Sharmik is able to create a positive atmosphere while not losing sight of the importance of protocols and processes (especially during the high of the COVID pandemic). Sharmik went out of his way to improve all IT related processes such as the stock take checklist, staff leave calendars and attendance logbooks. Sharmik is reliable, has great work etic and a pleasure to work with.",
      name: "Marco Kunst",
      position: "Operations Supervisor at Citywide Service Solutions Pty Ltd",
    },
  ];
  
  
  export const skills = [
    {
      name: "JavaScript",
      icon: IoLogoJavascript,
    },
    {
      name: "ReactJS",
      icon: IoLogoReact,
    },
    {
      name: "PHP",
      icon: SiPhp,
    },
    {
      name: "MySQL",
      icon: SiMysql,
    },
    {
      name: "HTML5",
      icon: IoLogoHtml5,
    },
    {
      name: "Java",
      icon: SiJava,
    }
  ];