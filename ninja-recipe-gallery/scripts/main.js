// Get the current year dynamically
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").innerHTML = `&copy; ${currentYear} | `;

// Get the last modified date of the document
const lastModified = document.lastModified;
document.getElementById("lastModified").innerHTML = `Last Modified: ${lastModified}`;

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

document.querySelectorAll('#mobile-nav a').forEach(link => {
    link.addEventListener('click', () => {
        sidebar.style.display = "none";
        multiply.style.display = "none";
        bar.style.display = "block";
    });
});


let popularPic = [
    {
        src: "https://www.allrecipes.com/thmb/IlJDn7HtkdNYprJI4fNxtBsO_m4=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/3792006-spicy-sushi-roll-Christina-4x3-1-cc687c743fff4bf3944023aa77cf4115.jpg",
        alt: "Popular Recipe 1",
        category: "Asian",
        title: "Shusi Roll",
        description: "A delicious and spicy tuna sushi roll, perfect for sushi lovers.",
        time: "30 min",
        diffculty: "Easy"
    },
    {
        src: "https://www.allrecipes.com/thmb/tUADv7xC61cm4x8VFrX_mpy6k7A=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/spaghetti-alla-carbonara-the-traditional-italian-recipe-055df3469c6d415e85f355aaff48d309.jpeg",
        alt: "Popular Recipe 2",
        category: "Italian",
        title: "Pasta Carbonara",
        description: "An classic Italian dish made with eggs, cheese, pancetta, and pepper.",
        time: "20 min",
        diffculty: "Medium"
    },
    {
        src: "https://www.allrecipes.com/thmb/fvim1QtUGNk7A5qUECCCYff6hHw=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/70935-taqueria-style-tacos-mfs-3x2-35-9145991a0ef94ceb8be05ae8d6be4f0f.jpg",
        alt: "Popular Recipe 3",
        category: "Mexican",
        title: "Tacos",
        description: "Delicious tacos filled with seasoned meat, fresh vegetables, and salsa.",
        time: "15 min",
        diffculty: "Easy"
    },
    {
        src: "https://www.allrecipes.com/thmb/L431SzfhuN28GtV_AYEczAn5UrY=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/5050373-8aa4bd903d4940c79f94624949bb3741.jpg",
        alt: "Popular Recipe 4",
        category: "Indian",
        title: "Butter Chicken",
        description: "A rich and creamy butter chicken curry, served with naan bread.",
        time: "45 min",
        diffculty: "Medium"
    },
    {
        src: "https://www.allrecipes.com/thmb/c1bzF15BVW1qAYUS24L_U4WwYvw=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/8495603croissant-french-toastKim4x3-7f0f2fbbb5a04bc9a7ee5c5254dc4fc2.jpg",
        alt: "Popular Recipe 5",
        category: "French",
        title: "Croissant",
        description: "Flaky and buttery croissants, perfect for breakfast or a snack.",
        time: "2 hours",
        diffculty: "Hard"
    },
    {
        src: "https://www.allrecipes.com/thmb/jCybSoUaq1JaktYvMPJV4q8Bagw=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/8513919-cheeseburger-wellington-VAT-4x3-15f2bf046d7948e0a78f2d405655ff18.jpg",
        alt: "Popular Recipe 6",
        category: "American",
        title: "Cheeseburger",
        description: "Juicy cheeseburgers topped with lettuce, tomato, and cheese.",
        time: "25 min",
        diffculty: "Easy"
    },
    {
        src: "https://www.allrecipes.com/thmb/MlcBwlp-DfNE3AjRA3QxYITzURk=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/14373-GreekSaladi-mfs-4X3-0354-e8388819cafa4bae843ea433258aa03d.jpg",
        alt: "Popular Recipe 7",
        category: "Mediterranean",
        title: "Greek Salad",
        description: "A refreshing salad with tomatoes, cucumbers, olives, and feta cheese.",
        time: "10 min",
        diffculty: "Easy"
    },
    {
        src: "https://www.allrecipes.com/thmb/SI1TgO_ktp7EI0Op0RLqh49Qwao=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/8149-flourless-chocolate-cake-i-DDMFS-beauty-4x3-f41c0d3b33984f51bffade86e84d3987.jpg",
        alt: "Popular Recipe 8",
        category: "Dessert",
        title: "Chocolate Cake",
        description: "Rich and moist chocolate cake, perfect for any occasion.",
        time: "1 hour",
        diffculty: "Medium"
    }
];

