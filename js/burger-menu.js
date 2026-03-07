burger_menu.addEventListener("click", () => {
    menu.style.transform = "translateX(0)";
});

exit_menu.addEventListener("click", () => {
    menu.style.transform = "translateX(100%)";
});

for (let i = 0; i < menu_buttons.length; i++) {
    menu_buttons[i].addEventListener("click", () => {
        html.style.scrollBehavior = "auto";
        menu.style.transform = "translateX(100%)";
        setTimeout(() => {
            html.style.scrollBehavior = "smooth";
        }, 500);
    });
}
