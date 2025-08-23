import about from '../assets/about.png';

const aboutPage = [
  {
    leftCards: [
      { icon: "fas fa-code", title: "Frontend Developer" },
      { icon: "fas fa-plug", title: "API Integration" },
      { icon: "fas fa-mobile-alt", title: "Backend Developer" }, // changed from Responsive Design
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
      { icon: "fas fa-briefcase", name: "Experience", count: 2 },
      { icon: "fas fa-folder-open", name: "Projects", count: 15 },
      { icon: "fas fa-cogs", name: "Adaptable Skills", count: 12 }, // renamed from Technologies Used
      { icon: "fas fa-globe", name: "Cloud Deployments", count: 5 }, // clearer industry wording
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
