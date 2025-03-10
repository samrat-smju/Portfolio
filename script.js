document.addEventListener("DOMContentLoaded", () => {
    const preLoader = document.querySelector(".preloader");
    const profile = document.querySelector(".profile");

    window.addEventListener("load", () => {
        if (preLoader) preLoader.style.display = "none";
        if (profile) profile.style.animation = "profilezoom 1s ease-out";
    });
});
