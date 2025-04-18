// You can add interactivity here if you want to enhance the page in the future.
document.addEventListener("DOMContentLoaded", function() {
    console.log("About page loaded successfully!");
});

const bar = document.querySelector("#showMenu");
const multiply = document.querySelector("#hideMenu");
const sidebar = document.querySelector("#mobile-nav");
const header = document.querySelector("header");
let h1 = document.querySelector("h1");

if (window.innerWidth > 740) {
    sidebar.style.display = "none";
    multiply.style.display = "none";
    bar.style.display = "none";
} else {
    sidebar.style.display = "none";
    multiply.style.display = "none";
    bar.style.display = "block";
}

bar.addEventListener('click', () => {
    sidebar.style.display = "block";
    multiply.style.display = "block";
    bar.style.display = "none";
    header.style.flexDirection = "column";
});

multiply.addEventListener('click', () => {
    sidebar.style.display = "none";
    multiply.style.display = "none";
    bar.style.display = "block";
    header.style.flexDirection = "row";
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 740) {
        sidebar.style.display = "none";
        multiply.style.display = "none";
        bar.style.display = "none";
    } else {
        bar.style.display = "block";
    }
});

document.querySelectorAll('#mobile a').forEach(link => {
    link.addEventListener('click', () => {
        sidebar.style.display = "none";
        multiply.style.display = "none";
        bar.style.display = "block";
    });
});