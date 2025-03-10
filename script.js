document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");
    const roleText = document.querySelector(".role-animation");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // Dynamic Text Animation
    const roles = ["UX Designer", "Front-End Developer", "Canva Expert", "Logo Designer"];
    let index = 0;

    function changeRole() {
        roleText.textContent = roles[index];
        index = (index + 1) % roles.length;
    }

    setInterval(changeRole, 2000);
});
