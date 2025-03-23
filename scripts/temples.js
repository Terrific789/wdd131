// Get the current year dynamically
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").innerHTML = `&copy; ${currentYear} | `;

// Get the last modified date of the document
const lastModified = document.lastModified;
document.getElementById("lastModified").innerHTML = `Last Modified: ${lastModified}`;

// function showNavbar() {
//     var menu = document.getElementById("mobile");
//     if (menu.style.display === "flex") {
//         menu.style.display = "none";
//     } else {
//         menu.style.display = "flex";
//     }
// }



function showNavbar() {
    const sidebar = document.querySelector('#mobile');
    sidebar.style.display ="block";
}

function hideNavbar() {
    const hidebar = document.querySelector('#mobile');
    hidebar.style.display ="none";
}