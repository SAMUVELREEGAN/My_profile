import About from "../../FreelanceAndDeveloper/component/About"
import Blog from "../../FreelanceAndDeveloper/component/Blog"
// import Certifications from "../../FreelanceAndDeveloper/component/Certifications"
import Contact from "../../FreelanceAndDeveloper/component/Contact"
import GitContribution from "../../FreelanceAndDeveloper/component/GitContribution"
import Hero from "../../FreelanceAndDeveloper/component/Hero"
import MyCreativity from "../../FreelanceAndDeveloper/component/MyCreativity"
import Project from "../../FreelanceAndDeveloper/component/Project"
// import Resume from "../../FreelanceAndDeveloper/component/Resume"
import Skills from "../../FreelanceAndDeveloper/component/Skills"
import TechStack from "../../FreelanceAndDeveloper/component/TechStack"
// import Testimonials from "../../FreelanceAndDeveloper/component/Testimonials"
import WorkExperience from "../../FreelanceAndDeveloper/component/WorkExperience"
import Answer from "../component/Answer"

const Home = () => {
  return (
    <div>
      <Hero />
      
  <div id="about">    <About /></div>
      <MyCreativity />
      <Skills />
      <GitContribution />
        <div id="projects">  
      <Project />
      </div>
      <TechStack />
      {/* <Resume /> */}
      {/* <Certifications /> */}
 <div id="experience">  
      <WorkExperience />
      </div>
           <Answer />
      <Blog />
      {/* <Testimonials /> */}
      <Contact />
    </div>
  )
}

export default Home