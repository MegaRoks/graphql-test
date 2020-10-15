import { Resolver, Query, Arg, Mutation, FieldResolver, Root } from 'type-graphql';

import { Author } from './../entities/author.entity';
import { Book } from './../entities/book.entity';
import { CreateBookInput, UpdateBookInput } from './../types/book.type';

@Resolver(() => Book)
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
            const book = await Book.findOne(bookId);
            if (!book) {
                throw new Error('Book not found!');
            }
            return book;
        } catch (error) {
            console.error(error);
        }
    }

    @Mutation(() => Book)
    public async createBook(@Arg('data') data: CreateBookInput): Promise<Book> {
        try {
            const book = Book.create(data);
            await book.save();
            return book;
        } catch (error) {
            console.error(error);
        }
    }

    @Mutation(() => Book)
    public async updateBook(@Arg('bookId') bookId: string, @Arg('data') data: UpdateBookInput): Promise<Book> {
        try {
            const book = await Book.findOne(bookId);
            if (!book) {
                throw new Error('Book not found!');
            }
            Object.assign(book, data);
            await book.save();
            return book;
        } catch (error) {
            console.error(error);
        }
    }

    @Mutation(() => Boolean)
    public async deleteBook(@Arg('bookId') bookId: string): Promise<Boolean> {
        try {
            const book = await Book.findOne(bookId);
            if (!book) {
                throw new Error('Book not found!');
            }
            await book.remove();
            return true;
        } catch (error) {
            console.error(error);
        }
    }

    @FieldResolver()
    private async author(@Root() book: Book): Promise<Author> {
        try {
            return await Author.findOne(book.authorId, { cache: 1000 });
        } catch (error) {
            console.error(error);
        }
    }
}
