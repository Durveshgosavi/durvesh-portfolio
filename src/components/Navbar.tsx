import HoverLinks from "./HoverLinks";
import "./styles/Navbar.css";

const Navbar = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title">
          DG
        </a>
        <a
          href="https://www.linkedin.com/in/durveshgosavi-6643051a7"
          className="navbar-connect"
          target="_blank"
          rel="noreferrer"
        >
          linkedin.com/in/durveshgosavi
        </a>
        <ul>
          <li>
            <a onClick={() => scrollTo("about")} href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a onClick={() => scrollTo("experience")} href="#experience">
              <HoverLinks text="EXPERIENCE" />
            </a>
          </li>
          <li>
            <a onClick={() => scrollTo("skills")} href="#skills">
              <HoverLinks text="SKILLS" />
            </a>
          </li>
          <li>
            <a onClick={() => scrollTo("contact")} href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
