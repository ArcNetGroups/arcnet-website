import React, { useEffect } from "react";
import "../styles/fixes.css";
import "../styles/sections.css";
import "../styles/services.css";
import { initAnimations } from "./animations";

export const Services = (props) => {
  useEffect(() => {
    // Initialize animations and get cleanup function
    const cleanup = initAnimations();

    // Cleanup on component unmount
    return cleanup;
  }, []);

  return (
    <div id="services" className="text-center">
      {/* Background pattern */}
      <div className="services-bg-pattern"></div>

      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>
            How we help you connect with your audience and grow your community
          </p>
        </div>

        <div className="row row-eq-height">
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.name}-${i}`} className="col-md-4 d-flex">
                <div className="service-card">
                  <div className="service-icon">
                    <i className={d.icon}></i>
                  </div>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                    <a href="#contact" className="service-link">Learn More</a>
                  </div>
                </div>
              </div>
            ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};