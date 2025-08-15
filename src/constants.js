// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
// import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import gsapLogo from "./assets/tech_logo/gsap.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
// import bootstrapLogo from './assets/tech_logo/bootstrap.png';
// import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
// import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
// import javaLogo from './assets/tech_logo/java.png';
// import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
// import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
// import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
// import InfoTEchBrains from './assets/company_logo/info_tech_logo.png';
// import OneAim from './assets/company_logo/one_aim_logo.png';
import Indibus from "./assets/company_logo/indibus_logo.png";

// Education Section Logo's
import akgecLogo from "./assets/education_logo/akgec_logo.png";
import central_academy_logo from "./assets/education_logo/Central_academy_logo.png";
// import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
// import githubdetLogo from './assets/work_logo/github_det.png';
// import csprepLogo from './assets/work_logo/cs_prep.png';
// import movierecLogo from './assets/work_logo/movie_rec.png';
// import npmLogo from './assets/work_logo/npm.png';
import commitly from "./assets/work_logo/commitly.png";
import food_order from "./assets/work_logo/food_order.png";
import streamify from "./assets/work_logo/streamify.png";
import job_portal from "./assets/work_logo/job_portal.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "SASS", logo: sassLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      // { name: 'Angular', logo: angularLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "GSAP", logo: gsapLogo },
      { name: "Material UI", logo: materialuiLogo },
      // { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      // { name: 'Springboot', logo: springbootLogo },
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      // { name: 'Firebase', logo: firebaseLogo },
      { name: "PostgreSQL", logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      // { name: 'Java', logo: javaLogo },
      // { name: 'Python', logo: pythonLogo },
      // { name: 'C-Sharp', logo: csharpLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      // { name: 'Figma', logo: figmaLogo },
    ],
  },
];

export const experiences = [
  // {
  //   id: 0,
  //   img: InfoTEchBrains,
  //   role: "Fullstack Developer",
  //   company: "InfoTechBrains CloudTech Pvt. Ltd.",
  //   date: "July 2025 - Present",
  //   desc: "Developed a scalable Jain community super app using Next.js, TypeScript, Prisma ORM, and PostgreSQL, supporting over 500 users, 50+ events, and a dynamic leaderboard system. Designed and optimized REST APIs, database schemas, and role-based access controls, improving response times by 35% and reducing server errors by 40%. Implemented CI/CD pipelines on Vercel, participated in agile sprints, and contributed to team code reviews, achieving 99.9% deployment uptime.",
  //   skills: [
  //     "Next JS",
  //     "React JS",
  //     "TypeScript",
  //     "Node JS",
  //     "Tailwind CSS",
  //     "MongoDB",
  //     "Prisma ORM",
  //     "PostgreSQL",
  //   ],
  // },
  // {
  //   id: 1,
  //   img: OneAim,
  //   role: "Fullstack Developer Intern",
  //   company: "One Aim IT solutions Pvt. Ltd.",
  //   date: "July 2023 - March 2024",
  //   desc: "Led the architecture and deployment of a role-based HRMS dashboard using Next.js, TypeScript, and TailwindCSS, reducing load time by 30% and improving team output by 40%. Refactored over 2,000 lines of legacy JavaScript into reusable, testable TypeScript modules. Implemented dynamic imports and code splitting, reducing bundle size by 35%.",
  //   skills: [
  //     "Next JS",
  //     "ReactJS",
  //     "TypeScript",
  //     "Tailwind CSS",
  //     "ShadcnUI",
  //     "MongoDB"
  //   ],
  // },
  {
    id: 2,
    img: Indibus,
    role: "Frontend Intern",
    company: "Indibus Software Solutions Pvt. Ltd.",
    date: "September 2021 - August 2022",
    desc: `Built a full-stack job application platform using the MERN stack with JWT-based authentication and
role-based access for users and admins, reduced unauthorized access by 90% and improved data integrity by
95%.
• Developed dynamic resume upload via Multer and integrated 10+ RESTful API routes, enabling
end-to-end job applications and reducing admin processing time by 85%.
• Deployed frontend on Vercel and backend on Render, achieving 99.9% uptime and supporting concurrent
traffic of 50+ users, optimized frontend performance with Vite, Axios, and React Router.`,
    skills: [
      "Next JS",
      "ReactJS",
      "TypeScript",
      "Tailwind CSS",
      "ShadcnUI",
      "MongoDB",
    ],
  },
];

export const education = [
  // {
  //   id: 0,
  //   img: glaLogo,
  //   school: "GLA University, Mathura",
  //   date: "Sept 2022 - July 2024",
  //   grade: "7.81 CGPA",
  //   desc: "I have completed my Master's degree (MCA) in Computer Applications from GLA University, Mathura. During my time at GLA, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at GLA University has been instrumental in shaping my technical abilities and professional growth.",
  //   degree: "Master of Computer Applications - MCA",
  // },
  {
    id: 0,
    img: akgecLogo,
    school: "Ajay Kumar Garg Engineering College, Ghaziabad",
    date: "Nov 2022 - June 2026",
    grade: "72.2%",
    desc: "I am currently pursuing a B.Tech in Information Technology at Ajay Kumar Garg Engineering College, Ghaziabad. My coursework has provided me with a strong foundation in areas such as Data Structures and Algorithms, Web Development, and Database Management Systems. Through hands-on projects, I have applied theoretical concepts to practical problems, strengthening my understanding of software development and technology.",
    degree: "Bachelor of Technology - B.Tech (Information Technology)",
  },
  {
    id: 1,
    img: central_academy_logo,
    school: "Central Academy Senior Secondary School, Lucknow",
    date: "April 2020 - March 2021",
    grade: "89%",
    desc: "I completed my class 12 education from Central Academy Senior Secondary School, Lucknow, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
    degree: "CBSE(XII) - PCM with Computer Science",
  },
  {
    id: 2,
    img: central_academy_logo,
    school: "Central Academy Senior Secondary School, Lucknow",
    date: "April 2018 - March 2019",
    grade: "96.2%",
    desc: "I completed my class 10 education from Central Academy Senior Secondary School, Lucknow.",
    degree: "CBSE(X)",
  },
];

