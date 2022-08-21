// The following people have worked on this file:
// Lei Li
// Mengya Shi

import * as util from './utils.js'

// add products from detail page to shopping cart
function addProducts() {
    let id = util.getQueryVariable("id")
    let selectedProduct = util.getSelectedProdItemById(id);

    //get product name from database based on id
    let productName = selectedProduct.name;

    //get product quantity from input
    let quantity = document.querySelector("#quantity").value;

    let cart = JSON.parse(sessionStorage.getItem('shopping_cart'));
    if (!cart) {
        cart = []
    }
    let inCartProduct = { qty: quantity, proID: id };
    cart.push(inCartProduct);
    console.log(cart);

    sessionStorage.setItem('shopping_cart', JSON.stringify(cart));
    alert("Added " + quantity + "kg of " + productName + " to shopping cart!");
}


//display the items in the shopping cart
function display() {

    //load shopping cart content from session storage
    let cart = sessionStorage.getItem("shopping_cart");

    const cartArea = document.getElementById("cart-area");
    // Removes all items from cart if there's any
    while (cartArea.firstChild) {
        cartArea.removeChild(cartArea.firstChild);
    }
    if (!!cart) {
        // transform the string to json array
        cart = JSON.parse(cart);

        let all = 0;
        // Creates area for each item in shopping cart
        for (let i = 0; i < cart.length; i++) {
            // Creates a new line for each product
            const newLine = document.createElement("div");
            newLine.classList.add("product-wrapper");

            //get id from session storage

            let cartID = cart[i].proID;
            let cartQTY = cart[i].qty;
            console.log(cartID, cartQTY);

            let productItem = util.getSelectedProdItemById(cartID);

            // Adds the image to shopping cart
            const cartImage = document.createElement("img");
            cartImage.classList.add("in-cart-product-photos");
            cartImage.src = productItem.image_location;
            newLine.appendChild(cartImage);

            //Adds the product name to shopping cart
            const cartName = document.createElement("p")
            cartName.classList.add("cartpage-name");
            cartName.innerText = productItem.name;
            newLine.appendChild(cartName);


            // Adds the price to shopping cart
            const cartPrice = document.createElement("p");
            cartPrice.classList.add("cartpage-price");
            cartPrice.innerText = productItem.price_cents / 100;
            newLine.appendChild(cartPrice);

            // Adds the price to shopping cart
            const cartQty = document.createElement("p");
            cartQty.classList.add("cartpage-quantity");
            cartQty.innerText = cartQTY;
            newLine.appendChild(cartQty);

            // Adds the subtotal to shopping cart
            const cartSub = document.createElement("p");
            cartSub.classList.add("subtotal");
            let subtotalsum = ((cartQTY - 0) * (productItem.price_cents / 100));
            cartSub.innerText = subtotalsum;
            newLine.appendChild(cartSub);
            let test = document.querySelector(".title-wrapper");

            //display
            cartArea.appendChild(newLine);

            //add total 
            all += subtotalsum;

        }
        document.getElementById("total").innerText = all;
    }
    else {
        alert("Your cart is empty");
    }

}


//clear shopping cart and inform successful payment
function clearShoppingCart() {
    sessionStorage.removeItem('shopping_cart');
    alert("You've paid successfully! We're preparing your order.");

    //return to menu page after successful payment
    setTimeout(function () {
        window.location = 'menu.php'
    }, 500);
}

//product detail page function
function productDetail(products) {

    let selectedProduct = util.getSelectedProdItemByUrlId(products);
    // console.log(document.getElementById("myImg").src);
    document.getElementById("detailpage-product-name").innerText = selectedProduct.name;
    document.getElementById("price").innerText = selectedProduct.price_cents / 100;
    document.getElementById("detailpage-description").innerText = selectedProduct.description;
    document.getElementById("detailpage-image").src = selectedProduct.image_location;

    //check if organic
    document.querySelector("select[id='organic'] option[value='" + selectedProduct.organic + "']").selected = true;
    document.querySelector("select[id='fruitveg'] option[value='" + selectedProduct.fruitveg + "']").selected = true;
}

// Listen for DOMContentLoaded and call the populateMenu function
document.addEventListener("DOMContentLoaded", () => {

    // force reload all product items from database
    util.loadProductsFromDb();
    // when on the detail page
    if (window.location.href.indexOf("detail.php") >= 0) {
        // Do not give the product range here
        productDetail();

        document.querySelector("#add-to-cart-btn")
            .addEventListener("click", () => {
                addProducts();
            });
    }

    if (window.location.href.indexOf("shopping_cart.php") >= 0) {

        display();
        let btnPayment = document.querySelector("#payment-button");
        if (btnPayment) {
            btnPayment
                .addEventListener("click", () => {
                    clearShoppingCart();
                });
        }

    }
});

