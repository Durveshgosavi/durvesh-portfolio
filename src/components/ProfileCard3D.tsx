import { useRef, useEffect, useState, useCallback } from "react";
import "./styles/ProfileCard3D.css";

const ProfileCard3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const rafRef = useRef<number>(0);
  const currentPos = useRef({ x: 0, y: 0 });

  const animate = useCallback(() => {
    const lerp = 0.08;
    currentPos.current.x += (mousePos.x - currentPos.current.x) * lerp;
    currentPos.current.y += (mousePos.y - currentPos.current.y) * lerp;

    if (imgRef.current) {
      const rx = isHovered ? -currentPos.current.y * 35 : Math.sin(Date.now() * 0.001) * 3;
      const ry = isHovered ? currentPos.current.x * 35 : Math.cos(Date.now() * 0.0008) * 3;
      const tz = isHovered ? 60 : 0;
      const ty = isHovered ? 0 : Math.sin(Date.now() * 0.0015) * 10;

      imgRef.current.style.transform = `
        perspective(1200px)
        rotateX(${rx}deg)
        rotateY(${ry}deg)
        translateZ(${tz}px)
        translateY(${ty}px)
        scale(${isHovered ? 1.08 : 1})
      `;
    }
    rafRef.current = requestAnimationFrame(animate);
  }, [mousePos, isHovered]);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [animate]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current!.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left) / rect.width - 0.5,
      y: (e.clientY - rect.top) / rect.height - 0.5,
    });
  };

  return (
    <div
      className="hero-photo-container"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated glow orbs behind image */}
      <div className="glow-orb glow-orb-1" />
      <div className="glow-orb glow-orb-2" />
      <div className="glow-orb glow-orb-3" />

      {/* Floating particles */}
      <div className="hero-particles">
        {Array.from({ length: 30 }).map((_, i) => (
          <span
            key={i}
            className="hero-particle"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 5}s`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              opacity: 0.2 + Math.random() * 0.5,
            }}
          />
        ))}
      </div>

      {/* The actual photo */}
      <img
        ref={imgRef}
        src={`${import.meta.env.BASE_URL}images/profile.png`}
        alt="Durvesh Gosavi"
        className="hero-photo"
      />

      {/* Bottom shadow/fade */}
      <div className="hero-photo-shadow" />

      {/* Mouse-following shine */}
      <div
        className="hero-shine"
        style={{
          background: isHovered
            ? `radial-gradient(600px circle at ${(mousePos.x + 0.5) * 100}% ${(mousePos.y + 0.5) * 100}%, rgba(94, 234, 212, 0.12), transparent 50%)`
            : "none",
        }}
      />
    </div>
  );
};

export default ProfileCard3D;
