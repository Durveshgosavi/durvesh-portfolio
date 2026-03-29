import "./styles/Skills.css";

const skillCategories = [
  {
    title: "Analytics & AI",
    skills: [
      "Power BI",
      "Python (Pandas, NumPy)",
      "SQL",
      "SPSS",
      "Advanced Excel",
      "Prompt Engineering",
      "AI Workflow Design",
    ],
  },
  {
    title: "Engineering",
    skills: [
      "Food Process Optimisation",
      "QA/QC",
      "HACCP",
      "Fermentation Technology",
      "Sensory Analysis",
      "GMP",
      "SPC",
    ],
  },
  {
    title: "Business",
    skills: [
      "Market Research",
      "Strategic Planning",
      "Risk Assessment",
      "NPD",
      "ESG Reporting",
      "Stakeholder Management",
    ],
  },
  {
    title: "Management",
    skills: [
      "Agile/Scrum",
      "JIRA",
      "Cross-functional Coordination",
      "Project Lifecycle Management",
    ],
  },
];

const languages = [
  { lang: "English", level: "Native / Bilingual" },
  { lang: "Hindi", level: "Native" },
  { lang: "Marathi", level: "Native" },
  { lang: "Danish", level: "Elementary" },
];

const Skills = () => {
  return (
    <div className="skills-section" id="skills">
      <div className="skills-container section-container">
        <h2>
          Skills <span>&</span> Tools
        </h2>

        <div className="skills-marquee">
          <div className="marquee-track">
            {[...skillCategories.flatMap((cat) => cat.skills), ...skillCategories.flatMap((cat) => cat.skills)].map((skill, i) => (
              <span className="marquee-tag" key={i}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="skills-grid">
          {skillCategories.map((cat) => (
            <div className="skill-category" key={cat.title}>
              <h4>{cat.title}</h4>
              <div className="skill-tags">
                {cat.skills.map((s) => (
                  <span className="skill-tag" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="languages-section">
          <h4>Languages</h4>
          <div className="lang-grid">
            {languages.map((l) => (
              <div className="lang-card" key={l.lang}>
                <span className="lang-name">{l.lang}</span>
                <span className="lang-level">{l.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
