import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Backers } from "./components/Backers";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";
import { initScrollAnimations } from "./components/animations";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import "./styles/fixes.css";
import "./styles/sections.css";
import "./styles/navbar.css";
import "./styles/header.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const HomePage = ({ landingPageData }) => (
  <>
    <Navigation />
    <Header data={landingPageData.Header} />
    <About data={landingPageData.About} />
    <Features data={landingPageData.Features} />
    <Services data={landingPageData.Services} />
    <Backers />
    <Team data={landingPageData.Team} />
    <Contact data={landingPageData.Contact} />
    <Footer data={landingPageData.Contact} />
    <ScrollToTop />
  </>
);

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  const location = useLocation();

  useEffect(() => {
    setLandingPageData(JsonData);

    // Initialize scroll animations only on homepage
    if (location.pathname === '/') {
      initScrollAnimations();

      // Add scroll animation for other elements
      const animateOnScroll = () => {
        const elements = document.querySelectorAll('.section-title, .feature-box, .thumbnail, .service-desc');

        elements.forEach(element => {
          const elementPosition = element.getBoundingClientRect().top;
          const screenPosition = window.innerHeight / 1.2;

          if (elementPosition < screenPosition) {
            element.classList.add('animate');
          }
        });
      };

      window.addEventListener('scroll', animateOnScroll);
      animateOnScroll(); // Initial check

      return () => window.removeEventListener('scroll', animateOnScroll);
    }
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage landingPageData={landingPageData} />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
    </Routes>
  );
};

export default App;