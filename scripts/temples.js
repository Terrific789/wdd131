// Get the current year dynamically
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").innerHTML = `&copy; ${currentYear} | `;

// Get the last modified date of the document
const lastModified = document.lastModified;
document.getElementById("lastModified").innerHTML = `Last Modified: ${lastModified}`;


const bar = document.querySelector('#hamburger');
const multiply = document.querySelector('#menu-Bar');
const sidebar = document.querySelector('#mobile');

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
});

multiply.addEventListener('click', () => {
    sidebar.style.display = "none";
    multiply.style.display = "none";
    bar.style.display = "block";
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
