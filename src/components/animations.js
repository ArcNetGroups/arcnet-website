// Scroll animations for section transitions
export const initScrollAnimations = () => {
    const animateOnScroll = () => {
        // Animate about section elements
        const aboutElements = document.querySelectorAll(
            '.about-mockup-wrapper, .about-text p, .about-divider, .about-text h3, .about-feature, .about-cta'
        );

        aboutElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;

            if (elementPosition < screenPosition) {
                element.classList.add('animate-in');
            }
        });
    };

    // Initial check
    setTimeout(animateOnScroll, 300);

    // Add scroll event listener
    window.addEventListener('scroll', animateOnScroll);
};

// Function to handle scroll animations
export const handleScrollAnimations = () => {
    // About section animations
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.75 && rect.bottom >= 0;

        if (isVisible) {
            const elements = aboutSection.querySelectorAll(
                '.about-text p, .about-divider, .about-text h3, .about-feature, .about-cta'
            );

            elements.forEach(el => {
                el.classList.add('animate-in');
            });
        }
    }

    // Services section animations
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
        const rect = servicesSection.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.75 && rect.bottom >= 0;

        if (isVisible) {
            const serviceCards = servicesSection.querySelectorAll('.service-card');

            serviceCards.forEach(card => {
                card.classList.add('animate-in');
            });
        }
    }
};

// Initialize animations
export const initAnimations = () => {
    // Run on initial load
    handleScrollAnimations();

    // Add scroll event listener
    window.addEventListener('scroll', handleScrollAnimations);

    // Return cleanup function
    return () => {
        window.removeEventListener('scroll', handleScrollAnimations);
    };
}; 