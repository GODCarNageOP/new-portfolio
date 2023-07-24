import {
  mobile,
  backend,
  creator,
  web,
  typescript,
  express,
  nextjs,
  reactjs,
  solidity,
  tailwind,
  nodejs,
  mongodb,
  git,
  meta,
  starbucks,
  tesla,
  shopify,
  elex,
  collegeseva,
  amplify,
  threejs,
  firebase,
  bootstrap,
  vite,
  xd1,
  xd2,
  xd3
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Web3 Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
 
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Vite JS",
    icon: vite,
  },
  
 
  {
    name: "Solidity",
    icon: solidity,
  },
 
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "bootstrap",
    icon: bootstrap,
  },
  {
    name: "firebase",
    icon: firebase,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "It was a great expreience working with Yash, one of the finest developer I have ever met!",
    name: "Ranjeet Walunj",
    designation: "Senior VP",
    company: "Clever Tap",
    image: xd1,
    linkedin: "https://www.linkedin.com/in/mayavi/"
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Yash does.",
    name: "Hemant Kasturiwale",
    designation: "HOD",
    company: "E&CS Tcet",
    image: xd2,
    linkedin: "https://www.linkedin.com/in/dr-hemant-kasturiwale-jain-5274b319/"
  },
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Yash proved me wrong.",
    name: "Amol Bhanushali",
    designation: "CEO",
    company: "Atrina Technologies",
    image: xd3,
    linkedin: "https://www.linkedin.com/in/amolbhanushali/"
  },
];

const projects = [
  {
    name: "ERP Tcet",
    description:
      "It is a comprehensive software system designed to streamline and integrate various administrative, academic, and operational processes within the institution.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "mern",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: elex,
    source_code_link: "https://github.com/GODCarNageOP/Electronics-TCET.git",
    deployed_code_link: "",
  },
  {
    name: "AI Amplify",
    description:
      "The web application enables users to use various Ai Models like Next sentence prediction, Generating Book summaries, etc for their day-to-day lifestyle.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "mern",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: amplify,
    source_code_link: "https://github.com/GODCarNageOP/Hackathon-AI-Amplify.git",
    deployed_code_link: "https://hackathon-ai-amplify.vercel.app/"
  },
  {
    name: "College Seva",
    description:
      "The website offers a user-friendly interface where aspiring students can input their CET exam scores and other relevant details to find the perfect college for their future.",
    tags: [
      {
        name: "vite",
        color: "blue-text-gradient",
      },
      {
        name: "mern",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: collegeseva,
    source_code_link: "https://github.com/GODCarNageOP/Hackathon-MumbaiHacks.git",
    deployed_code_link: "https://hackathon-mumbai-hacks.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
