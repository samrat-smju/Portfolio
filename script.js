// Add a scroll animation effect for sections when they are in view
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            section.style.animation = "fadeIn 1s ease-in-out";
        }
    });
});
