import about from '../assets/about.png';
import { FaBriefcase, FaFolderOpen, FaCogs, FaGlobe } from "react-icons/fa";
import { FaCode, FaPlug, FaMobileAlt } from "react-icons/fa";


const aboutPage = [
  {
    leftCards: [
    { icon: <FaCode />, title: "Frontend Developer" },
    { icon: <FaPlug />, title: "API Integration" },
    { icon: <FaMobileAlt />, title: "Backend Developer" }, // changed from Responsive Design
    ],
    rightCards: [
      { icon: "fas fa-bolt", title: "Problem Solver" },
      { icon: "fas fa-users", title: "Collaborative Team Player" }, // more universal wording
      { icon: "fas fa-lightbulb", title: "Adaptable Learner" }, // changed from Quick Learner
    ],
    description:
      "I’m a dedicated Full Stack Developer skilled in developing scalable, maintainable, and platform-agnostic applications. My experience with JavaScript, Python, Node.js, Django, and databases like MongoDB and MySQL allows me to work across the stack and adapt to new technologies quickly.",

    resume: "/SAM_Node&Django.pdf",

    additional: [
      { icon: FaBriefcase, name: "Experience", count: 1 },
      { icon: FaFolderOpen, name: "Projects", count: 15 },
      { icon: FaCogs, name: "Adaptable Skills", count: 12 },
      { icon: FaGlobe, name: "Cloud Deployments", count: 5 },
    ],

    heading: "Adaptable Full Stack Web Developer",
    heading_description:
      "I focus on building reliable, secure, and responsive applications. With a solid grasp of software principles, I can contribute to systems built on frameworks like Django, Express, or even learn platforms like Spring Boot as needed.",
    heading_end:
      "I enjoy taking on challenges, improving code quality, and learning new tools and frameworks to deliver impactful solutions across any tech stack.",

    aboutImg: about,
  },
];

export default aboutPage;
