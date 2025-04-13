const currentYear = new Date().getFullYear();
document.getElementById("currentyear").innerHTML = `&copy; ${currentYear} | `;

const lastModified = document.lastModified;
document.getElementById("lastModified").innerHTML = `Last Modified: ${lastModified}`;

const items = document.querySelector('#product')

const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ]

// Function to populate select options
function populateProductOptions() {
  const select = document.getElementById("product");

  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    select.appendChild(option);
  });
}


// Run when page load
document.addEventListener("DOMContentLoaded", () => {
  populateProductOptions();
})
  
//   document.getElementById("reviewForm").addEventListener("submit", (e) => {
//     e.preventDefault(); 
//     alert("Thanks for your review! 🎉");
//   });
// });

const load = document.querySelector('#submit');
load.addEventListener('click', function() {
  window.location = 'review.html';
})
