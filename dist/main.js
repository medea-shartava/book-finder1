var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { searchBook } from "./api.js";
const form = document.getElementById("bookForm");
const input = document.getElementById("bookInput");
// console.log("Main.ts loaded");
// console.log("Form:", form);
form.addEventListener("submit", (event) => __awaiter(void 0, void 0, void 0, function* () {
    event.preventDefault();
    const query = input.value;
    const books = yield searchBook(query);
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
}));
