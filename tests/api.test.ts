import * as api from "../src/api";

describe("Async API module", () => {
  it("should return correct Book objects", async () => {
    // Arrange
    const query = "metamorphosis";

    // Act
    const books = await api.searchBook(query);

    // Assert
    expect(books.length).toBe(5);

    books.forEach((book: any) => {
      expect(book).toBeInstanceOf(api.Book);
      expect(book.title).toBeDefined();
      expect(book.author).toBeDefined();
      expect(book.year).toBeDefined();
      expect(book).toHaveProperty("cover");
    });
  });

  it("should be called with correct query", async () => {
    const spy = jest.spyOn(api, "searchBook");
    const query = "metamorphosis";

    await api.searchBook(query);

    expect(spy).toHaveBeenCalledWith(query);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should return empty array', async () => {
        const books = await api.searchBook('');
        expect(books).toEqual([]);
    });
});
