import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";
export const projectExperience = [
  {
    name: "Website Design",
    projects: 9,
    icon: HiOutlineDesktopComputer,
    bg: "#286F6C",
  },
  {
    name: "Mobile App Design",
    projects: 2,
    icon: CiMobile1,
    bg: "#EEC048",
  },
 
];

export const WhatDoIHelp = [
  "Empowering Solutions: Let me guide you towards resolution, addressing and solving your challenges.",
  "Navigating Challenges: Offering assistance in finding solutions and resolving issues effectively together.",
];

export const workExp = [
  {
    place: "BitSolve Technologies Pvt Ltd", 
    tenure: "Jan 2024 - April 2024",
    role: "Software Developer Intern",
    detail:
      " Developed and integrated automated allocation systems using Python and JavaScript frameworks, reducing manual effort by 70% and increasing allocation accuracy by 80%",
  },

  {
    place: "Brainwave Learining Library", 
    tenure: "Jan 2024 - Mar 2024",
    role: "Frontend Developer",
    detail:
      "Designed an inclusive Bihar student platform, integrating diverse activities through intuitive ReactJS.",
  },

  {
    place: "Coding Ninjas",
    tenure: "Aug 2023 - Nov 2023",
    role: "TA - C++ and DataStructures & Algorithms", 
    detail:
    "Conducted C++ and DSA doubt sessions, excelling in debugging, while fostering strong software development foundations and optimizing diverse projects with expertise.",
  },
  {
    place: "WebStack Academy",
    tenure: "Aug 2023 - Oct 2023",
    role: "MERN Stack Web Developer",
    detail:
      "Completed end-to-end development for a food ordering app, utilizing MongoDB and Node.js, showcasing MERN stack expertise.",
  },
];

export const comments = [
  {
    name: "ABC",
    post: "HR",
    comment:
      "With ConnectMe, my website achieved its finest form, and I'm thankful for its seamless functionality; highly recommend it to others.",
    img: "./people2.png",
  },
  {
    name: "Dhiraj Wadile",
    post: "Web Developer",
    comment:
      "Using ConnectMe, I obtained the best version of my website, grateful for its proper usage, and wholeheartedly recommend it to others.",
    img: "./people1.png",
  },
  {
    name: "XYZ",
    post: "Software Developer",
    comment:
    "ConnectMe delivered the optimal version of my website, and I'm grateful for its effectiveness; I recommend it wholeheartedly to others.",
    img: "./people2.png",
  },
  // {
  //   name: "Anamika Sandula",
  //   post: "Creative Manager",
  //   comment:
  //     "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //   img: "./people1.png",
  // },
  // {
  //   name: "Anamika Sandula",
  //   post: "Creative Manager",
  //   comment:
  //     "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //   img: "./people2.png",
  // },
  // {
  //   name: "Anamika Sandula",
  //   post: "Creative Manager",
  //   comment:
  //     "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //   img: "./people1.png",
  // },
  // {
  //   name: "Anamika Sandula",
  //   post: "Creative Manager",
  //   comment:
  //     "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //   img: "./people2.png",
  // },
  // {
  //   name: "Anamika Sandula",
  //   post: "Creative Manager",
  //   comment:
  //     "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //   img: "./people1.png",
  // },
  // {
  //   name: "Anamika Sandula",
  //   post: "Creative Manager",
  //   comment:
  //     "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //   img: "./people2.png",
  // },
];

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
