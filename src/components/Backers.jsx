import React, { useState, useEffect } from "react";
import "../styles/backers.css";

// Import actual logo images
import founderInstituteLogo from "../img/logos/the_founder_institute_logo.jpg";
import globalStartupEcosystemLogo from "../img/logos/global_startup_ecosystem_logo.jpg";
import buildspaceLogo from "../img/logos/buildspaceso_logo.jpg";
import startupVestorLogo from "../img/logos/startup_vestor_logo.jpg";

// Accelerator program data
const acceleratorData = [
    {
        id: 1,
        name: "Founder Institute",
        logo: founderInstituteLogo,
        alt: "Founder Institute Logo",
        url: "https://fi.co/"
    },
    {
        id: 2,
        name: "Global Startup Ecosystem",
        logo: globalStartupEcosystemLogo,
        alt: "Global Startup Ecosystem Logo",
        url: "https://globalstartupecosystem.com/"
    },
    {
        id: 3,
        name: "BuildSpace",
        logo: buildspaceLogo,
        alt: "BuildSpace Logo",
        url: "https://buildspace.so"
    },
    {
        id: 4,
        name: "Startup Vestor",
        logo: startupVestorLogo,
        alt: "Startup Vestor Logo",
        url: "https://www.linkedin.com/company/startup-vestor"
    }
];

export const Backers = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    // Step animation every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % acceleratorData.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div id="backers" className="text-center">
            <div className="backers-container container">
                <div className="backers-title">
                    <h2>Backed By</h2>
                    <p>
                        We're proud to be supported by leading accelerator programs around the world
                    </p>
                </div>

                <div className="backers-carousel">
                    <div className="backers-track">
                        {/* First set of logos */}
                        <div className="backers-track-duplicate">
                            {acceleratorData.map((backer) => (
                                <div
                                    key={backer.id}
                                    className={`backer-item ${activeIndex === backer.id - 1 ? 'active' : ''}`}
                                >
                                    <a href={backer.url} target="_blank" rel="noopener noreferrer" className="backer-logo">
                                        <img src={backer.logo} alt={backer.alt} />
                                    </a>
                                    <div className="backer-name">{backer.name}</div>
                                </div>
                            ))}
                        </div>

                        {/* Duplicated set for seamless looping */}
                        <div className="backers-track-duplicate">
                            {acceleratorData.map((backer) => (
                                <div
                                    key={`duplicate-${backer.id}`}
                                    className={`backer-item ${activeIndex === backer.id - 1 ? 'active' : ''}`}
                                >
                                    <a href={backer.url} target="_blank" rel="noopener noreferrer" className="backer-logo">
                                        <img src={backer.logo} alt={backer.alt} />
                                    </a>
                                    <div className="backer-name">{backer.name}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}; 