document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Merci pour votre message ! Nous vous contacterons bientôt.');
        });
    }

    // Fade-in animation for sections
    const sections = document.querySelectorAll('#pourquoi-chine, #about, #services, #programmes, #temoignages, #tarifs, #contact-cta, #contact');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});
