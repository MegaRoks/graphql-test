import { Resolver, Query, Arg, Mutation } from 'type-graphql';

import { Author } from './../entities/author.entity';
import { CreateAuthorInput, UpdateAuthorInput } from './../types/author.type';

@Resolver(() => Author)
export class AuthorResolver {
    @Query(() => [Author])
    public async getAuthorsList(): Promise<Author[]> {
        try {
            return await Author.find();
        } catch (error) {
            console.error(error);
        }
    }

    @Query(() => Author)
    public async getAuthor(@Arg('authorId') authorId: string): Promise<Author> {
        try {
            const author = await Author.findOne(authorId);
            if (!author) {
                throw new Error('Author not found!');
            }
            return author;
        } catch (error) {
            console.error(error);
        }
    }

    @Mutation(() => Author)
    public async createAuthor(@Arg('data') data: CreateAuthorInput): Promise<Author> {
        try {
            const author = Author.create(data);
            await author.save();
            return author;
        } catch (error) {
            console.error(error);
        }
    }

    @Mutation(() => Author)
    public async updateAuthor(@Arg('authorId') authorId: string, @Arg('data') data: UpdateAuthorInput): Promise<Author> {
        try {
            const author = await Author.findOne(authorId);
            if (!author) {
                throw new Error('Author not found!');
            }
            Object.assign(author, data);
            await author.save();
            return author;
        } catch (error) {
            console.error(error);
        }
    }

    @Mutation(() => Boolean)
    public async deleteAuthor(@Arg('authorId') authorId: string): Promise<Boolean> {
        try {
            const author = await Author.findOne(authorId);
            if (!author) {
                throw new Error('Author not found!');
            }
            await author.remove();
            return true;
        } catch (error) {
            console.error(error);
        }
    }
}
