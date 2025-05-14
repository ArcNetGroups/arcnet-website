import React from "react";
import "../styles/fixes.css";
import "../styles/sections.css";
import "../styles/team.css";

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>The Dream Team</h2>
          <p>
            Meet the creative minds behind Prime. While we might be small, our passion and dedication are limitless!
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.name}-${i}`} className="col-md-4 col-sm-6 team">
                <div className="team-card">
                  <div className="img-container">
                    <img src={d.img} alt={d.name} className="team-img" />
                    <div className="team-overlay">
                      <a href={d.linkedin} target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </div>
                  </div>
                  <div className="team-info">
                    <h4>{d.name}</h4>
                    <p>{d.job}</p>
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
