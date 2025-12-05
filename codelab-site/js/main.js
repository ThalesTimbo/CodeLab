/* Main JS Entry Point */
import { initMobileMenu, initStickyHeader } from './mobile-menu.js';
import { initAnimations } from './animations.js';

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initStickyHeader();
    initAnimations();

    console.log('CodeLab system initialized. Performance mode active.');
});
