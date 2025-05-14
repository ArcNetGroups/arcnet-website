import React from 'react';
import '../styles/policy-pages.css';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
    return (
        <div className="policy-page">
            <Link to="/" className="policy-back-link">
                <i className="fa fa-arrow-left"></i> Back to Home
            </Link>

            <div className="policy-header">
                <div className="container">
                    <h1>Privacy Policy</h1>
                    <p className="effective-date">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                </div>
            </div>

            <div className="policy-content container">
                <div className="policy-section">
                    <h2 className="section-title">Introduction</h2>
                    <p>
                        At ArcnetLabs, we respect your privacy and are committed to protecting your personal data.
                        This Privacy Policy will inform you about how we look after your personal data when you
                        visit our website and use our Prime platform, and tell you about your privacy rights and how
                        the law protects you.
                    </p>
                    <p>
                        This is a preliminary version of our Privacy Policy which will be updated with more
                        detailed information prior to the official launch of the Prime platform.
                    </p>
                </div>

                <div className="policy-section">
                    <h2 className="section-title">Information We Collect</h2>
                    <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped as follows:</p>
                    <ul>
                        <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
                        <li><strong>Contact Data</strong> includes email address and telephone numbers.</li>
                        <li><strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, operating system and platform.</li>
                        <li><strong>Usage Data</strong> includes information about how you use our website and services.</li>
                    </ul>
                </div>

                <div className="policy-section">
                    <h2 className="section-title">How We Use Your Information</h2>
                    <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                    <ul>
                        <li>To register you as a new customer</li>
                        <li>To provide and improve our services</li>
                        <li>To manage our relationship with you</li>
                        <li>To notify you about changes to our terms or privacy policy</li>
                        <li>To administer and protect our business and this website</li>
                    </ul>
                </div>

                <div className="policy-section">
                    <h2 className="section-title">Data Security</h2>
                    <p>
                        We have put in place appropriate security measures to prevent your personal data from
                        being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.
                        We limit access to your personal data to those employees, agents, contractors and other
                        third parties who have a business need to know.
                    </p>
                </div>

                <div className="policy-section">
                    <h2 className="section-title">Your Legal Rights</h2>
                    <p>
                        Under certain circumstances, you have rights under data protection laws in relation to
                        your personal data, including the right to request access, correction, erasure, restriction,
                        transfer, to object to processing, to portability of data and (where the lawful ground of
                        processing is consent) to withdraw consent.
                    </p>
                </div>

                <div className="policy-section">
                    <h2 className="section-title">Changes to This Privacy Policy</h2>
                    <p>
                        We may update our Privacy Policy from time to time. We will notify you of any changes by
                        posting the new Privacy Policy on this page and updating the "Last Updated" date at the top.
                    </p>
                </div>

                <div className="policy-section">
                    <h2 className="section-title">Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy, please contact ArcnetLabs at{' '}
                        <a href="mailto:company@arcnetlabs.com">company@arcnetlabs.com</a>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy; 