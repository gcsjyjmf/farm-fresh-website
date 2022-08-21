// The following people have worked on this file:
// Lei Li
// Mengya Shi

import * as util from './utils.js'


//adminstrator product deletion page - display product details based on id input
let IDinput = document.getElementById("IDinput");
IDinput.addEventListener("blur", () => {
    if (IDinput.value != undefined) {
        console.log(IDinput.value);
        let id = IDinput.value;
        let selectedProduct = util.getSelectedProdItemById(id);
        if (!selectedProduct) {
            alert("Product (ID = " + id + ") is not exist!");
        } else {
            document.getElementById("detailpage-product-name").innerText = selectedProduct.name;
            document.getElementById("price").innerText = selectedProduct.price_cents / 100;
            document.getElementById("detailpage-description").innerText = selectedProduct.description;
            document.getElementById("detailpage-image").src = selectedProduct.image_location;
            document.querySelector("select[id='organic'] option[value='" + selectedProduct.organic + "']").selected = true;
            document.querySelector("select[id='fruitveg'] option[value='" + selectedProduct.fruitveg + "']").selected = true;
        }
    }
});
// Listen for DOMContentLoaded and call the populateMenu function
document.addEventListener("DOMContentLoaded", () => {
    // force reload all product items from database
    util.loadProductsFromDb();

});