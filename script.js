// Script for animations (optional: using GSAP or similar library for advanced effects)
// Example: simple scroll-to animation effect using vanilla JavaScript

document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', function () {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;
            
            if (sectionTop < screenHeight * 0.8) {
                section.classList.add('animate__fadeInUp');
            }
        });
    });
});
