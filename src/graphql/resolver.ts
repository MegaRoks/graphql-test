import { Author } from './../entities/author.entity';
import { Book } from './../entities/book.entity';
import connection from './../database';

import { Connection } from 'typeorm';

export default {
    async getBooks() {
        return connection
            .then((connect: Connection) => {
                const authorRepository = connect.getRepository(Book);
                return authorRepository.find();
            })
            .catch((err) => {
                console.error('error', err);
            });
    },
};
