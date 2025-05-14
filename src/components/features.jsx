import React, { useState, useEffect, useRef } from "react";
import "../styles/fixes.css";
import "../styles/sections.css";
import "../styles/features.css";

export const Features = (props) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isUserScrolling, setIsUserScrolling] = useState(false);
  const carouselRef = useRef(null);
  const userScrollTimeoutRef = useRef(null);
  const featuresData = props.data || [];

  // Extended features data to ensure we have enough for the carousel
  const extendedFeatures = [
    ...(featuresData || []),
    {
      icon: "fa fa-lock",
      title: "Privacy Focused",
      text: "Your data belongs to you. We prioritize privacy and security in every aspect of our platform."
    },
    {
      icon: "fa fa-mobile",
      title: "Mobile Optimized",
      text: "Access your community and content from anywhere with our fully responsive mobile experience."
    },
    {
      icon: "fa fa-credit-card",
      title: "Monetization Tools",
      text: "Multiple revenue streams including subscriptions, one-time purchases, and tiered membership options."
    },
    {
      icon: "fa fa-bar-chart",
      title: "Analytics Dashboard",
      text: "Gain insights into your audience engagement and content performance with detailed analytics."
    }
  ];

  // Auto-scroll the carousel, but only when user is not manually scrolling
  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current && !isUserScrolling) {
        const maxScroll = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
        let newPosition = scrollPosition + 1;

        // When reaching the end, don't immediately reset
        // Instead, slow down and reverse direction to create a more natural effect
        if (newPosition >= maxScroll) {
          // Stop auto-scrolling at the end
          clearInterval(interval);

          // After a brief pause, reset to the beginning with a smooth transition
          setTimeout(() => {
            if (carouselRef.current) {
              // Use smooth scrolling for the reset
              carouselRef.current.scrollTo({
                left: 0,
                behavior: 'smooth'
              });

              // Update state after the scroll animation completes
              setTimeout(() => {
                setScrollPosition(0);
              }, 500);
            }
          }, 1000);

          return;
        }

        setScrollPosition(newPosition);
        carouselRef.current.scrollLeft = newPosition;
      }
    }, 30);

    return () => clearInterval(interval);
  }, [scrollPosition, isUserScrolling]);

  // Manual scroll handling
  const handleScroll = () => {
    if (carouselRef.current) {
      // Update scroll position
      setScrollPosition(carouselRef.current.scrollLeft);

      // Set user scrolling flag to true
      setIsUserScrolling(true);

      // Clear any existing timeout
      if (userScrollTimeoutRef.current) {
        clearTimeout(userScrollTimeoutRef.current);
      }

      // Set a timeout to reset the user scrolling flag after 3 seconds of inactivity
      userScrollTimeoutRef.current = setTimeout(() => {
        setIsUserScrolling(false);
      }, 3000);
    }
  };

  // Handle mouse events to detect user interaction
  const handleMouseDown = () => {
    setIsUserScrolling(true);
  };

  const handleMouseUp = () => {
    // Don't immediately reset isUserScrolling
    // Let the timeout handle it to give user time to view
  };

  // Text styles to ensure black color
  const textStyles = {
    color: "#000",
    textColor: "#000"
  };

  const descStyles = {
    color: "#333",
    textColor: "#333"
  };

  return (
    <div id="features">
      <div className="container">
        <div className="section-title text-center">
          <h2 style={textStyles}>Why Prime?</h2>
          <p style={textStyles}>Everything you need to engage your audience in one place</p>
        </div>

        <div className="features-carousel-container">
          <div
            className="features-carousel"
            ref={carouselRef}
            onScroll={handleScroll}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onTouchStart={handleMouseDown}
            onTouchEnd={handleMouseUp}
          >
            {extendedFeatures.map((feature, index) => (
              <div key={`${feature.title}-${index}`} className="feature-card">
                <div className="feature-icon-container">
                  <i className={feature.icon}></i>
                </div>
                <h3 style={textStyles}>{feature.title}</h3>
                <p style={descStyles}>{feature.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="carousel-indicators">
          <div className="carousel-dots">
            {Array.from({ length: Math.min(5, extendedFeatures.length) }).map((_, index) => (
              <span
                key={index}
                className={`carousel-dot ${index === Math.floor(scrollPosition / (carouselRef.current?.scrollWidth / extendedFeatures.length / 5)) % 5 ? 'active' : ''}`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};