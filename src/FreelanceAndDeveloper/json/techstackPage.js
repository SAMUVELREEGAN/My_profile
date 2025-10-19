import { FaReact, FaGitAlt } from "react-icons/fa";
import {
  SiDjango,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiExpress,
  SiDocker,
  SiAmazonaws,
  SiGitlab,
  SiVite
} from "react-icons/si";

const techstackPage = [
  {
    id: 1,
    category: "Frontend",
    icon: <FaReact />,
    tools: "React.js, React Hook Form, Three.js, Vite, Bootstrap, Material UI, SASS, Axios",
  },
  {
    id: 2,
    category: "Backend",
    icon: <SiDjango />,
    tools: "Django, Django REST Framework (DRF), Node.js, Express.js (REST APIs)",
  },
  {
    id: 3,
    category: "Scripting",
    icon: <SiJavascript />,
    tools: "JavaScript (ES6+), JSON, API Integration",
  },
  {
    id: 4,
    category: "Databases",
    icon: <SiMongodb />,
    tools: "MongoDB, MySQL, Mongoose",
  },
  {
    id: 5,
    category: "DevOps & Cloud",
    icon: <SiDocker />,
    tools: "Docker, CI/CD Pipelines, AWS (EC2), WinSCP",
  },
  {
    id: 6,
    category: "Version Control",
    icon: <FaGitAlt />,
    tools: "Git, GitHub, GitLab",
  },
  {
    id: 7,
    category: "Development Tools",
    icon: <SiVite />,
    tools: "VS Code, npm",
  },
  {
    id: 8,
    category: "Others",
    icon: <SiExpress />,
    tools: "RESTful APIs, Postman, API Documentation",
  },
];

export default techstackPage;
