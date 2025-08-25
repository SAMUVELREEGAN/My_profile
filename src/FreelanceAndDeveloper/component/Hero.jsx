import React, { useContext, useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../FreelanceAndDeveloper/css/component/Hero.css";
import persion from "../assets/persion.png";
import { MyContext } from "../context/MyContext";
import NavSection from "./NavSection";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaLinkedin, FaWhatsapp, FaInstagram, FaGithub } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Hero = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);
  const { hero } = useContext(MyContext);

  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const currentRole = hero.role[roleIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const typeTimeout = setTimeout(() => {
      if (isDeleting) {
        if (charIndex > 0) {
          setDisplayText(currentRole.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % hero.role.length);
        }
      } else {
        if (charIndex < currentRole.length) {
          setDisplayText(currentRole.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1000); // pause before deleting
        }
      }
    }, typingSpeed);

    return () => clearTimeout(typeTimeout);
  }, [charIndex, isDeleting, roleIndex, hero.role]);

  useEffect(() => {
    if (!vantaEffect && window.VANTA) {
      //  Select one effect here
      // const selectedEffect = window.VANTA.CLOUDS;
      // const selectedEffect = window.VANTA.RINGS;
      // const selectedEffect = window.VANTA.DOTS;
      const selectedEffect = window.VANTA.BIRDS;
      // const selectedEffect = window.VANTA.BIRDS; 
      // const selectedEffect =null; 

      const theme = localStorage.getItem("theme");
      const backgroundColor = theme === "dark" ? 0x131111 : 0xffffff;

      if (selectedEffect === window.VANTA.CLOUDS) {
        setVantaEffect(
          selectedEffect({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            skyColor: 0x68b8d7,
            cloudColor: 0xadc1de,
            cloudShadowColor: 0x183550,
            sunColor: 0xff9919,
            sunGlareColor: 0xff6633,
            sunlightColor: 0xff9933,
            speed: 0.2,
          })
        );
      } else if (selectedEffect === window.VANTA.BIRDS) {
        //  birds count
        setVantaEffect(
          selectedEffect({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            backgroundColor: backgroundColor,
            quantity: 2,   //   number of birds
            birdSize: 1.5, // optional
            wingSpan: 15   // optional
          })
        );
      } else if (!selectedEffect) {
        // normal background fallback
        if (vantaRef.current) {
          vantaRef.current.style.backgroundColor =
            theme === "dark" ? "#131111" : "#ffffff";
        }
      } else {
        setVantaEffect(
          selectedEffect({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            backgroundColor: backgroundColor,
          })
        );
      }
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div>
   <NavSection  />


      <div ref={vantaRef} className="hero_container">
        <div className="hero_child">
          <Container>
            <Row className="align-items-center">
              {/* Image first on mobile, second on desktop */}
              <Col
                xs={12}
                md={4}
                className="order-md-2 mb-4 mb-md-0"
                style={{ textAlign: "center" }}
              >
              <div className="hero-right2">
            <img src={persion} alt="Samuvel Reegan" className="hero-pic2" />
            <div className="hero-left2">
       <a href="//www.linkedin.com/in/samuvel-reegan-p-785a4a2ba" target="_blank" rel="noopener noreferrer">
  <div className="icon-box2" data-aos="fade-up">
    <FaLinkedin className="left-icon2" />
  </div>
</a>

<a href="https://wa.me/9345532741" target="_blank" rel="noopener noreferrer">
  <div className="icon-box2" data-aos="flip-up">
    <FaWhatsapp className="left-icon2" />
  </div>
</a>

<a href="https://www.instagram.com/hide_ree_s7?igsh=MTU3ZGg0NnQwbmoxZw==" target="_blank" rel="noopener noreferrer">
  <div className="icon-box2" data-aos="fade-up">
    <FaInstagram className="left-icon2" />
  </div>
</a>

<a href="https://github.com/samuvelreegan" target="_blank" rel="noopener noreferrer">
  <div className="icon-box2" data-aos="flip-up">
    <FaGithub className="left-icon2" />
  </div>
</a>

            </div>
          </div>
              </Col>

              {/* Text section */}
              <Col xs={12} md={8} className="hero_text">
                <p className="hero_line2">
                   <span className="hero-background-name2">
              {hero.hero_name.split("").map((letter, idx) => (
                <span key={idx} className="hero-letter" style={{ animationDelay: `${idx * 0.2}s` }}>
                  {letter}
                </span>
              ))}
            </span>
                </p>
                <p className="hero_line3 typing-effect">{displayText}</p>

                <p className="hero_line4">{hero.line_4}</p>
                <div className="holographic-container">
                  <div
                    className="glow-button-card"
                    onClick={() => setIsOpen(true)}
                    style={{ cursor: "pointer" }}
                  >
                    <h2>Hire Me</h2>
                  </div>
                  <div className="mt-1 ms-3" style={{cursor:"pointer"}} >
                    <Link to='/learn' style={{color:"var(--text-color)"}}>Learn more <FaArrowRightLong /></Link>
                  </div>
                </div>

                {/* Modal */}
                {isOpen && (
                  <div className="custom-modal-overlay">
                    <div className="custom-modal">
                      <button
                        className="modal-close"
                        onClick={() => setIsOpen(false)}
                      >
                        ×
                      </button>
                      <h3>Hire Me</h3>
                      <form
                        onSubmit={(e) => {
                          e.preventDefault(); // Stop default submit
                          setIsOpen(false); // Close the modal
                          e.target.submit(); // Manually submit the form
                        }}
                        action="https://formsubmit.co/samuelreegan372@gmail.com"
                        method="POST"
                      >
                        <input
                          type="text"
                          name="name"
                          required
                          placeholder="Your Name"
                        />
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="Your Email"
                        />
                        <textarea
                          name="message"
                          required
                          placeholder="Your Message"
                        ></textarea>
                        <button type="submit" className="submit-btn">
                          Send Message
                        </button>
                      </form>
                    </div>
                  </div>
                )}
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Hero;
