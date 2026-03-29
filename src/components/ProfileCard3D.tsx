import { useRef, useEffect, useState } from "react";
import "./styles/ProfileCard3D.css";

const ProfileCard3D = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMousePos({ x, y });
    };

    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Idle floating animation + mouse tilt
  const rotateX = isHovered ? -mousePos.y * 25 : 0;
  const rotateY = isHovered ? mousePos.x * 25 : 0;

  return (
    <div
      className="card3d-container"
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Floating particles */}
      <div className="card3d-particles">
        {Array.from({ length: 20 }).map((_, i) => (
          <span
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
            }}
          />
        ))}
      </div>

      {/* Glow ring */}
      <div className={`card3d-glow ${isHovered ? "card3d-glow-active" : ""}`} />

      {/* 3D Card */}
      <div
        className="card3d-card"
        ref={cardRef}
        style={{
          transform: `
            perspective(800px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            ${isHovered ? "scale3d(1.05, 1.05, 1.05)" : "scale3d(1, 1, 1)"}
          `,
        }}
      >
        <div className="card3d-inner">
          <div className="card3d-shine" style={{
            background: isHovered
              ? `radial-gradient(circle at ${(mousePos.x + 0.5) * 100}% ${(mousePos.y + 0.5) * 100}%, rgba(94, 234, 212, 0.15) 0%, transparent 60%)`
              : "none",
          }} />
          <img
            src="/images/profile.png"
            alt="Durvesh Gosavi"
            className="card3d-photo"
          />
          <div className="card3d-overlay" />
          <div className="card3d-border" />
        </div>
      </div>
    </div>
  );
};

export default ProfileCard3D;
