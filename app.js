document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('nav-bar').classList.toggle('active');
});





document.addEventListener('DOMContentLoaded', () => {
    const homeLink = document.getElementById('home-link');
    const contactLink = document.getElementById('contact-link');
    
    homeLink.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('home-link').scrollIntoView({ behavior: 'smooth' });
    });

    contactLink.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('Contact-link').scrollIntoView({ behavior: 'smooth' });
    });
});
