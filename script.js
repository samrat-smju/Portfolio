document.addEventListener("DOMContentLoaded", () => {
    const preLoader = document.querySelector(".preloader");

    window.addEventListener("load", () => {
        if (preLoader) {
            preLoader.style.display = "none";
        }
    });
});
