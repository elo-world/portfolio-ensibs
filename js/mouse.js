projects_link.addEventListener("mousemove", (e) => {
    projects_preview.style.transform = `scaleY(1) translate(${e.layerX - projects_preview.offsetWidth / 2}px, ${e.layerY - projects_preview.offsetHeight / 2}px)`;
});

for (let i = 0; i < projects_list.length; i++) {
    projects_list[i].addEventListener("mousemove", () => {
        for (var k = 0; k < projects_list.length; k++) {
            if (k != i) {
                projects_images[k].style.opacity = "0";
            } else {
                projects_images[i].style.opacity = "1";
            }
        }
    });
}
