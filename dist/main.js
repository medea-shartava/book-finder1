import { searchBook } from "./api.js";
const form = document.getElementById("bookForm");
const input = document.getElementById("bookInput");
// console.log("Main.ts loaded");
// console.log("Form:", form);
form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const query = input.value;
    const books = await searchBook(query);
    // console.log("Form query:", query);
    // console.log(books);
    const results = document.getElementById("results");
    results.innerHTML = "";
    books.forEach((book) => {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book");
        const title = document.createElement("h3");
        title.textContent = book.title;
        bookDiv.appendChild(title);
        const info = document.createElement("p");
        info.textContent = `${book.author} (${book.year})`;
        bookDiv.appendChild(info);
        if (book.cover) {
            const img = document.createElement("img");
            img.src = book.cover;
            img.alt = book.title;
            bookDiv.appendChild(img);
        }
        results.appendChild(bookDiv);
    });
});
