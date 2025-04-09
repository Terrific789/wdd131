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

const templeContainer = document.getElementById('temple-container');
const navItems = document.querySelectorAll('.nav-item');  // Select all nav items
let filterCondition = () => true; // Default: Show all temples


const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName: "Salt Lake Utah",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 253000,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
    },
    {
        templeName: "San Diego California",
        location: "San Diego, California, United States",
        dedicated: "1993, May, 11",
        area: 120000,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/san-diego-california-temple/san-diego-california-temple-9060-main.jpg"
    },
    {
        templeName: "Seattle Washington",
        location: "Seattle, Washington, United States",
        dedicated: "1980, November, 23",
        area: 90000,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/seattle-washington-temple/seattle-washington-temple-55800-main.jpg"
    },
    {
        templeName: "Anchorage Alaska",
        location: "Anchorage, Alaska, United States",   
        dedicated: "1985, May, 31",
        area: 10000,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/anchorage-alaska-temple/anchorage-alaska-temple-57454-main.jpg"
    },
    {
        templeName: "Oquirrh Mountain Utah",
        location: "South Jordan, Utah, United States",
        dedicated: "2009, March, 8",
        area: 100000,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/oquirrh-mountain-utah-temple/oquirrh-mountain-utah-temple-39513-main.jpg"
    },
    {
        templeName: "Fort Lauderdale Florida",
        location: "Fort Lauderdale, Florida, United States",
        dedicated: "2014, January, 18",
        area: 90000,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/fort-lauderdale-florida-temple/fort-lauderdale-florida-temple-3792-main.jpg"
    },
    {
        templeName: "Tucson Arizona",
        location: "Tucson, Arizona, United States",
        dedicated: "2017, December, 10",
        area: 10000,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/tucson-arizona-temple/tucson-arizona-temple-8384-main.jpg"
    },
    {
        templeName: "Colonia Juárez Chihuahua",
        location: "Colonia Juárez, Chihuahua, Mexico",
        dedicated: "2009, June, 28",
        area: 9000,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/colonia-juarez-chihuahua-mexico-temple/colonia-juarez-chihuahua-mexico-temple-1601-main.jpg"
    },
  ];

function displayFilteredTemples(filterCondition) {
    templeContainer.innerHTML = ''; // Clear previous content

    temples.forEach(temple => {
        if (filterCondition(temple)) {
            const templeDiv = document.createElement('div');
            templeDiv.className = 'temple-card';
            templeDiv.innerHTML = `
                <h3>${temple.templeName}</h3>
                <p><strong>Location:</strong> ${temple.location}</p>
                <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                <p><strong>Area:</strong> ${temple.area} sq ft</p>
                <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
            `;
            templeContainer.appendChild(templeDiv);
        }
    });
}

displayFilteredTemples(filterCondition); // Initial display of all temples
// Function to render temples based on the selected filter

function filterTemples(criteria) {
    let filtered;
    switch(criteria) {
        case "all":
            filtered = temples;
            break;
        case "old":
            filtered = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
            break;
        case "new":
            filtered = temples.filter(t => new Date(t.dedicated).getFullYear() >= 2000);
            break;
        case "large":
            filtered = temples.filter(t => t.area >= 90000);
            break;
        case "small":
            filtered = temples.filter(t => t.area < 10000);
            break;
        default:
            filtered = temples;
    }
    displayFilteredTemples(t => filtered.includes(t));
}

// Event listeners for nav items
// document.querySelectorAll(".nav-item").forEach(btn => {
//     btn.addEventListener("click", () => {
//         const filterType = btn.getAttribute("data-filter");
//         filterTemples(filterType);
//     });
// });

document.querySelectorAll(".nav-item a").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const filterType = link.parentElement.getAttribute("data-filter");
        filterTemples(filterType === "home" ? "all" : filterType);
    });
});
