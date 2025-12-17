"use strict";
const form = document.getElementById("bookForm");
const input = document.getElementById("bookInput");
console.log("Main.ts loaded");
console.log("Form:", form);
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const query = input.value;
    console.log("Form query:", query);
});
