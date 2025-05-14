import React from "react";
import { PlatformMockup } from "./PlatformMockup";
import "../styles/fixes.css";
import "../styles/sections.css";
import "../styles/about.css";

export const About = (props) => {
  return (
    <>
      {/* Main About Section */}
      <div id="about">
        <div className="container">
          {/* Simple white heading at the top of the section */}
          <div className="row">
            <div className="col-xs-12 text-center mb-4">
              <h2 className="about-main-heading" style={{ color: "#fff", marginBottom: "40px", fontSize: "36px", fontWeight: "700", borderBottom: "none" }}>
                The Platform for SMEs
              </h2>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-md-5">
              <div className="about-mockup-wrapper">
                <PlatformMockup />
                <div className="mockup-decoration circle1"></div>
                <div className="mockup-decoration circle2"></div>
                <div className="mockup-decoration circle3"></div>
              </div>
            </div>
            <div className="col-xs-12 col-md-7">
              <div className="about-content">
                <div className="about-text">
                  <p>{props.data ? props.data.paragraph : "loading..."}</p>
                  <h3>Our Solution</h3>
                  <div className="about-divider"></div>
                  <p>{props.data ? props.data.paragraph2 : "loading..."}</p>
                </div>

                <div className="about-features">
                  <div className="about-feature-grid">
                    <div className="about-feature">
                      <div className="about-feature-icon">
                        <i className="fa fa-users"></i>
                      </div>
                      <div className="about-feature-content">
                        <h4>Community Building</h4>
                        <p>Create dedicated spaces for your audience to connect and engage</p>
                      </div>
                    </div>

                    <div className="about-feature">
                      <div className="about-feature-icon">
                        <i className="fa fa-video-camera"></i>
                      </div>
                      <div className="about-feature-content">
                        <h4>Live Sessions</h4>
                        <p>Host interactive workshops and personalized coaching calls</p>
                      </div>
                    </div>

                    <div className="about-feature">
                      <div className="about-feature-icon">
                        <i className="fa fa-file-text"></i>
                      </div>
                      <div className="about-feature-content">
                        <h4>Premium Content</h4>
                        <p>Share exclusive resources and monetize your expertise</p>
                      </div>
                    </div>

                    <div className="about-feature">
                      <div className="about-feature-icon">
                        <i className="fa fa-line-chart"></i>
                      </div>
                      <div className="about-feature-content">
                        <h4>Business Growth</h4>
                        <p>Scale your business with built-in tools and analytics</p>
                      </div>
                    </div>
                  </div>

                  <div className="about-cta">
                    <a href="#features" className="btn btn-about">Explore Features</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

