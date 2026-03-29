import { useEffect, useState } from "react";
import "./styles/Loading.css";

interface LoadingProps {
  onComplete: () => void;
}

const Loading = ({ onComplete }: LoadingProps) => {
  const [percent, setPercent] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    let p = 0;
    const interval = setInterval(() => {
      p += Math.floor(Math.random() * 8) + 2;
      if (p >= 100) {
        p = 100;
        clearInterval(interval);
        setTimeout(() => setLoaded(true), 300);
      }
      setPercent(p);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    if (!loaded) return;
    setClicked(true);
    setTimeout(() => onComplete(), 900);
  };

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect();
    target.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    target.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  }

  return (
    <>
      <div className="loading-header">
        <span className="loader-title">DG</span>
        <div className={`loaderGame ${clicked ? "loader-out" : ""}`}>
          <div className="loaderGame-container">
            <div className="loaderGame-in">
              {[...Array(27)].map((_, i) => (
                <div className="loaderGame-line" key={i} />
              ))}
            </div>
            <div className="loaderGame-ball" />
          </div>
        </div>
      </div>
      <div className={`loading-screen ${clicked ? "loading-exit" : ""}`}>
        <div className="loading-marquee">
          <div className="loading-marquee-track">
            <span>Food Technology</span>
            <span>Operations</span>
            <span>Sustainability</span>
            <span>Consulting</span>
            <span>Food Technology</span>
            <span>Operations</span>
            <span>Sustainability</span>
            <span>Consulting</span>
          </div>
        </div>
        <div
          className={`loading-wrap ${clicked ? "loading-clicked" : ""}`}
          onMouseMove={handleMouseMove}
          onClick={handleClick}
        >
          <div className="loading-hover" />
          <div className={`loading-button ${loaded ? "loading-complete" : ""}`}>
            <div className="loading-container">
              <div className="loading-content">
                <div className="loading-content-in">
                  Loading <span>{Math.min(percent, 100)}%</span>
                </div>
              </div>
              <div className="loading-box" />
            </div>
            <div className="loading-content2">
              <span>Explore</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;
