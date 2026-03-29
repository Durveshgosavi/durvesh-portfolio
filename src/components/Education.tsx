import "./styles/Education.css";

const Education = () => {
  return (
    <div className="education-section section-container" id="education">
      <div className="education-container">
        <h2>
          <span>Education</span>
        </h2>
        <div className="education-grid">
          <div className="edu-card">
            <div className="edu-period">2024 — 2026</div>
            <h4>M.Sc. in Food Technology & Processing</h4>
            <h5>Technical University of Denmark (DTU), Copenhagen</h5>
            <p>
              Focus: Food process engineering, sustainability in food systems,
              data analysis, and quality management. Thesis on sustainability
              in Danish institutional food service with Cheval-Blanc Kantiner.
            </p>
          </div>
          <div className="edu-card">
            <div className="edu-period">2020 — 2024</div>
            <h4>B.E. in Food Technology & Processing</h4>
            <h5>A.D. Patel Institute of Technology, CVM University, India</h5>
            <p>
              Foundation in food process engineering, unit operations, quality
              systems, statistical analysis, and supply chain.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
