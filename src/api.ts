// import { Book } from "./book.js";

export class Book {
  constructor(
    public title: string,
    public author: string,
    public year: number | string,
    public cover: string | null
  ) {}
}

export async function searchBook(query: string) {
  const promise = await fetch(
    `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`
  );

  let result = await promise.json();
  // console.log(result.docs);
  const books = result.docs.slice(0, 5).map((doc: any) => {
    return new Book(
      doc.title,
      doc.author_name ? doc.author_name.join(", ") : "Unknown",
      doc.first_publish_year ?? "Unknown",
      doc.cover_i
        ? `https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg`
        : null
    );
  });
  // console.log(books);
  return books;
}

// const query: string = "metamorphosis"
// searchBook(query);
