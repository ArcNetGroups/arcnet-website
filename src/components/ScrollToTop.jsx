import React, { useState, useEffect } from 'react';
import '../styles/scrollToTop.css';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollHistory, setScrollHistory] = useState([]);
    const [isAtBottom, setIsAtBottom] = useState(false);

    // Function to track navigation events and scroll position
    useEffect(() => {
        // Track hash changes (anchor link navigation)
        const handleHashChange = () => {
            if (window.location.hash) {
                // Add current position to history before navigating
                setScrollHistory(prev => [...prev, window.scrollY]);
                setIsVisible(true);
                setIsAtBottom(false);
            }
        };

        // Track clicks on anchor links
        const handleAnchorClick = (e) => {
            const target = e.target;
            // Check if clicked element is an anchor with hash
            if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
                // Store the previous position
                setScrollHistory(prev => [...prev, window.scrollY]);
                setIsVisible(true);
                setIsAtBottom(false);
            }
        };

        // Listen for scroll events to determine if button should be visible
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            // Show button in these scenarios:
            // 1. When user has scrolled to bottom or near bottom of page
            // 2. When user has navigated using links and scrolled significantly
            // 3. When user has scrolled significantly down the page

            const isNearBottom = scrollPosition + windowHeight >= documentHeight - 200; // Within 200px of bottom
            const hasScrolledSignificantly = scrollPosition > windowHeight * 0.5; // Scrolled 50% of view height

            setIsAtBottom(isNearBottom);

            if (isNearBottom || (scrollHistory.length > 0 && hasScrolledSignificantly) || scrollPosition > 600) {
                setIsVisible(true);
            } else if (scrollPosition < 300) {
                // Hide when close to top
                setIsVisible(false);
            }
        };

        // Add event listeners
        window.addEventListener('hashchange', handleHashChange);
        document.body.addEventListener('click', handleAnchorClick);
        window.addEventListener('scroll', handleScroll);

        // Check initial scroll position and hash
        handleScroll();
        if (window.location.hash) {
            setIsVisible(true);
        }

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
            document.body.removeEventListener('click', handleAnchorClick);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollHistory]);

    // Function to scroll back to previous position or top
    const scrollToTop = () => {
        // If we're at the bottom of the page, always scroll to top
        if (isAtBottom) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            return;
        }

        // Otherwise, use scroll history
        if (scrollHistory.length > 0) {
            const lastPosition = scrollHistory[scrollHistory.length - 1];

            window.scrollTo({
                top: lastPosition,
                behavior: 'smooth'
            });

            // Remove the used position from history
            setScrollHistory(prev => prev.slice(0, -1));

            // Hide the button if we've exhausted the history
            if (scrollHistory.length <= 1) {
                setTimeout(() => setIsVisible(false), 1000);
            }
        } else {
            // If no history, scroll to top
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            setIsVisible(false);
        }
    };

    return (
        <button
            className={`scroll-top-button ${isVisible ? 'visible' : 'hidden'} ${isAtBottom ? 'at-bottom' : ''}`}
            onClick={scrollToTop}
            aria-label={isAtBottom ? "Return to top of page" : "Return to previous position"}
            title={isAtBottom ? "Scroll to top" : "Go back"}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M18 15l-6-6-6 6" />
            </svg>
        </button>
    );
};

export default ScrollToTop; 