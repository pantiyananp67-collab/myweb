document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.navbar');
        if (window.scrollY > 50) nav.classList.add('scrolled');
        else nav.classList.remove('scrolled');
    });

    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '30px',
        duration: 1000,
        reset: false
    });

    sr.reveal('.header-title', { origin: 'top' });
    sr.reveal('.content-wrapper', { delay: 300 });
    sr.reveal('.section-img', { interval: 200, scale: 0.95 });
});