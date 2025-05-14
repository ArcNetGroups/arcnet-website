import React from 'react';
import '../styles/policy-pages.css';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
    return (
        <div className="policy-page">
            <Link to="/" className="policy-back-link">
                <i className="fa fa-arrow-left"></i> Back to Home
            </Link>

            <div className="policy-header">
                <div className="container">
                    <h1>Terms of Service</h1>
                    <p className="effective-date">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                </div>
            </div>

            <div className="policy-content container">
                <div className="policy-section">
                    <h2 className="section-title">Introduction</h2>
                    <p>
                        Welcome to Prime, the platform designed for subject matter experts and small-medium enterprises
                        by ArcnetLabs. These Terms of Service ("Terms") govern your access to and use of our website and services.
                    </p>
                    <p>
                        This is a preliminary version of our Terms of Service which will be updated with more
                        detailed information prior to the official launch of the Prime platform.
                    </p>
                    <p>
                        By accessing or using the Service, you agree to be bound by these Terms. If you disagree
                        with any part of the terms, then you may not access the Service.
                    </p>
                </div>

                <div className="policy-section">
                    <h2 className="section-title">Accounts</h2>
                    <p>
                        When you create an account with us, you must provide accurate, complete, and current
                        information. Failure to do so constitutes a breach of the Terms, which may result in
                        immediate termination of your account on our Service.
                    </p>
                    <p>
                        You are responsible for safeguarding the password that you use to access the Service and
                        for any activities or actions under your password.
                    </p>
                </div>

                <div className="policy-section">
                    <h2 className="section-title">Content</h2>
                    <p>
                        Our Service allows you to post, link, store, share and otherwise make available certain
                        information, text, graphics, videos, or other material. You are responsible for the content
                        that you post, including its legality, reliability, and appropriateness.
                    </p>
                    <p>
                        By posting content to the Service, you grant us the right to use, modify, publicly perform,
                        publicly display, reproduce, and distribute such content on and through the Service.
                    </p>
                </div>

                <div className="policy-section">
                    <h2 className="section-title">Acceptable Use</h2>
                    <p>You agree not to use the Service:</p>
                    <ul>
                        <li>In any way that violates any applicable national or international law or regulation</li>
                        <li>To transmit, or procure the sending of, any advertising or promotional material, including spam</li>
                        <li>To impersonate or attempt to impersonate the Company, a Company employee, another user, or any other person</li>
                        <li>In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful</li>
                    </ul>
                </div>

                <div className="policy-section">
                    <h2 className="section-title">Intellectual Property</h2>
                    <p>
                        The Service and its original content (excluding Content provided by users), features, and
                        functionality are and will remain the exclusive property of ArcnetLabs and its licensors.
                        Prime is a product of ArcnetLabs.
                    </p>
                </div>

                <div className="policy-section">
                    <h2 className="section-title">Termination</h2>
                    <p>
                        We may terminate or suspend your account immediately, without prior notice or liability, for
                        any reason whatsoever, including without limitation if you breach the Terms.
                    </p>
                    <p>
                        Upon termination, your right to use the Service will immediately cease. If you wish to
                        terminate your account, you may simply discontinue using the Service.
                    </p>
                </div>

                <div className="policy-section">
                    <h2 className="section-title">Limitation Of Liability</h2>
                    <p>
                        In no event shall ArcnetLabs, the company behind Prime, nor its directors, employees, partners, agents, suppliers, or
                        affiliates, be liable for any indirect, incidental, special, consequential or punitive
                        damages, including without limitation, loss of profits, data, use, goodwill, or other
                        intangible losses, resulting from your access to or use of or inability to access or use the
                        Service.
                    </p>
                </div>

                <div className="policy-section">
                    <h2 className="section-title">Changes</h2>
                    <p>
                        We reserve the right, at our sole discretion, to modify or replace these Terms at any time.
                        By continuing to access or use our Service after those revisions become effective, you agree
                        to be bound by the revised terms.
                    </p>
                </div>

                <div className="policy-section">
                    <h2 className="section-title">Contact Us</h2>
                    <p>
                        If you have any questions about these Terms, please contact ArcnetLabs at{' '}
                        <a href="mailto:company@arcnetlabs.com">company@arcnetlabs.com</a>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService; 