import { Resolver, Query, Arg } from 'type-graphql';

import { Book } from './../entities/book.entity';

@Resolver()
export class BookResolver {
    @Query(() => [Book])
    public async getBooksList(): Promise<Book[]> {
        try {
            return await Book.find();
        } catch (error) {
            console.error(error);
        }
    }

    @Query(() => Book)
    public async getBook(@Arg('bookId') bookId: string): Promise<Book> {
        try {
            return await Book.findOne(bookId);
        } catch (error) {
            console.error(error);
        }
    }
}
