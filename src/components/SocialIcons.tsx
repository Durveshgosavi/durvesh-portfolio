import { FaLinkedinIn } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { TbNotes } from "react-icons/tb";
import HoverLinks from "./HoverLinks";
import "./styles/SocialIcons.css";

const SocialIcons = () => {
  return (
    <div className="icons-section">
      <div className="social-icons" id="social">
        <span>
          <a
            href="https://www.linkedin.com/in/durveshgosavi-6643051a7"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </span>
        <span>
          <a href="mailto:Durvesh.gosavi@gmail.com">
            <MdEmail />
          </a>
        </span>
      </div>
      <a
        className="resume-button"
        href="/Durvesh_Gosavi_CV.pdf"
        target="_blank"
        rel="noreferrer"
      >
        <HoverLinks text="RESUME" />
        <span>
          <TbNotes />
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;
