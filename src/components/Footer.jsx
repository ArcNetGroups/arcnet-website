import React from "react";
import "../styles/footer.css";
import { Link } from "react-scroll";

const Footer = ({ data }) => {
    const year = new Date().getFullYear();

    return (
        <footer id="footer">
            {/* Decorative particles */}
            <div className="footer-particle footer-particle-1"></div>
            <div className="footer-particle footer-particle-2"></div>
            <div className="footer-particle footer-particle-3"></div>
            <div className="footer-particle footer-particle-4"></div>

            <div className="footer-wave-container">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="footer-wave">
                    <path fill="#0f0a19" className="wave wave1" d="M0,192L48,181.3C96,171,192,149,288,149.3C384,149,480,171,576,192C672,213,768,235,864,229.3C960,224,1056,192,1152,181.3C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    <path fill="#1a0e2e" opacity="0.7" className="wave wave2" d="M0,256L48,240C96,224,192,192,288,192C384,192,480,224,576,234.7C672,245,768,235,864,224C960,213,1056,203,1152,213.3C1248,224,1344,256,1392,272L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>

            <div className="footer-content">
                <div className="container">
                    <div className="row">
                        {/* Logo and Description Column */}
                        <div className="col-md-4 footer-info">
                            <div className="footer-logo">
                                <h2>Prime</h2>
                            </div>
                            <p className="footer-description">
                                The ultimate platform for subject matter experts and small-medium enterprises to engage, grow, and monetize their audience with professional tools and features.
                            </p>
                            <div className="footer-social-icons">
                                <a href={data?.linkedin || "https://linkedin.com/"} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                    <i className="fa fa-linkedin"></i>
                                </a>
                                <a href={data?.twitter || "https://twitter.com/"} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                    <i className="fa fa-twitter"></i>
                                </a>
                                <a href={data?.instagram || "https://instagram.com/"} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                    <i className="fa fa-instagram"></i>
                                </a>
                            </div>
                        </div>

                        {/* Quick Links Column */}
                        <div className="col-md-3 footer-links">
                            <h4>Quick Links</h4>
                            <ul>
                                <li>
                                    <Link to="about" smooth={true} duration={500}>About Us</Link>
                                </li>
                                <li>
                                    <Link to="features" smooth={true} duration={500}>Features</Link>
                                </li>
                                <li>
                                    <Link to="services" smooth={true} duration={500}>Services</Link>
                                </li>
                                <li>
                                    <Link to="waitlist" smooth={true} duration={500}>Join Waitlist</Link>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Information Column */}
                        <div className="col-md-3 footer-contact">
                            <h4>Contact Us</h4>
                            <p>
                                <i className="fa fa-envelope"></i>
                                <a href={`mailto:${data?.email}`}>
                                    {data?.email}
                                </a>
                            </p>
                            <p>
                                <i className="fa fa-map-marker"></i>
                                {data?.address || "Nigeria"}
                            </p>
                        </div>

                        {/* Newsletter Column */}
                        <div className="col-md-2 footer-newsletter">
                            <h4>Updates</h4>
                            <p>Stay in the loop</p>
                            <Link
                                to="waitlist"
                                smooth={true}
                                duration={500}
                                className="btn-newsletter"
                            >
                                Subscribe
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <p className="copyright">
                                &copy; {year} Prime. All rights reserved.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <ul className="footer-legal">
                                <li><a href="/privacy-policy">Privacy Policy</a></li>
                                <li><a href="/terms-of-service">Terms of Service</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 