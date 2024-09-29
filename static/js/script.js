document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add active class to navigation items when scrolling
    window.addEventListener('scroll', function() {
        let scrollPosition = window.scrollY;

        document.querySelectorAll('section').forEach(section => {
            if (section.offsetTop <= scrollPosition + 150) {
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === section.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
});