let AsianPic = [
    {
        src: "https://www.allrecipes.com/thmb/SHHJ2qju5F-RbI1tfHAH_QP2mnQ=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/3987640-f11078a582654cb5b3a32bf9aad3ff27.jpg",
        alt: "Asian Recipe 1",
        category: "Asian",
        title: "Sushi",
        description: "A delicious sushi roll with fresh fish and vegetables.",
        time: "30 min",
        diffculty: "Medium"
    },
    {
        src: "https://www.allrecipes.com/thmb/XV91piTpZEx8u6m1feUZ9UDV6QQ=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/244577ramen-chicken-noodle-soupfabeveryday4x3-fb31d69085204cf8ac83b99c5e75f900.jpg",
        alt: "Asian Recipe 2",
        category: "Asian",
        title: "Ramen",
        description: "A hearty bowl of ramen noodles in a savory broth.",
        time: "45 min",
        diffculty: "Medium"
    },
    {
        src: "https://www.allrecipes.com/thmb/S5uMpDAmXdqi3xh_H4cMJhnX2bc=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/14305-392a0b62901c49528d5105f6687e9079.jpg",
        alt: "Asian Recipe 3",
        category: "Asian",
        title: "Spring Rolls",
        description: "Crispy spring rolls filled with vegetables and shrimp.",
        time: "20 min",
        diffculty: "Easy"
    },
    {
        src: "https://www.allrecipes.com/thmb/Br1NP7of2NBaWpMDLGwntGsDcnQ=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/459698-17f5fc72df284f07ac29f81d8b531890.jpg",
        alt: "Asian Recipe 4",
        category: "Asian",
        title: "Pad Thai",
        description: "A classic Thai stir-fried noodle dish with shrimp and peanuts.",
        time: "30 min",
        diffculty: "Medium"
    },
    {
        src: "https://www.allrecipes.com/thmb/dBAy-r7tf7gsbYvQIlMmUsMyOD4=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/14759-pork-dumplings-DDMFS-4x3-f87c9459ec73475f9dcab4cc651c46d3.jpg",
        alt: "Asian Recipe 5",
        category: "Asian",
        title: "Dumplings",
        description: "Steamed dumplings filled with pork and vegetables.",
        time: "40 min",
        diffculty: "Medium"
    },
    {
        src: "https://www.allrecipes.com/thmb/OalaE671hzLHC0Qmh0di5eYQZ7o=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/88438RamonaCruz-Peters_TeriyakiChickenWings_4x3-88b0e560a1e34379a352bc885493b688.jpg",
        alt: "Asian Recipe 6",
        category: "Asian",
        title: "Teriyaki Chicken",
        description: "Grilled chicken glazed with a sweet teriyaki sauce.",
        time: "25 min",
        diffculty: "Easy"
    },
    {
        src: "https://www.allrecipes.com/thmb/Gdm9XdfU6i-bNTbPCeJR4rkgCks=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/What-Is-Bulgur-Wheat-1x1-1-b5b93c13e8bf48c79e8c3485f3644f05.jpg",
        alt: "Asian Recipe 7",
        category: "Asian",
        title: "Bulgur Wheat Salad",
        description: "A refreshing salad made with bulgur wheat, vegetables, and herbs.",
        time: "15 min",
        diffculty: "Easy"
    },
    {
        src: "https://www.allrecipes.com/thmb/C3KwMLNoCKT22hYHi1JNKg1rnRs=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/AR-150313-thai-sweet-sticky-rice-with-mango-khao-neeo-mamuang-ddmfs-4x3-hero-0da7a9b26cce4d07aea44f2f2b6abd95.jpg",
        alt: "Asian Recipe 8",
        category: "Asian",
        title: "Mango Sticky Rice",
        description: "A traditional Thai dessert made with sticky rice and fresh mango.",
        time: "30 min",
        diffculty: "Medium"
    }
];

