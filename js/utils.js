// The following people have worked on this file:
// Lei Li

/**
 * An object represent the product
 */
export class Product {
    /**
     * constructor
     * @param id product id
     * @param name product name
     * @param fruitveg category, value range 0: fruit; 1: veg
     * @param description description
     * @param price_cents price in cents
     * @param image_location image location
     * @param organic organic, value range 0: not organic; 1: yes
     * @param invalid flag of invalid record, range value 0: valid; 1: invalid
     */
    constructor(id, name, fruitveg, description, price_cents, image_location, organic, invalid) {
        // Product Id
        this.id = id;
        // Product Name
        this.name = name;
        // category
        this.fruitveg = fruitveg;
        // prince in cents
        this.price_cents = price_cents;
        // image location
        this.image_location = image_location;
        // description
        this.description = description;
        // organic
        this.organic = organic;
        // invalid flag
        this.invalid = invalid;
    }
}

export class User {
    /**
     * constructor
     * @param id product id
     * @param user_name user name
     * @param first_name first name
     * @param last_name last name
     * @param password password
     * @param admin_group admin group
     * @param invalid flag of invalid record, range value 0: valid; 1: invalid
     */
    constructor(id, user_name, first_name, last_name, password, admin_group, invalid) {
        // Product Id
        this.id = id;
        // user_name
        this.user_name = user_name;
        // first_name
        this.first_name = first_name;
        // last_name
        this.last_name = last_name;
        // image location
        this.password = password;
        // admin_group
        this.admin_group = admin_group;
        // invalid flag
        this.invalid = invalid;
    }
}

/**
 * Get product item from global cache array by using request parameter
 *  @param products a given product range
 * @returns {*}
 */
export function getSelectedProdItemByUrlId(products) {
    //get ID from current url
    let id = getQueryVariable("id")
    return getSelectedProdItemById(id, products);
}

/**
 * Get product item from global cache array
 * @param id product item id
 * @param products a given product range
 * @returns {*}
 */
export function getSelectedProdItemById(id, products) {
    let selectedProduct;
    if (!products) {
        products = productArray;
    }
    for (let i = 0; i < products.length; i++) {
        if (products[i].id == id) {
            selectedProduct = products[i];
            // selectedProduct = Object.setPrototypeOf(products[i], Product.prototype)
            break;
        }
    }
    console.log(selectedProduct)
    return selectedProduct;
}

/**
 * An array will contain all the products we use in the store.
 *
 * @type {*[Product]}
 */
export var productArray = [];

/**
 * Get the specific key's value from url
 * @param variable
 * @returns {string|boolean}
 */
export function getQueryVariable(variable) {

    const query = window.location.search.substring(1);
    const vars = query.split("&");
    for (let i = 0; i < vars.length; i++) {
        // split each parameter with "=" to key and value
        const pair = vars[i].split("=");
        // if key is match, return value
        if (pair[0] === variable) {
            return pair[1];
        }
    }
    return false;
}

export function filter(organic, fruitveg, name_like) {

    let selectedProducts = [];

    for (let i = 0; i < productArray.length; i++) {
        let item = productArray[i];
        let append = true;
        if (-1 != fruitveg && item.fruitveg != fruitveg) {
            append = false;
        }
        if (-1 != organic && item.organic != organic) {
            append = false;
        }
        if ("" != name_like && item.name.toLowerCase().indexOf(name_like) == -1) {
            append = false;
        }

        if (append) {
            selectedProducts.push(item);
        }
    }
    return selectedProducts;
}

/**
 * Communicate a fixed php page to grab all product data
 */
export function loadProductsFromDb() {
    let getUrl = window.location;
    let baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
    let url = baseUrl + "/private/grab_products_mysql.php";
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        let productArrayDb;
        // 4 for request finished and 200 for OK
        if (this.readyState === 4 && this.status === 200) {
            console.log("responseText=>" + this.responseText)
            //JSON.parse() Takes a JSON string and parses it to a Javascript object
            productArrayDb = JSON.parse(this.responseText);
            let index = 0;
            for (const dbElement of productArrayDb) {
                // fill the object's field automatically
                productArray[index++] = Object.setPrototypeOf(dbElement, Product.prototype)
            }
            // for debug
            // console.log(productArray)
        }
    };
    // set to SYNC to block page load, in order to render page after grabbing data
    xmlhttp.open("POST", url, false);
    xmlhttp.send();
}

/**
 * Interactive with database
 * @param feature value range is "INSERT, VERIFY_USERNAME, VERIFY_USER"
 * @param user
 */
export function operateUserFromDb(feature, user) {
    let getUrl = window.location;
    let baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
    let url = baseUrl + "/private/grab_user_mysql.php";
    let target;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        let userArrayDb;
        // 4 for request finished and 200 for OK
        if (this.readyState === 4 && this.status === 200) {
            // console.log(this.responseText)
            if (this.responseText != "") {
                //JSON.parse() Takes a JSON string and parses it to a Javascript object
                userArrayDb = JSON.parse(this.responseText);
                for (const dbElement of userArrayDb) {
                    // console.log(dbElement);
                    // fill the object's field automatically
                    target = Object.setPrototypeOf(dbElement, User.prototype);
                    // console.log(target);
                    // only use the first.
                    break;
                }
            }
        }
    };
    // set to SYNC to block page load, in order to render page after grabbing data
    xmlhttp.open("POST", url, false);
    let formData = new FormData();
    formData.append("feature", feature);
    formData.append("user_name", user.user_name);
    formData.append("first_name", user.first_name);
    formData.append("last_name", user.last_name);
    formData.append("password", user.password);
    xmlhttp.send(formData);
    return target;
}