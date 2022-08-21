// The following people have worked on this file:
// Fei Ma

import * as util from './utils.js'

function log() {
    let user = document.getElementById("emdress").value;
    let pas = document.getElementById("psword").value;
    let targetUser = util.operateUserFromDb("VERIFY_USER", { user_name: user, password: pas });
    if (!targetUser) {
        if (document.getElementById("p8")) {
            p8.remove();
        }
        let para = document.createElement("p");
        let node = document.createTextNode("User does not exist or password is incorrect!");
        para.appendChild(node);
        let element = document.getElementById("boxc");
        element.appendChild(para);
        para.setAttribute("id", "p8");
        document.getElementById("p8").style.color = "red";

    } else {
        alert("success!! let's go to the menu page")
        return true;
    }
    return false;
}

function register() {

    // grab data from page
    let fname = document.getElementById("fname");
    let lname = document.getElementById("lname");
    let usname = document.getElementById("usname");
    let passw = document.getElementById("psword1");

    // form validation
    if (!validate()) {
        return false;
    } else {
        // verify user name
        let targetUser = util.operateUserFromDb("VERIFY_USERNAME", { user_name: usname.value });
        console.log(targetUser)
        // if user name is not exist in the database
        if (!targetUser) {
            // add new user to database
            targetUser = util.operateUserFromDb("INSERT", {
                user_name: usname.value,
                first_name: fname.value,
                last_name: lname.value,
                password: passw.value
            });

            // Determine if add user successful
            if (targetUser) {
                alert("success!! please sign in now")
                return true;
            } else {
                let errAddUser = document.getElementById("err-add-user");
                if (errAddUser) {
                    errAddUser.remove();
                }
                let para = document.createElement("p");
                let node = document.createTextNode("Failed to add new user!");
                para.appendChild(node);
                let element = document.getElementById("pp");
                element.insertAdjacentElement('afterend', para);
                para.setAttribute("id", "err-add-user");
                para.style.color = "red";
                return false;
            }
        } else {
            if (document.getElementById("p8")) {
                p8.remove();
            }
            let para = document.createElement("p");
            let node = document.createTextNode("the same name existed already");
            para.appendChild(node);
            let element = document.getElementById("boxa");
            element.appendChild(para);
            para.setAttribute("id", "p8");
            document.getElementById("p8").style.color = "red";
            return false;
        }
    }
}


function validate() {
    email();
    password();
    agree();
    if (email() && password() && agree()) {
        return true;
    } else {
        return false;
    }
}

function email() {
    if (document.getElementById("p1")) {
        p1.remove();
    }
    let myform = document.getElementById("form1");
    let emailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (!emailReg.test(myform.usname.value)) {
        let para = document.createElement("p");
        let node = document.createTextNode("please input a valid email structure (xyx@xyz.xyz)");
        para.appendChild(node);
        let element = document.getElementById("boxa");
        element.appendChild(para);
        para.setAttribute("id", "p1");
        document.getElementById("p1").style.color = "red";
        return false;
    } else {
        return true;
    }
}

function password() {
    if (document.getElementById("p2")) {
        p2.remove();
    }
    let myform = document.getElementById("form1");
    let pasReg = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (pasReg.test(myform.psword1.value)) {
        return true;
    } else {
        let para = document.createElement("p");
        let node = document.createTextNode("password is invalid");
        para.appendChild(node);
        let element = document.getElementById("boxb");
        element.appendChild(para);
        para.setAttribute("id", "p2");
        document.getElementById("p2").style.color = "red";
        return false;
    }
}

function agree() {
    if (document.getElementById("p9")) {
        p9.remove();
    }
    let myform = document.getElementById("form1");
    if (myform.signin.checked == true) {
        return true;
    } else {
        let para = document.createElement("p");
        let node = document.createTextNode("please select agree");
        para.appendChild(node);
        let element = document.getElementById("boxe");
        element.appendChild(para);
        para.setAttribute("id", "p9");
        document.getElementById("p9").style.color = "red";
        return false;
    }
}

// Listen for DOMContentLoaded and call the populateMenu function
document.addEventListener("DOMContentLoaded", () => {

    if (window.location.href.indexOf("join.php") >= 0) {
        document.querySelector("#form1").addEventListener("submit", (ev) => {
            if (!register()) {
                ev.preventDefault();
            }
        });
    }

    if (window.location.href.indexOf("signin.php") >= 0) {
        document.querySelector("#user-login").addEventListener("submit", (ev) => {
            if (!log()) {
                ev.preventDefault();
            }
        });
    }
});