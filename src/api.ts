export async function searchBook(query: string) { 
    const promise = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`);

    let result = await promise.json();
    // console.log(result.docs);
    const books = result.docs.slice(0, 5).map((doc: any) => {
        return {
            title: doc.title,
            author: doc.author_name ? doc.author_name.join(", ") : "Unknown",
            year: doc.first_publish_year ?? "Unknown",
            cover: doc.cover_i ? `https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg` : null
        };
    });
    // console.log(books);
    return books;
}

// const query: string = "metamorphosis"
// searchBook(query);