export const projects = [
  {
    id: 0,
    title: "Commitly: AI-Powered Github code summarizer",
    description:
      "Commitly is a full-stack, AI-powered platform built with Next.js, TypeScript, Prisma, and PostgreSQL, designed to help teams manage, analyze, and collaborate on GitHub projects. It features project and team management, role-based authentication via Clerk, GitHub repository integration, AI-generated code summaries and Q&A, meeting transcription and summarization using AssemblyAI, and a modern responsive UI with shadcn/ui and Radix components. The platform supports dynamic dashboards, credit-based AI processing with Stripe, and seamless CI/CD deployment on Vercel, enabling efficient project workflows, enhanced code understanding, and improved team collaboration.",
    image: commitly,
    tags: [
      "TypeScript",
      "Next.js",
      "Prisma ORM",
      "PostgreSQL",
      "Clerk",
      "Stripe",
      "Gemini AI",
      "AssemblyAI",
      "LangChain",
    ],
    github: "https://github.com/ShikharPandey123/github_saas.git",
    webapp: "https://commitly-ashen.vercel.app/",
  },
  {
    id: 1,
    title: "Streamify",
    description:
      "Streamify is a real-time chat and video call web app featuring live messaging, friend suggestions, notifications, and 32 customizable UI themes. It uses React with React Router, Tailwind CSS, and DaisyUI for a responsive, modern frontend. Real-time messaging is powered by the Stream Chat SDK, supporting typing indicators, emoji reactions, and threaded messages. The backend is built with Node.js, Express, and MongoDB, with JWT-based authentication and secure cookie handling. Streamify provides a seamless social experience with robust real-time communication and dynamic, user-friendly interfaces.",
    image: streamify,
    tags: [
      "React JS",
      "React Router",
      "React Query",
      "Node.js",
      "MongoDB",
      "Express",
      "StreamChat.io",
    ],
    github: "https://github.com/ShikharPandey123/Streamify.git",
    webapp: "https://streamify-8sh2.onrender.com/",
  },
  {
    id: 2,
    title: "Job Application Portal",
    description:
      "This is a MERN-based job application platform where users can register, upload resumes, and apply for jobs, while admins can view and manage applications. The frontend is built with React (Vite), React Router, Axios, and React Toastify for a responsive UI. The backend uses Node.js, Express, and MongoDB, with JWT authentication, role-based access, and Multer for file uploads. RESTful API architecture ensures smooth communication between client and server. The app is deployed on Render, providing a fully functional, real-world job application system.",
    image: job_portal,
    tags: [
      "React JS",
      "React Router",
      "Axios",
      "React Toastify",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Multer",
    ],

    github: "https://github.com/ShikharPandey123/Job-Application-MERN.git",
    webapp: "https://github.com/ShikharPandey123/Job-Application-MERN.git",
  },
  {
    id: 3,
    title: "Food Order Web App",
    description:
      "This is a full-stack web application that allows users to browse food items, add them to a cart, and place orders online. It features user authentication and authorization, order history tracking, and a responsive interface. The frontend is built with React and Redux for state management, while the backend uses Node.js to handle API requests and data processing. The app demonstrates a complete e-commerce workflow for food ordering with secure user interactions and real-time order management.",
    image: food_order,
    tags: ["React JS", "Redux", "Node.js", "REST API"],
    github: "https://github.com/ShikharPandey123/Food-Order-Web-App.git",
    webapp: "https://food-order-web-app-pi.vercel.app",
  },
  // {
  //   id: 4,
  //   title: "Task Reminder Chrome Extension Tool",
  //   description:
  //     "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
  //   image: taskremLogo,
  //   tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
  //   github: "https://github.com/codingmastr/Task-Reminder-Tool",
  //   webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
  // },
  // {
  //   id: 5,
  //   title: "Webverse Digital",
  //   description:
  //     "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
  //   image: webverLogo,
  //   tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
  //   github: "https://github.com/codingmastr/Webverse-Digital",
  //   webapp: "https://webversedigital.com/",
  // },
  // {
  //   id: 6,
  //   title: "Coding Master",
  //   description:
  //     "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
  //   image: cmLogo,
  //   tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
  //   github: "https://codingmasterweb.in/",
  //   webapp: "https://codingmasterweb.in/",
  // },
  // {
  //   id: 7,
  //   title: "Image Search App",
  //   description:
  //     "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
  //   image: imagesearchLogo,
  //   tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
  //   github: "https://github.com/codingmastr/Image-Search-App",
  //   webapp: "https://imagsearch.netlify.app/",
  // },
  // {
  //   id: 8,
  //   title: "Image Background Remover",
  //   description:
  //     "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
  //   image: removebgLogo,
  //   tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
  //   github: "https://github.com/codingmastr/Image-Background-Remover",
  //   webapp: "https://removeyourbg.netlify.app/",
  // },
];
