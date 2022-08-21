// The following people have worked on this file: 
// Lei Li
import * as util from './utils.js'

function getRandom2Product() {
    let size = util.productArray.length;
    let randomIndex1 = Math.floor(Math.random() * size);
    let randomIndex2 = 0;
    let exit = false;
    while (!exit) {
        randomIndex2 = Math.floor(Math.random() * size);

        if (randomIndex1 !== randomIndex2) {
            exit = true;
        }
    }

    document.querySelector("#box5>img").src = util.productArray[randomIndex1]["image_location"];
    document.querySelector("#box10>h1").innerHTML = util.productArray[randomIndex1]["name"];
    document.querySelector("#box10>h3").innerHTML = util.productArray[randomIndex1]["description"];
    document.querySelector("#box10>button").addEventListener("click", (ev) => {
        window.location.href = 'detail.php?id=' + util.productArray[randomIndex1]["id"];
    });

    document.querySelector("#box11>img").src = util.productArray[randomIndex2]["image_location"];
    document.querySelector("#box12>h1").innerHTML = util.productArray[randomIndex2]["name"];
    document.querySelector("#box12>h3").innerHTML = util.productArray[randomIndex2]["description"];
    document.querySelector("#box12>button").addEventListener("click", (ev) => {
        window.location.href = 'detail.php?id=' + util.productArray[randomIndex2]["id"];
    });

}

// Listen for DOMContentLoaded and call the populateMenu function
document.addEventListener("DOMContentLoaded", () => {

    // force reload all product items from database
    util.loadProductsFromDb();

    getRandom2Product();

    // document.querySelector("#form1").addEventListener("submit", (ev) => {
    //     if (!register()) {
    //         ev.preventDefault();
    //     }
    // });

    // document.querySelector("#user-login").addEventListener("submit", (ev) => {
    //     if (!log()) {
    //         ev.preventDefault();
    //     }
    // });
});