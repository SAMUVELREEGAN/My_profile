import React from "react";
import "../../FreelanceAndDeveloper/css/component/Footer.css";
import {
  FaGithub, FaLinkedin,
  FaEnvelope
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

    

     <div className="subscribe-box">
  <h3>Get Updates From Anywhere</h3>

  <form
    onSubmit={(e) => {
      e.preventDefault();
      e.target.submit();
    }}
    action="https://formsubmit.co/samuelreegan372@gmail.com"
    method="POST"
    className="subscribe-input"
  >
    <input
      type="text"
      name="subscriber"
      placeholder="Enter your Email or Contact Number"
      required
    />
    <input type="hidden" name="_captcha" value="false" />
    <input type="hidden" name="_template" value="table" />

    <button type="submit">Get Started</button>
  </form>
</div>


        <div className="social-icons">
        <a href="https://github.com/SAMUVELREEGAN" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="//www.linkedin.com/in/samuvel-reegan-p-785a4a2ba" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        {/* <a href="https://twitter.com/yourprofile" target="_blank" rel="noreferrer"><FaTwitter /></a>
        <a href="https://youtube.com/yourchannel" target="_blank" rel="noreferrer"><FaYoutube /></a>
        <a href="https://wa.me/yourwhatsapp" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
        <a href="https://instagram.com/yourprofile" target="_blank" rel="noreferrer"><FaInstagram /></a>
        <a href="https://codepen.io/yourprofile" target="_blank" rel="noreferrer"><FaCodepen /></a> */}
        <a href="mailto:samuelreegan372@gmail.com" target="_blank" rel="noreferrer"><FaEnvelope /></a>
      </div>

      <hr />
      <p className="copyright">© 2025 Samuvel Reegan. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
