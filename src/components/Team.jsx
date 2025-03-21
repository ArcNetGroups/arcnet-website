import React from "react";

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Meet the Team</h2>
          <p>
            Our development team is led by experts who collectively have over "16" years of experience in Blockchain, Web3, Product design, and Frontend development.
          </p>
        </div>
        <div id="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
                  <div className="thumbnail">
                    <img src={d.img} alt="..." className="team-img" />
                    <div className="caption">
                      <h4>
                        <a href={d.linkedin} target="_blank" rel="noopener noreferrer">
                          {d.name}
                        </a>
                      </h4>
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
