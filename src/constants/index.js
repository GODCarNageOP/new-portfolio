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
  finance,
  google,
  team,
  owasp,
  elex,
  collegeseva,
  amplify,
  threejs,
  firebase,
  bootstrap,
  vite,
  xd1,
  xd2,
  xd3,
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
    title: "Solve for India",
    company_name: "Google",
    icon: google,
    iconBg: "black",
    date: "1st - 20th April 2023",
    points: [
      "Cloudcore leverages the power of the Ethereum blockchain to provide a secure and peer-to-peer data storage solution. ",
      "With this dApp, users can store their sensitive data in a decentralized manner, ensuring data integrity and control while facilitating seamless sharing with trusted peers.",
      "Through smart contracts on the Ethereum blockchain, users gain access to their individual data vaults, which act as tamper-proof and encrypted containers for their personal information, documents, or any other data they wish to safeguard. ",
      "This data is securely stored across the Ethereum network, making it resilient to single points of failure and immune to unauthorized tampering.",
    ],
    github: "https://github.com/GODCarNageOP/Hackathon-GeeksForGeeks.git",
    linkedin: "https://www.linkedin.com/company/google/",
  },
  {
    title: "Hackowasp 5.0",
    company_name: "OWASP",
    icon: owasp,
    iconBg: "white",
    date: "14th - 16th April 2023",
    points: [
      "Tutor is an innovative web application designed to connect students with skilled tutors, offering a personalized and effective learning experience.",
      "With a vast pool of qualified tutors, students can select the perfect match based on their budget and the tutor's experience.",
      "Upon accessing Tutor, students can explore a diverse range of subject areas and find tutors specialized in various fields.",
      " The app provides comprehensive tutor profiles that highlight their educational background, teaching experience, expertise, and user reviews.",
    ],
    github: "https://github.com/GODCarNageOP/Hackathon-OWASP.git",
    linkedin: "https://www.linkedin.com/company/owasp/",
  },
  {
    title: "Ai Amplify Hackathon",
    company_name: "1 Finance",
    icon: finance,
    iconBg: "black",
    date: "21st - 22nd July 2023",
    points: [
      "The AI Amplify is a dynamic web application built using TypeScript, dedicated to bringing the power of artificial intelligence to users through a variety of cutting-edge AI products.",
      "Leveraging TypeScript's flexibility, the app offers a seamless and user-friendly experience, making AI accessible to individuals from all backgrounds.",
      "The AI Amplify prides itself on user privacy and data security. All uploaded content and user interactions are processed locally within the browser, ensuring that sensitive information remains private and never leaves the user's device.",
      "Users can contribute to the app by suggesting improvements, training new AI models, or integrating additional AI products.",
    ],
    github: "https://github.com/GODCarNageOP/Hackathon-AI-Amplify.git",
    linkedin: "https://www.linkedin.com/company/1financehq/?originalSubdomain=in",
  },
  {
    title: "MumbaiHacks'23",
    company_name: "Tech Entrepreneurs Association of Mumbai (TEAM)",
    icon: team,
    iconBg: "white",
    date: "3rd - 4th June 2023",
    points: [
      "CollegeFinder is a user-friendly web application designed to help students in their search for the perfect college based on their Common Entrance Test (CET) exam marks.",
      "Whether you are a high school student planning for higher education or a college aspirant looking for a better fit, CollegeFinder streamlines the process of finding eligible colleges that match your academic achievements.",
      "Upon accessing the app, students can input their CET exam marks and specify their preferred course of study. ",
      "CollegeFinder's advanced algorithm then analyzes the data and generates a personalized list of eligible colleges that align with the student's academic performance and interests.",
    ],
    github: "https://github.com/GODCarNageOP/Hackathon-MumbaiHacks.git",
    linkedin: "https://www.linkedin.com/company/mumbaitech/?originalSubdomain=in",
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
    linkedin: "https://www.linkedin.com/in/mayavi/",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Yash does.",
    name: "Hemant Kasturiwale",
    designation: "HOD",
    company: "E&CS Tcet",
    image: xd2,
    linkedin:
      "https://www.linkedin.com/in/dr-hemant-kasturiwale-jain-5274b319/",
  },
  {
    testimonial:
      "I thought it was difficult to make a website as beautiful as our products, but Yash proved me wrong.",
    name: "Amol Bhanushali",
    designation: "CEO",
    company: "Atrina Technologies",
    image: xd3,
    linkedin: "https://www.linkedin.com/in/amolbhanushali/",
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
    source_code_link:
      "https://github.com/GODCarNageOP/Hackathon-AI-Amplify.git",
    deployed_code_link: "https://hackathon-ai-amplify.vercel.app/",
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
    source_code_link:
      "https://github.com/GODCarNageOP/Hackathon-MumbaiHacks.git",
    deployed_code_link: "https://hackathon-mumbai-hacks.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
