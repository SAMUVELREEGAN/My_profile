import React, { useContext } from "react";
import "../../FreelanceAndDeveloper/css/component/Project.css";
import { MyContext } from "../context/MyContext";

const Project = () => {
  const { projectdata } = useContext(MyContext);

  return (
    <section className="projects1">
      <h2 className="heading1">Projects</h2>
      <div className="projects-container1">
        {projectdata.map((item, index) => (
          <div className="project-card1" key={index}>
            <div className="image-wrapper1">
              <img src={item.image} alt={item.title} className="scroll-image1" />
              <div className="overlay1 res-non">
                <p className="description1">{item.description}</p>
                <p className="duration1">Duration: {item.duration}</p>
                <div className="tech-text1">
                  {item.tech.map((tech, idx) => (
                    <span key={idx} className="tech-item1">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="project-footer1">
              <h3 className="project-title1">{item.title}</h3>
              {/* <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                View Project
              </a> */}
              <div className="glow-button-container1" >
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="glow-button-card"
                >
                  <h2>View <span className="res-non">Project</span></h2>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
