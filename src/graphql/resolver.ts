const author = {
    authorId: 1,
    name: 'Author 1',
};

const books = [
    {
        bookId: 1,
        name: 'Book 1',
        pageCount: 22,
        authorId: 1,
        author,
    },
];

export default {
    getBooks() {
        return books;
    },
};
