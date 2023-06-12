const searchbar = document.querySelectorAll(".search")[0];
const magnifying_glass = document.querySelectorAll(".fa-magnifying-glass")[0];
const links = document.querySelectorAll(".navbar-links")[0];
const bars = document.querySelectorAll(".fa-bars-staggered")[0];
magnifying_glass.addEventListener("click", () => {
    searchbar.classList.toggle("active");
});
bars.addEventListener("click", () => {
    links.classList.toggle("active");
    bars.classList.toggle("fa-xmark");
});
links.addEventListener("click", () => {
    links.classList.toggle("active");
    bars.classList.toggle("fa-xmark");
});