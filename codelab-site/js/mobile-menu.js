/* Mobile Menu Logic */
export const initMobileMenu = () => {
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');
    const navLinks = document.querySelectorAll('.nav__link');

    // Show Menu
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu');
        });
    }

    // Hide Menu (Close Icon)
    if (navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        });
    }

    // Hide Menu (Link Click)
    navLinks.forEach(n => n.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    }));
};

/* Sticky Header Logic */
export const initStickyHeader = () => {
    const header = document.getElementById('header');

    const scrollHeader = () => {
        if (window.scrollY >= 50) {
            header.classList.add('scroll-header');
        } else {
            header.classList.remove('scroll-header');
        }
    };

    window.addEventListener('scroll', scrollHeader);
};
