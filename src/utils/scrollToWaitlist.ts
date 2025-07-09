import { MouseEvent } from 'react';

export const scrollToWaitlist = (e?: MouseEvent<HTMLElement>) => {
    if (e) {
        e.preventDefault();
    }
    const waitlistSection = document.getElementById('early-access');
    if (waitlistSection) {
        waitlistSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}
