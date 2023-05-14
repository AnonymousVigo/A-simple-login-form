"use strict";

// Initialization of the Elements to variables................
let inputs = document.getElementsByClassName("input");
let password = document.getElementById("password");
let eyeLids = document.getElementById("eyeLids");


// the main workout on them.............

for (let input of inputs) {

    // The focus section
    input.addEventListener('focus', (e) => {
        let target = e.target.closest("div");
        target.classList.add("focus");

        // console.log("focused");
    });

    // The unfocus section
    input.addEventListener('blur', (e) => {
        let target = e.target.closest("div");
        target.classList.remove("focus");

        // console.log("unfocused");
    });

    // The label invocation section
    input.addEventListener('keyup', (e) => {
        let target = document.getElementById(e.target.dataset.target);
        target.classList.add("show");

        if (!e.target.value) {
            target.classList.remove("show");

        }

        // console.log("label invoked");
    });

}


// the show and hide password button
eyeLids.addEventListener('click', (e) => {
    let target = document.getElementById(e.target.dataset.target);
    let eyeSlash = document.getElementById(e.target.dataset.eye2);
    let eye = document.getElementById(e.target.dataset.eye);

    eyeSlash.classList.toggle("show");
    eye.classList.toggle("show");
    target.type = "password";
    
    
    if (e.target.checked) {
        target.type = "text";
        target.focus();
    }
    target.focus();

    // console.log(target.__proto__);


});