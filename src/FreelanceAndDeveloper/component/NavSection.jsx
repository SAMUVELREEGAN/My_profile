import { useEffect, useState } from "react";
import "../../FreelanceAndDeveloper/css/component/NavSection.css";
import ThemeToggle from "../../Common/component/ThemeToggle";
import logo from '../assets/logo.png'
import { useNavigate } from "react-router-dom";

const NavSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate()

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 200); // scroll threshold
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={`nav-section ${scrolled ? "scrolled" : ""} main-navbar`}>
        <div className="logo" onClick={() => navigate("/")}>
          <img src={logo} alt="Samuvel Reegan" width={"45px"}/>
          <span style={{position:"relative",top:"2px",right:"10px",fontSize:"2rem"}}>am.</span>
        </div>

        <div className="nav-right ">
          <div className="nav-links desktop-only">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
          </div>
          <div className="theme_toggle ms-2">
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Toggle Button Mobile */}
      <div className="nav-toggle-wrapper mobile-only">
        <button
          className={`menu-toggle ${isOpen ? "open" : ""}`}
          onClick={handleToggle}
        >
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "visible" : ""}`}>
        <nav className="sidebar-content">
          <a href="#about" onClick={handleToggle}>
            About
          </a>
          <a href="#projects" onClick={handleToggle}>
            Projects
          </a>
          <a href="#experience" onClick={handleToggle}>
            Experience
          </a>

          <div className="social">
            <a href="https://github.com/SAMUVELREEGAN" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="//www.linkedin.com/in/samuvel-reegan-p-785a4a2ba" target="_blank" rel="noopener noreferrer" >
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:samuelreegan372@gmail.com" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavSection;
