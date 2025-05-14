import React from "react";
import "../styles/fixes.css";
import "../styles/header.css";

export const Header = (props) => {
  const titleWithPrimeHighlighted = props.data
    ? props.data.title.replace("Prime", "<span class='highlight'>Prime</span>")
    : "Loading";

  return (
    <header id="header">
      <div className="intro">
        {/* Decorative elements */}
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>

        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-6 intro-text">
                <h1 dangerouslySetInnerHTML={{ __html: titleWithPrimeHighlighted }} />
                <p style={{ fontSize: "18px", lineHeight: "1.6", color: "rgba(255, 255, 255, 0.85)" }}>
                  {props.data ? props.data.paragraph : "Loading"}
                </p>

                <div className="btn-container">
                  <a href="#about" className="btn btn-custom btn-lg page-scroll">
                    Learn More
                  </a>
                  <a href="#waitlist" className="btn btn-outline btn-lg page-scroll">
                    Join Waitlist
                  </a>
                </div>
              </div>

              <div className="col-md-6">
                <div className="platform-illustration">
                  <div className="platform-mockup">
                    <div className="device-frame">
                      <div className="device-content">
                        <div className="content-header">
                          <div className="app-icon"></div>
                          <div className="app-title">Prime</div>
                        </div>
                        <div className="content-body">
                          <div className="feature-item video-feature">
                            <div className="feature-icon"></div>
                            <div className="feature-label">Live Sessions</div>
                          </div>
                          <div className="feature-item community-feature">
                            <div className="feature-icon"></div>
                            <div className="feature-label">Community</div>
                          </div>
                          <div className="feature-item content-feature">
                            <div className="feature-icon"></div>
                            <div className="feature-label">Premium Content</div>
                          </div>
                        </div>
                        <div className="content-footer">
                          <div className="engagement-metrics">
                            <div className="metric">
                              <span className="count">24k</span>
                              <span className="label">Members</span>
                            </div>
                            <div className="metric">
                              <span className="count">98%</span>
                              <span className="label">Engagement</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="device-reflection"></div>
                  </div>
                  <div className="floating-element element-1"></div>
                  <div className="floating-element element-2"></div>
                  <div className="floating-element element-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave transition */}
        <div className="header-wave-container">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="header-wave">
            <path fill="#0f0a19" className="wave wave1" d="M0,160L48,170.7C96,181,192,203,288,192C384,181,480,139,576,128C672,117,768,139,864,154.7C960,171,1056,181,1152,176C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            <path fill="#1a0e2e" opacity="0.7" className="wave wave2" d="M0,224L48,213.3C96,203,192,181,288,192C384,203,480,245,576,256C672,267,768,245,864,229.3C960,213,1056,203,1152,208C1248,213,1344,235,1392,245.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>
    </header>
  );
};
