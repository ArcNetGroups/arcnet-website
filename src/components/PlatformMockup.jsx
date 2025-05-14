import React from "react";
import "../styles/platform-mockup.css";

export const PlatformMockup = () => {
    return (
        <div className="platform-mockup-container">
            <div className="device-frame">
                <div className="device-content">
                    <div className="mockup-header">
                        <div className="mockup-logo">Prime</div>
                        <div className="mockup-icons">
                            <div className="mockup-icon search-icon"></div>
                            <div className="mockup-icon plus-icon"></div>
                            <div className="mockup-icon profile-icon"></div>
                        </div>
                    </div>

                    <div className="mockup-welcome" style={{ borderBottom: "none" }}>
                        <h2>Welcome back, Henry!</h2>
                        <p>Ready to connect with top SMEs?</p>
                    </div>

                    <div className="mockup-search">
                        <div className="search-icon-small"></div>
                        <div className="search-text">Search SMEs...</div>
                    </div>

                    <div className="mockup-manage">
                        <div className="manage-button">Manage Your Services</div>
                    </div>

                    <div className="mockup-content">
                        <div className="mockup-left-column">
                            <div className="sme-card">
                                <div className="sme-profile">
                                    <div className="sme-avatar"></div>
                                    <div className="sme-info">
                                        <div className="sme-name">SME Name</div>
                                        <div className="sme-expertise">Expertise</div>
                                    </div>
                                </div>
                                <div className="sme-preview-line"></div>
                                <div className="sme-preview-line short"></div>
                                <div className="sme-actions">
                                    <div className="sme-action-icon heart"></div>
                                    <div className="sme-action-icon search"></div>
                                    <div className="sme-action-icon share"></div>
                                    <div className="sme-action-icon more"></div>
                                </div>
                            </div>

                            <div className="sme-card">
                                <div className="sme-profile">
                                    <div className="sme-avatar"></div>
                                    <div className="sme-info">
                                        <div className="sme-name">SME Name</div>
                                        <div className="sme-expertise">Expertise</div>
                                    </div>
                                </div>
                                <div className="sme-preview-line"></div>
                                <div className="sme-preview-line short"></div>
                                <div className="sme-actions">
                                    <div className="sme-action-icon heart"></div>
                                    <div className="sme-action-icon search"></div>
                                    <div className="sme-action-icon share"></div>
                                    <div className="sme-action-icon more"></div>
                                </div>
                            </div>
                        </div>

                        <div className="mockup-right-column">
                            <div className="mockup-section">
                                <div className="section-title">Upcoming Sessions</div>
                                <div className="section-content empty">
                                    <div className="empty-text">No bookings yet</div>
                                </div>
                            </div>

                            <div className="mockup-section">
                                <div className="section-title">Discussions</div>
                                <div className="section-content">
                                    <div className="discussion-item">
                                        <div className="discussion-dot"></div>
                                        <div className="discussion-text">How to build customer loyalty</div>
                                    </div>
                                    <div className="discussion-item">
                                        <div className="discussion-dot"></div>
                                        <div className="discussion-text">Tips for small business growth</div>
                                    </div>
                                </div>
                            </div>

                            <div className="mockup-section">
                                <div className="section-title">Community Highlights</div>
                                <div className="section-content">
                                    <div className="highlight-text">Laura Cole wins SME Leadership Award</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="device-notch"></div>
            <div className="device-reflection"></div>
        </div>
    );
}; 