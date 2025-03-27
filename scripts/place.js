// Get the current year dynamically
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").innerHTML = `&copy; ${currentYear} | `;

// Get the last modified date of the document
const lastModified = document.lastModified;
document.getElementById("lastModified").innerHTML = `Last Modified: ${lastModified}`;

function calculateWindChill(tempC, windSpeedKmh) {
    return (13.12 + 0.6215 * tempC - 11.37 * Math.pow(windSpeedKmh, 0.16) + 0.3965 * tempC * Math.pow(windSpeedKmh, 0.16)).toFixed(1);
}

function updateWindChill() {
    const temp = parseFloat(document.querySelector('#temp').textContent); // Convert to number
    const windSpeed = parseFloat(document.querySelector('#windSpeed').textContent); // Convert to number
    let windChillElement = document.getElementById("windChill");

    // Check if conditions are met for wind chill calculation
    if (temp <= 10 && windSpeed > 4.8) {
        windChillElement.textContent = `${calculateWindChill(temp, windSpeed)} °C`;
    } else {
        windChillElement.textContent = "N/A";
    }
}

document.addEventListener("DOMContentLoaded", updateWindChill);