let AfricanPic = [
    {
        src: "https://www.allrecipes.com/thmb/w1JmxWuAiqpExEhQufg_jrM_7yQ=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/7499757JollofriceChefJohn4x3-d601da10d7e845d1ad4c8656a5b87ed4.jpg",
        alt: "African Recipe 1",
        category: "African",
        title: "Jollof Rice",
        description: "A flavorful one-pot rice dish with tomatoes and spices.",
        time: "45 min",
        diffculty: "Medium"
    },
    {
        src: "https://www.allrecipes.com/thmb/WO7pI_S4NVvmKythtn_Hvzm_aF0=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/image-1-7-2000-36b436e49fa649089136d93d31731bce.jpg",
        alt: "African Recipe 2",
        category: "African",
        title: "Bunny Chow",
        description: "A South African street food dish consisting of a hollowed-out loaf of bread filled with curry.",
        time: "60 min",
        diffculty: "Medium"
    },
    {
        src: "https://www.allrecipes.com/thmb/s4jCMByUu4FLmCKDYlH5s77UGuE=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/ChickenTagine_007-2000-d8c475500923438584e5e5398bd41225.jpg",
        alt: "African Recipe 3",
        category: "African",
        title: "Tagine",
        description: "A slow-cooked stew from Morocco, typically made with meat and vegetables.",
        time: "90 min",
        diffculty: "Hard"
    },
    {
        src: "https://www.allrecipes.com/thmb/IDUoB6UIxiUAIl4SMX_CNxiknPA=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/12978-Egusi-Soup-ddmfs-026-4x3-1-e662479f824b4b54bdc25165ad41c6b6.jpg",
        alt: "African Recipe 4",
        category: "African",
        title: "Egusi Soup",
        description: "A thick soup made with ground melon seeds, often served with fufu.",
        time: "1 hour",
        diffculty: "Medium"
    },
    {
        src: "https://www.allrecipes.com/thmb/nynyc7-vVjhMNf0-IylO9kpwOlo=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/3428959-12fbdce36ed04b59bf44e17e8f9451cc.jpg",
        alt: "African Recipe 5",
        category: "African",
        title: "Injera",
        description: "A sourdough flatbread from Ethiopia, often served with stews.",
        time: "2 days",
        diffculty: "Medium"
    },
    {
        src: "https://www.allrecipes.com/thmb/sryR3AAFiZrh20w4Iuho6kVhmhM=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/6294817-piri-piri-chicken-Buckwheat-Queen-4x3-1-d98de2cb578b4a3e87921f2a2b9f46ea.jpg",
        alt: "African Recipe 6",
        category: "African",
        title: "Piri Piri Chicken",
        description: "Grilled chicken marinated in a spicy piri piri sauce.",
        time: "30 min",
        diffculty: "Easy"
    },
    {
        src: "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_1220,h_915/k%2FPhoto%2FRecipes%2F2021-10-akara-reshoot%2F2021-10-12_ATK8134",
        alt: "African Recipe 7",
        category: "African",
        title: "Bean cake",
        description: "A delicious and crispy bean cake, perfect for snacking.",
        time: "20 min",
        diffculty: "Easy"
    }
]

let AmericanPic = [
    {
        src: "https://www.allrecipes.com/thmb/wGbanNQyhhKZwOQUDGu4qRhKWi4=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/24849-oven-baked-bbq-ribs-ddmfs-beauty-4x3-BG-3106-ce8abf657bd741f5b9c5ca5f43a83f69.jpg",
        alt: "American Recipe 1",
        category: "American",
        title: "BBQ Ribs",
        description: "Tender and juicy BBQ ribs, perfect for summer cookouts.",
        time: "3 hours",
        diffculty: "Hard"
    },
    {
        src: "https://www.allrecipes.com/thmb/M--rwR9b_YsxbcVi-IAA_E69Z8Y=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/171001-LobsterMacandCheese-DDMFS-103-4x3-05642a7eac714b12afa55c4981708165.jpg",
        alt: "American Recipe 2",
        category: "American",
        title: "Mac and Cheese",
        description: "Creamy and cheesy macaroni and cheese, a comfort food classic.",
        time: "30 min",
        diffculty: "Easy"
    },
    {
        src: "https://www.allrecipes.com/thmb/gNF2Buk27ojMHZNGyqTp4ZanHNg=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/13078-New-England-Clam-Chowder-DDMFS-3X4-0560-c330d161cc3f4b34bce8d921e3f649fb.jpg",
        alt: "American Recipe 3",
        category: "American",
        title: "Clam Chowder",
        description: "A creamy soup made with clams, potatoes, and onions.",
        time: "45 min",
        diffculty: "Medium"
    },
    {
        src: "https://www.allrecipes.com/thmb/WCli9FidVqTC-Gb0Ht0y_T3SN2Y=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/8485791-a668c77f982d42ef8ca750ae59eb3e6f.jpg",
        alt: "American Recipe 4",
        category: "American",
        title: "Buffalo Wings",
        description: "Spicy chicken wings tossed in buffalo sauce, served with blue cheese dressing.",
        time: "1 hour",
        diffculty: "Medium"
    },
    {
        src: "https://www.allrecipes.com/thmb/2xB8fftbYLFwwyc_vl24DpaEklY=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/236064-Our-Best-Cheesecake-ddmfs-103194-1x1-1-ec309c9d76884e69a0b637dd9ef14c5d.jpg",
        alt: "American Recipe 5",
        category: "American",
        title: "Cheesecake",
        description: "Rich and creamy cheesecake topped with fresh berries.",
        time: "4 hours",
        diffculty: "Hard"
    },
    {
        src: "https://www.allrecipes.com/thmb/iPpetAxobWDm4EOS9e7a3mgCcIg=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/5064891-686ef9a199514efab75aefed61127d25.jpg",
        alt: "American Recipe 6",
        category: "American",
        title: "Cornbread",
        description: "Sweet and moist cornbread, perfect for pairing with chili.",
        time: "30 min",
        diffculty: "Easy"
    }
]

