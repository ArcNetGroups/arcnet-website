import React from "react";

export const Header = (props) => {
  const titleWithArcnetHighlighted = props.data
    ? props.data.title.replace("Arcnet", "<span class='highlight'>Arcnet</span>")
    : "Loading";

  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1 dangerouslySetInnerHTML={{ __html: titleWithArcnetHighlighted }} />
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
