import { createConnection } from 'typeorm';

import { Author } from './../entities/author.entity';
import { Book } from './../entities/book.entity';

export default createConnection({
    type: process.env.DATABASE_TYPE as 'postgres',
    host: process.env.DATABASE_HOST,
    port: +process.env.DATABASE_PORT,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [Author, Book],
    synchronize: true,
    logging: false,
})
    .catch((err) => {
        console.error('err', err);
    });
