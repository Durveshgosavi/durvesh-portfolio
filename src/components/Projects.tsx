import "./styles/Projects.css";

const projects = [
  {
    title: "Master's Thesis — Sustainability in Institutional Food Service",
    org: "DTU / Cheval-Blanc Kantiner",
    period: "2025–2026",
    description:
      "Ongoing thesis investigating sustainability-related reformulation strategies in Danish institutional food service. Bridging food science, environmental data, and operational feasibility.",
    tags: ["Sustainability", "Research", "Food Science", "ESG"],
  },
  {
    title: "Real-World Business Case — Puffin-ID",
    org: "DTU Entrepreneurship",
    period: "2024",
    description:
      "Selected for DTU Entrepreneurship course to solve a live business case for Puffin-ID (Food/Bio Engineering). Developed a scalable Business Model Canvas for a biotech innovation. Pitched strategic solution to stakeholders.",
    tags: ["Strategy", "Biotech", "Entrepreneurship", "Validation"],
  },
  {
    title: "Quarksolutions — EdTech Platform",
    org: "Co-Founded in Nashik, India",
    period: "2020–2022",
    description:
      "Co-founded a free mock test and student update platform for MHT-CET exam aspirants. Scaled to 20,000+ daily active users. Led product strategy, user acquisition, team operations, and full product lifecycle.",
    tags: ["EdTech", "Entrepreneurship", "Product Strategy", "Scaling"],
  },
];

const Projects = () => {
  return (
    <div className="projects-section section-container" id="projects">
      <div className="projects-container">
        <h2>
          Key <span>Projects</span>
        </h2>
        <div className="projects-grid">
          {projects.map((project, i) => (
            <div className="project-card" key={i}>
              <div className="project-number">0{i + 1}</div>
              <div className="project-content">
                <div className="project-header">
                  <h4>{project.title}</h4>
                  <span className="project-period">{project.period}</span>
                </div>
                <h5>{project.org}</h5>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span className="p-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
