// The following people have worked on this file: 
// Justin Mountain

import * as util from './utils.js'

function populateMenu(products) {

  const productArea = document.getElementById("product-area");

  // Removes all children from Product Area
  while (productArea.firstChild) {
    productArea.removeChild(productArea.firstChild);
  }

  // Creates card for each item in object
  for (let i = 0; i < products.length; i++) {
    // Creates a new product card
    let prodItem = products[i];
    const newCard = document.createElement("div");
    newCard.classList.add("product-card");
    let linkString = "detail.php?id=" + prodItem.id;
    let linkElement = document.createElement('a');
    linkElement.setAttribute('href', linkString);
    linkElement.appendChild(newCard);

    // Creates a new card top for image and price
    const newCardTop = document.createElement("div");
    newCardTop.classList.add("card-top");
    newCard.appendChild(newCardTop);

    // Adds the image to the card top
    const newCardImage = document.createElement("img");
    newCardImage.classList.add("product-img");
    newCardImage.src = prodItem.image_location;
    newCardTop.appendChild(newCardImage);

    // Adds the price to the card top
    const newCardPrice = document.createElement("div");
    newCardPrice.classList.add("product-price");
    let priceString = "$" + prodItem.price_cents / 100 + "/kg"
    newCardPrice.innerText = priceString;
    newCardTop.appendChild(newCardPrice);

    // Adds the product name to the card
    const newCardName = document.createElement("div")

    newCardName.classList.add("product-name");
    newCardName.innerText = prodItem.name;
    newCard.appendChild(newCardName);

    // Adds the product description to the card
    const newCardDescription = document.createElement("div");
    newCardDescription.classList.add("product-desc");
    newCardDescription.innerText = prodItem.description;
    newCard.appendChild(newCardDescription);

    // Appends the card to the menu area
    productArea.appendChild(linkElement);
  }

  // Create 3 hidden cards to fix bottom row of product-area
  const blankCard = document.createElement("div");
  blankCard.classList.add("hidden-card");
  productArea.appendChild(blankCard);

  const blankCard2 = document.createElement("div");
  blankCard2.classList.add("hidden-card");
  productArea.appendChild(blankCard2);

  const blankCard3 = document.createElement("div");
  blankCard3.classList.add("hidden-card");
  productArea.appendChild(blankCard3);

}

let displayItems = [];
// index 0: organic
// index 1: fruitveg
// index 2: search key words
let currentGlobalSearchConditions = [-1, -1, ""];

// Listen for DOMContentLoaded and call the populateMenu function
document.addEventListener("DOMContentLoaded", () => {

  // force reload all product items from database
  util.loadProductsFromDb();
  populateMenu(util.productArray);

  displayItems = util.productArray;

  document.querySelector("#all").addEventListener("click", () => {
    currentGlobalSearchConditions[0] = -1;
    currentGlobalSearchConditions[1] = -1
    showFilteredItems();
  });

  document.querySelector("#org-veg").addEventListener("click", () => {
    currentGlobalSearchConditions[0] = 1;
    currentGlobalSearchConditions[1] = 1
    showFilteredItems();
  });

  document.querySelector("#reg-veg").addEventListener("click", () => {
    currentGlobalSearchConditions[0] = 0;
    currentGlobalSearchConditions[1] = 1;
    showFilteredItems();
  });

  document.querySelector("#org-fruit").addEventListener("click", () => {
    currentGlobalSearchConditions[0] = 1;
    currentGlobalSearchConditions[1] = 0;
    showFilteredItems();
  });

  document.querySelector("#reg-fruit").addEventListener("click", () => {
    currentGlobalSearchConditions[0] = 0;
    currentGlobalSearchConditions[1] = 0;
    showFilteredItems();
  });

  document.querySelector("#search-bar").addEventListener("input", (ev) => {
    currentGlobalSearchConditions[2] = ev.target.value;
    showFilteredItems();
  });
});

function showFilteredItems() {
  console.log(currentGlobalSearchConditions)
  displayItems = util.filter(currentGlobalSearchConditions[0], currentGlobalSearchConditions[1], currentGlobalSearchConditions[2]);
  populateMenu(displayItems);
}


