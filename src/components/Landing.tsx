import { useEffect, useRef } from "react";
import gsap from "gsap";
import ProfileCard3D from "./ProfileCard3D";
import "./styles/Landing.css";

const Landing = () => {
  const introRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!introRef.current || !infoRef.current || !scrollRef.current) return;
    
    const tl = gsap.timeline();

    tl.fromTo(
      introRef.current.querySelectorAll("h2, h1"),
      { y: 50, opacity: 0, filter: "blur(8px)" },
      { y: 0, opacity: 1, filter: "blur(0px)", duration: 1.2, stagger: 0.2, ease: "power4.out", delay: 0.2 }
    )
    .fromTo(
      infoRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
      "-=0.8"
    )
    .fromTo(
      scrollRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
      "-=0.5"
    );
  }, []);

  return (
    <div className="landing-section" id="landingDiv">
      <div className="landing-container">
        <div className="landing-intro" ref={introRef}>
          <h2 className="landing-hello" style={{ animation: "none", opacity: 0 }}>Hello! I'm</h2>
          <h1 style={{ animation: "none", opacity: 0 }}>
            DURVESH
            <br />
            <span>GOSAVI</span>
          </h1>
        </div>
        <div className="landing-info" ref={infoRef} style={{ animation: "none", opacity: 0 }}>
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
      <ProfileCard3D />
      <div className="landing-circle1" />
      <div className="landing-circle2" />
      <div className="scroll-indicator" ref={scrollRef} style={{ animation: "none", opacity: 0 }}>
        <span>Scroll Down</span>
        <div className="scroll-line" />
      </div>
    </div>
  );
};

export default Landing;
