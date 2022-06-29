const preloader = document.querySelector(".preloader");
const video = document.querySelector(".video");
const button = document.querySelector(".btn-container");

document.addEventListener("DOMContentLoaded", function() {
    preloader.classList.add("hide-preloader");
});

button.addEventListener("click", function() {
    if (!button.classList.contains("slide")) {
        button.classList.add("slide");
        video.pause();
    } else {
        button.classList.remove("slide");
        video.play();
    }
});