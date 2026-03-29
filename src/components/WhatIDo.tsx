import "./styles/WhatIDo.css";

const WhatIDo = () => {
  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line x1="0" y1="0" x2="0" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="7,7" />
              <line x1="100%" y1="0" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="7,7" />
            </svg>
          </div>
          <div className="what-content">
            <div className="what-border1">
              <svg height="100%">
                <line x1="0" y1="0" x2="100%" y2="0" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
                <line x1="0" y1="100%" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>DATA & PROCESS OPTIMIZATION</h3>
              <h4>Turning Data Into Decisions</h4>
              <p>
                Bridging technical depth with business strategy through
                data analysis, process optimization, and lean thinking to
                drive operational excellence and sustainability outcomes.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Power BI</div>
                <div className="what-tags">Python</div>
                <div className="what-tags">SQL</div>
                <div className="what-tags">Lean Six Sigma</div>
                <div className="what-tags">SPC</div>
                <div className="what-tags">ESG Reporting</div>
              </div>
            </div>
          </div>
          <div className="what-content">
            <div className="what-border1">
              <svg height="100%">
                <line x1="0" y1="100%" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>FOOD SCIENCE & SUSTAINABILITY</h3>
              <h4>Engineering Better Food Systems</h4>
              <p>
                From harvest to plate — quality assurance, HACCP compliance,
                sensory evaluation, and sustainable reformulation in
                institutional food service and manufacturing.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">HACCP</div>
                <div className="what-tags">QA/QC</div>
                <div className="what-tags">GMP</div>
                <div className="what-tags">Sensory Analysis</div>
                <div className="what-tags">NPD</div>
                <div className="what-tags">Fermentation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
