import { FaReact, FaGitAlt } from "react-icons/fa";
import {
  SiDjango,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiExpress
} from "react-icons/si";

const techstackPage = [
  {
    id: 1,
    category: "Frontend",
    icon: <FaReact />,
    tools: "React.js, Bootstrap, Media Queries",
  },
  {
    id: 2,
    category: "Backend",
    icon: <SiDjango />,
    tools: "Django, Django REST Framework",
  },
  {
    id: 3,
    category: "Scripting",
    icon: <SiJavascript />,
    tools: "JavaScript (ES6+), Axios, JSON",
  },
  // {
  //   id: 4,
  //   category: "HTML/CSS",
  //   icon: <SiHtml5 />,
  //   tools: "HTML5, CSS3, Custom Styling",
  // },
  
  {
    id: 5,
    category: "Node.js",
    icon: <SiNodedotjs />,
    tools: "Node.js, npm",
  },
  {
    id: 6,
    category: "Express.js",
    icon: <SiExpress />,
    tools: "Express.js (REST APIs)",
  },
  {
    id: 7,
    category: "Databases",
    icon: <SiMongodb />,
    tools: "MongoDB, Mongoose",
  },
  {
    id: 8,
    category: "Relational DB",
    icon: <SiMysql />,
    tools: "MySQL, phpMyAdmin",
  },
  {
    id: 9,
    category: "Version Control",
    icon: <FaGitAlt />,
    tools: "Git, GitHub",
  },
];

export default techstackPage;
