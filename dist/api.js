var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export function searchBook(query) {
    return __awaiter(this, void 0, void 0, function* () {
        const promise = yield fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`);
        let result = yield promise.json();
        // console.log(result.docs);
        const books = result.docs.slice(0, 5).map((doc) => {
            var _a;
            return {
                title: doc.title,
                author: doc.author_name ? doc.author_name.join(", ") : "Unknown",
                year: (_a = doc.first_publish_year) !== null && _a !== void 0 ? _a : "Unknown",
                cover: doc.cover_i ? `https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg` : null
            };
        });
        // console.log(books);
        return books;
    });
}
// const query: string = "metamorphosis"
// searchBook(query);
