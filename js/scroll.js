const navbar_scroll = () => {
    if (window.innerWidth > 970) {
        if (2 * window.scrollY < window.innerHeight) {
            navbar.style.opacity = `${1 - (2 * window.scrollY) / window.innerHeight}`;
            navbar.style.display = "flex";
            burger_menu.style.display = "none";
        } else {
            burger_menu.style.opacity = `${(2 * (window.scrollY - window.innerHeight / 2)) / window.innerHeight}`;
            navbar.style.display = "none";
            burger_menu.style.display = "flex";
        }
    } else {
        navbar.style.display = "none";
        burger_menu.style.display = "flex";
    }
};

window.addEventListener("scroll", () => {
    navbar_scroll();
});

navbar_scroll();
