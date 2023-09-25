import { IoLogoJavascript, IoLogoHtml5, IoLogoWordpress } from 'react-icons/io';
import { IoLogoReact } from 'react-icons/io5';
import { SiPhp, SiMysql, SiJava, SiCsharp } from 'react-icons/si';
// import snakeAndLadderGame from './assets/SnakeAndLadderGame.png';
import searchWordFromTextFile from './assets/SearchWordFromTextFile.png';
import fitnessWebApplication from './assets/FitnessWebApplication.png';
import findNextPalindromeNumber from './assets/FindNextPalindromeNumber.png';
import wordPressPortfolio from './assets/WordPressPortfolio.png';

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
    {
      title: "ePortfolio",
      subtitle: "WordPress",
      description:
        "This is the another version of my ePortfolio using WordPress.",
      image: wordPressPortfolio,
      link: "https://github.com/sharmik-hirpara/Wordpress-ePortfolio",
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
    },
    {
      name: "WordPress",
      icon: IoLogoWordpress,
    },
    {
      name: "C#",
      icon: SiCsharp,
    }
  ];

  export const experience = [
    {
      companyName: "TAL",
      position: "Developer",
      duration: "Feb 2022 - Present",
      responsibilities: ([
        "Developing reliable, usable software using C#, .Net framework, and SQL scripts, which meets business requirements within the required timeframes while minimising technical debt.",
        "Maintaining systems, processes, and documentation to deliver administrative processes and procedures effectively.",
        "Identify straightforward technical problems and find resolutions or refer problems as necessary.",
        "Involved in UAT testing, release planning, software releases and post release tasks.",
        "Delivering small administrative projects or the administration of larger projects so that all information is kept up to date and coordinated on behalf of the project team."
      ])
    },
    {
      companyName: "Freelance",
      position: "Web Developer",
      duration: "Apr 2021 – Mar 2022",
      responsibilities: ([
        "Updated, modified, and extended existing websites.",
        "Wrote clean, testable good quality websites using PHP, JavaScript, ReactJS, and WordPress.",
        "Collaborated with the clients and other stakeholders to build efficient and reliable features.",
        "Tech enthusiastic keen to learn new tools, technologies, and frameworks."
      ])
    },
    {
      companyName: "Australian Computer Society",
      position: "Software Developer Intern",
      duration: "Apr 2021 – Jul 2021",
      responsibilities: ([
        "Wrote and maintained Java, and XML code to meet system requirements, system designs and technical specifications in accordance with quality accredited standards.",
        "Researched, consulted, analysed, and evaluated system program needs.",
        "Performed documentation support functions.",
        "Managed and coordinated Chatbot application team of 10 to discuss progress, team activities and agree on plans for the coming fortnight."
      ])
    },
    {
      companyName: "Entrust ICT",
      position: "Web Developer Intern",
      duration: "Aug 2019 – Oct 2019",
      responsibilities: ([
        "Wrote clean, well designed, efficient code using to best web development practices.",
        "Achieved project goal accurately and efficiently by applying data management skills while refactoring database.",
        "Designed and created the new website layout and user interfaces with standard PHP and JavaScript practices.",
        "Sharpened ownership and responsibility by reporting project progress and status to the supervisors using Trello."
      ])
    }
  ];