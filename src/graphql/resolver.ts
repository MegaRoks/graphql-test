import { Author } from './../entities/author.entity';
import connection from './../database';

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
    async getBooks() {
        return connection
            .then((connect) => {
                const authorRepository = connect.getRepository(Author);
                return authorRepository.find();
            })
            .catch((err) => {
                console.error('error', err);
            });
    },
};
