import React, { useContext, useEffect, useState } from "react";
import "../../FreelanceAndDeveloper/css/component/Project.css";
import { MyContext } from "../context/MyContext";

const Project = () => {
  const { projectdata } = useContext(MyContext);
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
    // Check if name already exists in localStorage
    const storedName = localStorage.getItem("username");
    if (!storedName) {
      // Open modal after 20 sec delay
      const timer = setTimeout(() => {
        setShowModal(true);
      }, 20000);

      return () => clearTimeout(timer);
    }
  }, []);

const handleSave = async () => {
  if (name.trim() !== "") {
    localStorage.setItem("username", name);

    // Send name to your email using FormSubmit
    const formData = new FormData();
    formData.append("subscriber", name); // same field name as your form
    formData.append("_captcha", "false");

    try {
      await fetch("https://formsubmit.co/samuelreegan372@gmail.com", {
        method: "POST",
        body: formData,
      });
      console.log("Name sent successfully");
    } catch (error) {
      console.error("Error sending form:", error);
    }

    setShowModal(false);
  }
};


  const handleClose = () => {
    // Just close, don’t reopen this session
    setShowModal(false);
    sessionStorage.setItem("modalClosed", "true");
  };

  useEffect(() => {
    if (sessionStorage.getItem("modalClosed") === "true") {
      setShowModal(false);
    }
  }, []);

  return (
    <>
      {/* Modal */}
      {showModal && (
  <div className="modal-overlay">
    <div className="modal-box">
      {/* Close button inside modal header */}
      <button onClick={handleClose} className="close-btn" style={{ float: "right" }}>
        ✕
      </button>

      <h2>Enter your name</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name"
        className="modal-input"
      />

      <div className="modal-actions">
        <button onClick={handleSave} className="save-btn">Save</button>
      </div>
    </div>
  </div>
)}


      {/* Existing Project Section */}
      <section className="projects1">
        <h2 className="heading1">Projects</h2>
        <div className="projects-container1">
          {projectdata.map((item, index) => (
            <div className="project-card1" key={index}>
              <div className="image-wrapper1">
                <img
                  src={item.image}
                  alt={item.title}
                  className="scroll-image1"
                />
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
                <div className="glow-button-container1">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="glow-button-card"
                  >
                    <h2>
                      View <span className="res-non">Project</span>
                    </h2>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Project;
