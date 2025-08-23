import { useEffect, useState } from "react";
import "../../../FreelanceAndDeveloper/css/component/NavSection.css";
import ThemeToggle from "../../../Common/component/ThemeToggle";
import { useNavigate } from "react-router-dom";
import logo from '../../assets/logo.png'

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
      <div className={`nav-section ${scrolled ? "scrolled" : ""} main-navbar`} >
        <div className="logo" onClick={() => navigate("/")}>
          <img src={logo} alt="" width={"45px"}/>
          <span style={{position:"relative",top:"2px",right:"10px",fontSize:"2rem",cursor:"pointer"}}>am.</span>
        </div>

        <div className="nav-right ">
          <div className="nav-links desktop-only">
            <a href="#educations">Educations</a>
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
          <a href="#educations" onClick={handleToggle}>
            Educations
          </a>
         

          <div className="social">
            <a href="https://github.com/SAMUVELREEGAN" target="_blank"  rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="//www.linkedin.com/in/samuvel-reegan-p-785a4a2ba" target="_blank"  rel="noopener noreferrer" >
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:samuelreegan372@gmail.com" target="_blank"  rel="noopener noreferrer">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavSection;
