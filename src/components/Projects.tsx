import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles/Projects.css";

gsap.registerPlugin(ScrollTrigger);

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
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Background gradient mouse follow effect
    const handleMouseMove = (e: MouseEvent) => {
      cardsRef.current.forEach((card) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Scroll reveal animations
    gsap.fromTo(
      titleRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      }
    );

    cardsRef.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        { y: 100, opacity: 0, rotateX: 5 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1,
          ease: "power3.out",
          delay: i * 0.15,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          },
        }
      );
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="projects-section section-container" id="projects" ref={containerRef}>
      <div className="projects-container">
        <h2 ref={titleRef}>
          Key <span>Projects</span>
        </h2>
        <div className="projects-grid">
          {projects.map((project, i) => (
            <div
              className="project-card"
              key={i}
              ref={(el) => { cardsRef.current[i] = el; }}
            >
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
