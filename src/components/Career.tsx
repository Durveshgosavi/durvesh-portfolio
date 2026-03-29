import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="experience">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Student Assistant — ESG & Business Development</h4>
                <h5>Cheval-Blanc Kantiner A/S · Copenhagen</h5>
              </div>
              <h3>2025–NOW</h3>
            </div>
            <p>
              Supporting ESG and business development with data-driven
              strategies. Building dashboards synthesizing operational, sales,
              and sustainability data. Conducting thesis research on plant-based
              menu reformulation and nutrition–environmental trade-offs.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Marketing & NPD Intern — Plant-Based Innovation</h4>
                <h5>Foodture APS (Taempeh) · Copenhagen</h5>
              </div>
              <h3>2024–25</h3>
            </div>
            <p>
              Developed go-to-market digital content strategy for sustainable
              plant-based products. Restructured SharePoint digital asset
              management. Analysed consumer engagement metrics to refine
              campaign positioning for B2C sustainability audiences.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Internship — Harvest & Winemaking</h4>
                <h5>Sula Vineyards · Nashik, India</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Executed end-to-end QA/QC protocols during harvest and
              winemaking, applying statistical process control. Gained hands-on
              knowledge of food safety standards, HACCP principles, and sensory
              evaluation in production.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Assistant Project Manager & IT Support</h4>
                <h5>Objectways Technologies · Arizona & Nashik</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Managed quality control workflows for Amazon SageMaker client
              projects. Supervised 15-member team, implemented process
              standardisation protocols. Coordinated sprint planning and
              deliverable tracking using Agile methodology.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Co-Founder — EdTech Platform</h4>
                <h5>Quarksolutions · Nashik, India</h5>
              </div>
              <h3>2020–22</h3>
            </div>
            <p>
              Co-founded an EdTech platform providing free mock tests for
              MHT-CET aspirants. Scaled to 20,000+ daily active users. Led
              full product lifecycle from ideation to launch with agile
              workflows.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
