import "./styles/Certifications.css";

const completed = [
  "Google Project Management Certificate",
  "Microsoft Power BI Data Analyst",
  "ESG Essentials (Corp. Finance Institute)",
  "Corporate Finance Fundamentals (CFI)",
  "Anthropic AI Fluency (Anthropic Academy)",
  "Prompt Engineering (Anthropic Academy)",
  "Initiating & Planning Projects (Coursera)",
  "Lean Six Sigma — White Belt",
  "Wine Tasting: Sensory Techniques for Wine Analysis",
  "The Economics of Agro-Food Value Chains",
];

const Certifications = () => {
  return (
    <div className="cert-section section-container" id="certifications">
      <div className="cert-container">
        <h2>
          Certifications <span>&</span> Development
        </h2>
        <div className="cert-grid">
          {completed.map((cert, i) => (
            <div className="cert-card" key={i}>
              <div className="cert-icon">&#10003;</div>
              <span>{cert}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
