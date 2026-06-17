function navLogic() {
    const primaryNav = document.querySelector('.primary-navigation');
    const navToggle = document.querySelector('.mobile-nav-toggle');

    navToggle.addEventListener("click", () => {
        const visibility = primaryNav.getAttribute("data-visible");

        if (visibility === "false") {
            primaryNav.setAttribute('data-visible', "true");
            navToggle.setAttribute('aria-expanded', "true");
        } else {
            primaryNav.setAttribute('data-visible', "false");
            navToggle.setAttribute('aria-expanded', "false");
        }
    });
}

function carouselLogic() {
    const slides = document.querySelectorAll(".slide");

    let current = 0;

    setInterval(() => {
        slides[current].classList.remove("active");

        current = (current + 1) % slides.length;

        slides[current].classList.add("active");
    }, 3000);
}

document.addEventListener("DOMContentLoaded", () => {
    navLogic();
    carouselLogic();
});