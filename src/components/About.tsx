import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Master's student at DTU (Technical University of Denmark) specializing
          in Food Technology, with a focus on sustainability in institutional
          food service. I combine engineering and technical depth — HACCP, QA/QC,
          GMP, SPC, sensory analysis — with business acumen, process
          optimization, and data-driven problem-solving.
        </p>
        <p className="para" style={{ marginTop: "1rem" }}>
          My experience spans ESG and business development, plant-based food
          innovation, quality assurance and winemaking, IT project management,
          and co-founding an EdTech platform that scaled to 20,000+ daily active
          users. Building toward consulting, process analysis, and operations
          roles where data-driven thinking meets real-world technical and
          sustainability challenges.
        </p>
      </div>
      <div className="about-targets">
        <h4>Career Focus</h4>
        <div className="target-tags">
          <span className="tag">Technology & Operations Consulting</span>
          <span className="tag">Data / Process Analyst</span>
          <span className="tag">Sustainability</span>
          <span className="tag">R&D / Quality</span>
          <span className="tag">Marketing & Communications</span>
        </div>
      </div>
    </div>
  );
};

export default About;
