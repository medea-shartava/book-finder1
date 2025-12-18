export class Book {
    title: string;
    author: string;
    year: number | string;
    cover: string | null;

    constructor(title: string, author: string, year: number | string, coverUrl: string | null) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.cover = coverUrl;
    }
}