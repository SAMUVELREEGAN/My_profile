import "../../FreelanceAndDeveloper/css/component/Contact.css";
import { useState } from "react";
import contactPage from "../json/contactPage";

const Contact = () => {
  const [option, setOption] = useState("Hire");

  return (
    <div>
      <h1 style={{ textAlign: "center", color: "#333" }}>Contact Me</h1>
      <section className="contact-container">
        {/* Left Side */}
        <div className="contact-left">
          {contactPage.map((item) => (
            <div className="contact-info" key={item.id}>
              <div className="contact-icon">{item.icon}</div>
              <div className="contact-details">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
          <div className="map">
            <iframe
              title="T Nagar Chennai"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15698.994935047936!2d77.96328464459354!3d10.361964636201694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00aa57a54881e3%3A0x765a14068982e6e7!2sDindigul%2C%20Tamil%20Nadu%20624001!5e0!3m2!1sen!2sin!4v1755961593457!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Right Side */}
        <div className="contact-right">
          <div className="option-buttons">
            <button
              className={option === "Hire" ? "active" : ""}
              onClick={() => setOption("Hire")}
            >
              Contact
            </button>
            <button
              className={option === "Freelance" ? "active" : ""}
              onClick={() => setOption("Freelance")}
            >
              Freelance
            </button>
          </div>

          {/* ✅ FormSubmit.co Integration */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              e.target.submit(); // force submit
            }}
            action="https://formsubmit.co/samuelreegan372@gmail.com"
            method="POST"
          >
            {option === "Hire" ? (
              <>
                <div className="row">
                  <input type="text" name="name" placeholder="Your Name" required />
                  <input type="email" name="email" placeholder="Your Email" required />
                  <input type="text" name="subject" placeholder="Subject" required />
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
              </>
            ) : (
              <>
                <div className="row">
                  <input type="text" name="projectName" placeholder="Project Name" required />
                  <input type="number" name="budget" placeholder="Budget ($)" required />
                  <input type="date" name="deadline" required />
                  <textarea
                    name="description"
                    rows="5"
                    placeholder="Project Description"
                    required
                  ></textarea>
                </div>
              </>
            )}

            {/* Hidden Inputs (FormSubmit features) */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <button type="submit" className="contact-btn">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
