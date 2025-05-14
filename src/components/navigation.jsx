import React from "react";
import "../styles/globalStyling.css";
import "../styles/fixes.css";
import "../styles/navbar.css";
import primeLogo from '../img/logo/prime-logo.svg';

// eslint-disable-next-line no-unused-vars
export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            <div className="brand-container">
              <img src={primeLogo} alt="Prime Logo" className="brand-logo" />
              <div className="brand-text-container">
                <div className="p-wrapper">
                  <span className="p-letter">p</span>
                </div>
                <span className="rime-text">rime</span>
              </div>
            </div>
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#about" className="page-scroll">
                ABOUT
              </a>
            </li>

            <li>
              <a href="#features" className="page-scroll">
                FEATURES
              </a>
            </li>

            <li>
              <a href="#services" className="page-scroll">
                SERVICES
              </a>
            </li>
            {/* <li>
              <a href="#portfolio" className="page-scroll">
                Gallery
              </a>
            </li> */}
            {/* <li>
              <a href="#testimonials" className="page-scroll">
                Testimonials
              </a>
            </li> */}
            <li>
              <a href="#team" className="page-scroll">
                TEAM
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};