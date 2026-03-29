import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Get in Touch</h4>
            <p>
              <a href="mailto:Durvesh.gosavi@gmail.com">
                Durvesh.gosavi@gmail.com
              </a>
            </p>
            <p>
              <a href="tel:+4549903240">+45 49 90 32 40</a>
            </p>
            <p>Copenhagen, Denmark</p>
          </div>
          <div className="contact-box">
            <h4>Connect</h4>
            <a
              href="https://www.linkedin.com/in/durveshgosavi-6643051a7"
              target="_blank"
              rel="noreferrer"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="mailto:Durvesh.gosavi@gmail.com"
              className="contact-social"
            >
              Email <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h4>Education</h4>
            <p>M.Sc. Food Technology, DTU Copenhagen — 2024–2026</p>
            <p>B.E. Food Technology, CVM University — 2020–2024</p>
          </div>
          <div className="contact-box">
            <h2>
              Designed & Developed <br /> by <span>Durvesh Gosavi</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
