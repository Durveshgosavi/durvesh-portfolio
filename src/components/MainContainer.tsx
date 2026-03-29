import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import About from "./About";
import Career from "./Career";
import Certifications from "./Certifications";
import Contact from "./Contact";
import Education from "./Education";
import Landing from "./Landing";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Skills from "./Skills";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";

gsap.registerPlugin(ScrollTrigger);

const MainContainer = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 2,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return (
    <div className="container-main">
      <Navbar />
      <SocialIcons />
      <div className="container-main">
        <Landing />
        <About />
        <WhatIDo />
        <Career />
        <Education />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </div>
    </div>
  );
};

export default MainContainer;
