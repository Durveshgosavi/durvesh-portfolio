import ProfileCard3D from "./ProfileCard3D";
import "./styles/Landing.css";

const Landing = () => {
  return (
    <div className="landing-section" id="landingDiv">
      <div className="landing-container">
        <div className="landing-intro">
          <h2>Hello! I'm</h2>
          <h1>
            DURVESH
            <br />
            <span>GOSAVI</span>
          </h1>
        </div>
        <div className="landing-photo">
          <ProfileCard3D />
        </div>
        <div className="landing-info">
          <h3>Food Technology &</h3>
          <h2 className="landing-info-h2">
            <div className="landing-h2-1">Operations</div>
            <div className="landing-h2-2">Consulting</div>
          </h2>
          <h2>
            <div className="landing-h2-info">Consulting</div>
            <div className="landing-h2-info-1">Operations</div>
          </h2>
        </div>
      </div>
      <div className="scroll-indicator">
        <span>Scroll Down</span>
        <div className="scroll-line"></div>
      </div>
    </div>
  );
};

export default Landing;
