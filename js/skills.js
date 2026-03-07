for (let i = 0; i < softwares_images.length; i++) {
    softwares_images[i].addEventListener("click", (e) => {
        softwares_text.textContent = e.target.alt;
    });
}
