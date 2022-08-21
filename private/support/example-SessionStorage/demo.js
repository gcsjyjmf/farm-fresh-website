function clear111() {
    sessionStorage.removeItem('shopping_cart');
    alert("Remove all the items !")
}

function randomAdd() {
    let value = Math.floor(Math.random() * 100);
    let shoppingCart = sessionStorage.getItem('shopping_cart');
    if (undefined == shoppingCart) {
        shoppingCart = [value];
    } else {
        console.log(shoppingCart);
        shoppingCart = shoppingCart.split(",");
        shoppingCart.push(value);
    }
    sessionStorage.setItem('shopping_cart', shoppingCart);
    alert("Add item " + value + " to shopping cart!");
}

function display() {
    let container = document.querySelector("#canvasArea");
    let shoppingCart = sessionStorage.getItem('shopping_cart');
    if (undefined !== shoppingCart) {
        container.innerHTML = "";
        shoppingCart = shoppingCart.split(",");
        shoppingCart.forEach(function (entry) {
            container.insertAdjacentHTML(
                'beforeend',
                '<p style="background-color: lime">' + entry + '</p>',
            );
        });
    }
}