const recipes = [
    popularPic,
    AsianPic,
    AfricanPic,
    AmericanPic

];
console.log(recipes);

const popularRecipe = document.querySelector(".popularRecipe");
const asianRecipe = document.querySelector(".asianRecipe");
const africanRecipe = document.querySelector(".africanRecipe");
const americanRecipe = document.querySelector(".americanRecipe");
const filterButtons = document.querySelectorAll('.filter');
const recipeSections = document.querySelectorAll('.recipeContainers');

popularPic.forEach((pic) => {
    const recipeCard = document.createElement("div");
    recipeCard.classList.add("recipe-card");
    recipeCard.innerHTML = `
        <img src="${pic.src}" alt="${pic.alt}" loading="lazy">
        <div id="recipe-content">
            <h4>${pic.category}</h4>
            <h3>${pic.title}</h3>
            <p>${pic.description}</p>
            <div class="down">
                <p>Time: ${pic.time}</p>
                <p>Difficulty: ${pic.diffculty}</p>
            </div>
        </div>
    `;

    popularRecipe.appendChild(recipeCard);
});

AsianPic.forEach((pic) => {
    const recipeCard = document.createElement("div");
    recipeCard.classList.add("recipe-card");
    recipeCard.innerHTML = `
        <img src="${pic.src}" alt="${pic.alt}" loading="lazy">
        <div id="recipe-content">
            <h4>${pic.category}</h4>
            <h3>${pic.title}</h3>
            <p>${pic.description}</p>
            <div class="down">
                <p>Time: ${pic.time}</p>
                <p>Difficulty: ${pic.diffculty}</p>
            </div>
        </div>
    `;
    asianRecipe.appendChild(recipeCard);
});

AfricanPic.forEach((pic) => {
    const recipeCard = document.createElement("div");
    recipeCard.classList.add("recipe-card");
    recipeCard.innerHTML = `
        <img src="${pic.src}" alt="${pic.alt}" loading="lazy">
        <div id="recipe-content">
            <h4>${pic.category}</h4>
            <h3>${pic.title}</h3>
            <p>${pic.description}</p>
            <div class="down">
                <p>Time: ${pic.time}</p>
                <p>Difficulty: ${pic.diffculty}</p>
            </div>
        </div>
    `;
    africanRecipe.appendChild(recipeCard);
});

AmericanPic.forEach((pic) => {
    const recipeCard = document.createElement("div");
    recipeCard.classList.add("recipe-card");
    recipeCard.innerHTML = `
        <img src="${pic.src}" alt="${pic.alt}" loading="lazy">
        <div id="recipe-content">
            <h4>${pic.category}</h4>
            <h3>${pic.title}</h3>
            <p>${pic.description}</p>
            <div class="down">
                <p>Time: ${pic.time}</p>
                <p>Difficulty: ${pic.diffculty}</p>
            </div>
        </div>
    `;
    americanRecipe.appendChild(recipeCard);
});

// Add event listeners to the recipe cards to show more details on click
const recipeCards = document.querySelectorAll(".recipe-card");
recipeCards.forEach((card) => {
    card.addEventListener("click", () => {
        const title = card.querySelector("h3").innerText;
        const description = card.querySelector("p").innerText;
        alert(`Title: ${title}\nDescription: ${description}`);
    });
});

const loadMoreBtn = document.getElementById('load-more-btn');
const loadMoreContainer = document.getElementById('load-more-container');

// Event listener for button click
loadMoreBtn.addEventListener('click', function () {
    // Show hidden categories
    africanSection.classList.remove('hidden');
    americanSection.classList.remove('hidden');

    // Hide the load more button
    loadMoreContainer.style.display = 'none';
});

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

      const category = btn.getAttribute('data-category');

      recipeSections.forEach(section => {
        if (category === 'all') {
          section.classList.remove('hidden');
          loadMoreBtn.style.display = 'none';
        } 
        else {
          if (section.classList.contains(category)) {
            section.classList.remove('hidden');
          } else {
            section.classList.add('hidden');
          }
        }
      });
    });
  });
