const form = document.getElementById("bookForm") as HTMLFormElement;
const input = document.getElementById("bookInput") as HTMLInputElement;

console.log("Main.ts loaded");
console.log("Form:", form);

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const query = input.value;
    console.log("Form query:", query);
})